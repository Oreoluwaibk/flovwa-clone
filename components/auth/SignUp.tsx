"use client"
import React from 'react'
// import AuthContainer from '../containers/AuthContainer'
import { Button, Form, Input } from 'antd'
import { createClient } from '@/utils/supabase/client'
import { AuthContainer } from '../containers/AuthContainer';
import { useAuth } from '@/context/AuthContext';
import { signUpNewUser } from '@/utils/actions';

const supabase = createClient();
const FormItem = Form.Item;

const SignUp = () => {
    const [form] = Form.useForm();
    const { signUpWithEmail, loading, success } = useAuth();
    // const { signUpWithEmail } = useAuth()

    const handleSubmit = () => {
        form.validateFields()
        .then(value => {
            console.log("ddjdjd", value)
            signUpWithEmail(value.email, value.password)
        })
    }
    
    const IconRenderer = (visible: boolean) => (
    <p className='cursor-pointer text-[#A78BFA]! h-fit font-medium text-xs m-auto'>{visible ? "Hide" : "Show"}</p>
    )
  return (
    <AuthContainer 
        active='sign up'
        description='Sign up to manage your tools'
        title='Create Your Account'
        authBtnTitle='Sign in with Google'
        redirectLinkTitle='Login'
        redirectTitle="Already have an account?"
        redirectTo='/auth/login'
    >
        {success && !loading && <div className=" text-[#166534] bg-[#f0fdf4] border-green-500/20   border p-3 rounded-md mb-5 text-[12px] flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>Verification email sent. Please check your inbox.</span></div>}
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <FormItem label="Email" name="email" rules={[{required: true}]}>
                <Input type="email" placeholder='your@email.com' />
            </FormItem>

            <FormItem 
                label="Password" 
                name="password"
                rules={[
                    { required: true, message: "Please enter your new password!" },
                    { min: 8, message: "Password must be at least 8 characters long!" },
                    {
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/,
                        message: "Password must contain letters and numbers.",
                    },
                ]}
                hasFeedback    
            >
                <Input.Password iconRender={IconRenderer}  placeholder='••••••••' />
            </FormItem>

            <FormItem 
                label="Confirm Password" 
                name="confirm_password"
                rules={[
                    { required: true, message: "Please confirm your password!" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(
                            new Error("Passwords do not match!")
                        );
                        },
                    }),
                ]}
            >
                <Input.Password iconRender={IconRenderer} placeholder='••••••••' />
            </FormItem>

            <FormItem className='mt-5!'>
                <Button type="primary" htmlType='submit' loading={loading} className="w-full text-base! h-13.75! flex justify-center gap-2 items-center p-2.75! bg-[#9013FE]! text-white  font-medium! border-none transition-colors ease-linear duration-200 rounded-[100px]! hover:bg-[#6D28D9]!">Sign up Account</Button>
                {/* <button type="submit" className="w-full text-base h-13.75  flex justify-center gap-2 items-center p-2.75 text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9]">Sign up Account</button> */}
            </FormItem>
        </Form>
    </AuthContainer>
  )
}

export default SignUp