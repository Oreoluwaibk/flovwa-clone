"use client"
import React, { useState } from 'react'
import { AuthContainer } from '../containers/AuthContainer';
import { Button, Form, Input } from 'antd'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const FormItem = Form.Item;


const SavePassword = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const { success, savePassword, loading } = useAuth();
    const [ message, setMessage ] = useState({
        title: "",
        isError: true
    })

    const handleSubmit = () => {
        form.validateFields()
        .then(async (value) => {
            savePassword(value.password)
            .then(res => {
                const data = res?.data;
                const error = res?.error;
                if(error) {
                    setMessage({
                        title: error.message,
                        isError: true
                    })
                    return
                }

                setMessage({
                    title: "Your password reset is successful, you will be redirected shortly",
                    isError: false
                })

                setTimeout(() => {
                    router.replace("/auth/login")
                }, 3000);
            })
            .catch(err => {
                setMessage({
                    title: err.message,
                    isError: true
                })
            })
        
        })
    }

    const IconRenderer = (visible: boolean) => (
        <p className='cursor-pointer text-[#A78BFA]! h-fit font-medium text-xs m-auto'>{visible ? "Hide" : "Show"}</p>
    )

  return (
    <AuthContainer 
        active='reset password'
        description='Enter your email to receive a reset link'
        title='Reset Password'
        authBtnTitle='Send Reset Link'
        redirectLinkTitle='Sign in'
        redirectTitle="Remember your password?"
        redirectTo='/auth/login'
    >
        {message.title && <div style={{ color: message.isError ? "#fb2c36" : "#016630", backgroundColor: message.isError ? "#fef2f2" : "#f0fdf4"}} className="py-3 px-4 rounded-md mb-5 text-center text-sm">
            <span>{message.title}</span>
        </div>}
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
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
                <Button className="w-full text-base h-13.75! flex justify-center gap-2 items-center p-2.75 text-center bg-[#9013FE]! text-white!  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px]! hover:bg-[#6D28D9]" htmlType="submit" type="primary" loading={loading}>
                    Save Password
                </Button>
            </FormItem>
        </Form>
    </AuthContainer>
  )
}

export default SavePassword