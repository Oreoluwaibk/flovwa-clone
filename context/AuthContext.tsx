// context/AuthContext.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { App } from "antd";
import { getUserProfile } from "@/utils/supabase/auth";
import { IUserProfile } from "@/utils/interface";
import { generatePKCE } from "@/utils/pkce";
import { AuthError, Session, User } from "@supabase/supabase-js";


export type UserProfile = {
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
  category?: string;
  created_at: string;
};

type AuthContextType = {
  user: User | null;
  session: any | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  savePassword: (password: string) =>Promise<{ data: { user: null; }; error: AuthError; } | { data: { user: User; }; error: null; }>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  success:boolean;
  setUser: React.Dispatch<SetStateAction<User | null>>;
  setSession: React.Dispatch<SetStateAction<Session | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const supabase = createClient();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { modal } = App.useApp()

  useEffect(() => {
    const init = async () => {
      const authStorage = localStorage.getItem("flowva-clone-user-auth");
      let authDetails = null;
      if(authStorage) authDetails = JSON.parse(authStorage)

      if(authDetails) {
        setSession(authDetails.session);
        setUser(authDetails.user || authDetails.session.user)
      }else {
        router.replace("/auth/login")
      }
    };

    init();
  }, []);

  
  const loginWithEmail = async (email: string, password: string) => {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      modal.error({
        title: error.message,
        onOk: () => setLoading(false)
      })
    }

    if (data?.user) {
      localStorage.setItem("flowva-clone-user-auth", JSON.stringify(data))
      setUser(data?.user);
      setSession(data.session);
      router.replace("/auth/callback");
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { 
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
        data: { name: "John Doe" }
      },
    });

    if (error) {
      modal.error({
        title: error.message,
        onOk: () => setLoading(false)
      })
      setSuccess(false)
    }
    if (data?.user) {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setSuccess(true);
    }

    setLoading(false);
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`, // page user comes back to
      });

      setLoading(false);

      if (error) {
        setSuccess(false);
        return
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSuccess(false);
    }
  };

  const savePassword = async (password: string): Promise<{ data: { user: null; }; error: AuthError; } | { data: { user: User; }; error: null; }> => {
   
    setLoading(true);
    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setSuccess(false);
      return { data, error }
    }
    
    
    setSuccess(true);
    return { data, error }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { 
        redirectTo: callback_url,
      },
    });
    setLoading(false);
    if (error) console.log("errr", error)
    if(data) router.replace(data.url || "");
  };

  const logout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setLoading(false);
    localStorage.removeItem("flowva-clone-user-auth")
    router.replace("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ savePassword, sendPasswordResetEmail, setSession, setUser,user, success, session, loading, loginWithEmail, signUpWithEmail, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
