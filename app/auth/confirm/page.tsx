"use client"
import { createClient } from '@/utils/supabase/client'
import React, { Suspense, useEffect, useState } from 'react'
import { redirect, useSearchParams } from "next/navigation";
import { EmailOtpType, MobileOtpType, ResendParams } from '@supabase/supabase-js';
import { Button } from 'antd';
import { ClockCircleFilled, SendOutlined } from '@ant-design/icons';
import Image from 'next/image';

const ConfirmPage = () => {
    const supabase = createClient();
    const [ loading, setLoading ] = useState(false);
    const [ resetLoading, setResetLoading ] = useState(false);
    const [ displayMessage, setDisplayMessage ] = useState({
        title: "",
        description: "",
        isError: false,
        action: "Send verifiication link"
    })
    const [ linkMessage, setLinkMessage ] = useState("");
    const [ linkError, setLinkError ] = useState(false)
    const params = useSearchParams();
    
    useEffect(() => {
        handleVerifyOtp()
    }, []);

    const handleResendLink = async () => {
        const email = params.get("email") as string;
        const credential: ResendParams = {
            email,
            type: "signup"
        }
        
        setResetLoading(true);
        const { error, data } = await supabase.auth.resend(credential);
        setResetLoading(false);

        if(!error) {
            setLinkMessage("Link sent to your email!");
            setLinkError(false);
            return;
        }
        if(error) {
            setLinkMessage("Request Failed!");
            setLinkError(true);
        }
    }
    
    const handleVerifyOtp = async () => {
         const token_hash = params.get("token_hash") as string;
        const type = params.get("type") as EmailOtpType;
        

        console.log({ token_hash, type });
        
        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })

        if(error) {
            setDisplayMessage({
                isError: true,
                description: "The verification link you used has expired or Invalid. Please request a new verification link if your account is yet to be verified.",
                title: "Verification Link Expired",
                action: "Resend Verification Link"
            })
        }
        if (!error) {
            setDisplayMessage({
                isError: false,
                description: "🎉 Your email has been verified successfully. Redirecting to login…",
                title: "Verification successful",
                action: "Redirect to Log in"
            })

            setTimeout(()=> {
                redirect("/auth/login")
            }, 3000)
        }
    }
  return (
    <div className="min-h-dvh bg-white flex  items-center justify-center px-2 py-5">
        <div className="rounded-2xl border-t-[5px]   bg-white p-10 max-w-125 w-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]  border-[#f63a3a]">
            <div className="flex justify-center">
                <div className="flex flex-col mb-6">
                    <Image src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png" alt="Logo" width={100} height={120} className="" />
                </div>
            </div>
            <h2 className="text-3xl -mt-4 mb-3 font-semibold text-purple-600  text-center">Flowva</h2>
            <div className="flex justify-center">
                <ClockCircleFilled className='text-5xl' style={{ color: displayMessage.isError ? "#f63a3a" : "#7a0bd8" }} />
            </div>
            <h1 className="text-2xl text-[#1f2937] font-bold mb-3.75 text-center">{displayMessage.title}</h1>
            <p className="text-center text-[#4b5563] mb-6.25">{displayMessage.description}</p>
            <div className="flex justify-center">
                <Button 
                icon={<SendOutlined className='text-white!' rotate={-35} />} 
                className='text-white! rounded-[50px]! hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(144,19,254,0.3)]  hover:bg-[#7a0bd8]!  transition-all duration-300 text-center shadow-[0_4px_15px_rgba(144,19,254,0.2)]' type="primary" onClick={() => displayMessage.isError ? handleResendLink() : redirect("/auth/login")} loading={resetLoading}>{displayMessage.action}</Button>
            </div>
            <p className="text-sm mt-2 text-center" style={{ color: linkError ? "#f63a3a" : "#9810fa"}}>{linkMessage}</p>
        </div>
    </div>
  )
}

const Page = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmPage />
      </Suspense>
  );
};

export default Page;