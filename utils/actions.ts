"use server"
import { createClientForServer } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

const signInWithGoogle = async () => {
    const supabase = await createClientForServer()
    const callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: callback_url
        }
    });

    console.log("auth data", data)

    if(error) {
        console.error(error)
        return
    }
    redirect(data.url)
} 

async function signUpNewUser (email: string, password: string) {
    const supabase = await createClientForServer()
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${process.env.SITE_URL}`,
        },
    })

    console.log("sig up", data,error);
    
}





export { signInWithGoogle, signUpNewUser }