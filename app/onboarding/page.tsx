"use client"
import { Step1 } from '@/components/onboarding/Step1';
import { Step2 } from '@/components/onboarding/Step2';
import StepThree from '@/components/onboarding/Step3';
import Step4 from '@/components/onboarding/Step4';
import StepFive from '@/components/onboarding/Step5';
import StepSix from '@/components/onboarding/Step6';
import { useAuth } from '@/context/AuthContext';
import { updateUserProfile } from '@/utils/supabase/auth';
import { createClient } from '@/utils/supabase/client';
import { LoadingOutlined } from '@ant-design/icons';
import { App } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'


type StepActions = {
  goNext: (name?: string) => void;
  goBack: () => void;
};

interface Profile {
    name: string;
    last_name: string;
    email: string;
    profile_pic: string;
    interest: string;
    goal: string;
    country: string;
    city: string;
    flag: string;
    country_code: string;
    country_code_iso3: string;
    is_author: boolean;
    role: string[];
    tools: string[];
    total_points: number;
    referral_count: number;
}

function renderStep(step: number, actions: StepActions, setProfile: React.Dispatch<React.SetStateAction<Profile>>, loading?: boolean) {
  switch (step) {
    case 1:
      return <Step1 onNext={actions.goNext} />;

    case 2:
      return <Step2 onNext={(interest) => {
        setProfile((prev) => ({ ...prev, interest }))
        actions.goNext()
    }} onBack={actions.goBack} />;

    case 3: 
        return <StepThree  onNext={(category) => {
            setProfile((prev) => ({ ...prev, goal: category }));
            actions.goNext()
        }}
        onBack={actions.goBack} />;

    case 4: 
        return <Step4 onContinue={(tools) => {
            const newTool = tools.map((tool) => {
                return tool.name
            })
            setProfile((prev) => ({ ...prev, tools: newTool }))
            actions.goNext();
        }} onBack={actions.goBack} />;

    case 5: 
        return <StepFive
            onBack={actions.goBack}
            onNext={actions.goNext}
      />;

    case 6: 
       return <StepSix
            onBack={actions.goBack}
            onFinish={(name) => {
                setProfile((prev) => ({ ...prev, name }));
                actions.goNext(name);
            }}
            loading={loading}
        />

    default:
      return <div>Done 🎉</div>;
  }
}

const page = () => {
    const router = useRouter();
    const { user } = useAuth();
    const { message } = App.useApp()
    const [step, setStep] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const [ profile, setProfile ] = useState<Profile>({
        name: "",
        goal: "",
        interest: "",
        tools: [],
        last_name: "",
        email: "",
        profile_pic: "",
        country: "",
        city: "",
        flag: "",
        country_code: "",
        country_code_iso3: "",
        is_author: false,
        role: ["user"],
        total_points: 0,
        referral_count: 0
    })
    const [ isPending, startTransition ] = useTransition();

    const goNext = (name?: string) => {
        if(step === 6) handleFinish(name);
        else setStep((s) => s + 1)
    };

    const goBack = () => setStep((s) => s - 1);

    const handleFinish = (name?: string) => {
        setLoading(true);
        const payload: Profile = {
            ...profile,
            name: name || ""
        }
        const user_id = user && user.id || ""
        updateUserProfile(user_id, payload)
        .then(res => {
            startTransition(() => router.replace("/dashboard"));
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            message.error(err)
        })
    }

  return (
    <div className="min-h-dvh flex justify-center lg:items-center  px-2 relative bg-white">
        {!isPending &&  (step === 3 ? (renderStep(step, { goNext, goBack }, setProfile))  : (
            <div className="max-w-140 w-full bg-white box-border m-x-auto p-6 lg:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative h-fit my-8">
                {renderStep(step, { goNext, goBack }, setProfile, loading)}
            </div>
        ))}

        {isPending && <div className="max-w-140 w-full bg-white box-border m-x-auto p-6 lg:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative h-fit my-8">
                {/* <div className="max-w-[500px] w-full bg-white my-[2rem] p-[28px] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative h-fit"> */}
                     <div className="flex-1 flex justify-center flex-col text-center">
                        <h1 className="text-[#212529] text-[2rem] font-bold">
                        Welcome to Flowva
                        </h1>

                        <p className="text-[0.95rem] text-[#495057]">
                        We are preparing your personalized Dashbaord 
                        </p>

                        <div className='mt-3'>
                            <LoadingOutlined spin className='text-[#495057] text-3xl!' />
                        </div>
                    </div>
                {/* </div> */}
        </div>}
        
    </div>
  );
}

export default page