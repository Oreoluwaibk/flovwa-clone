"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getUserProfile } from "@/utils/supabase/auth";
import { createClient } from "@/utils/supabase/client";

const messages = ["Redirecting...", "Confirming your account status..."];

function AuthCallbackPage() {
  const { user, setSession, setUser } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const supabase = createClient()

  const [messageIndex, setMessageIndex] = useState(0);

  // Cycle messages every 1.5 seconds
  const handleGetProfile = async (id: string) => {
    getUserProfile(id)
    .then(res => {
      if(!res.data.name) router.replace("/onboarding");
      else router.replace("/dashboard");
    }) 
    .catch(err => {
      console.log("www",err);
    })
  }

  useEffect(() => {
    const code = params.get("code") as string;
    const error = params.get("error");
    
    if (error) {
      router.replace("/auth/login?error=oauth_failed");
      return;
    }
    
    if (!code) return;

    async function handleOAuthCode() {
      const { data, error } =  await supabase.auth.getSession();
      if (error) {
        router.replace("/auth/login?error=oauth_failed");
        return;
      }
      
      if(data) {
        localStorage.setItem("flowva-clone-user-auth", JSON.stringify(data))
        setUser(data.session?.user!);
        setSession(data.session)
        handleGetProfile(data.session?.user.id || "")
      }
    }

    handleOAuthCode();
  }, [supabase, params, router]);

  useEffect(() => {
    if(user) handleGetProfile(user.id)
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white gap-5">
      {/* Logo with scale animation + glass overlay */}
      <motion.div
        className="relative w-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <Image
          src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png"
          // fill
          style={{ objectFit: "contain" }}
          alt="Safe Harbour"
          width={180}
          height={130}
        />
        {/* Glass overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-0 left-[-50%] w-[50%] h-full bg-linear-to-r from-white/0 via-white/60 to-white/0 rotate-12"
            animate={{ x: ["-50%", "250%"] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Animated messages */}
      <div className="text-center text-gray-700 text-lg h-6 relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5 }}
            className=" w-full"
          >
            {messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

const Page = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthCallbackPage />
      </Suspense>
  );
};

export default Page
