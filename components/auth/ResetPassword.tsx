"use client"
import React from 'react'
import { AuthContainer } from '../containers/AuthContainer';
import { Button, Form, Input } from 'antd'
import { useAuth } from '@/context/AuthContext';

const FormItem = Form.Item;


const ResetPassword = () => {
    const [form] = Form.useForm();
    const { success, sendPasswordResetEmail, loading } = useAuth()

    const handleSubmit = () => {
        form.validateFields()
        .then(value => {
            sendPasswordResetEmail(value.email)
        })
    }

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
        {success && <div className="bg-green-50 text-green-800 py-3 px-4 rounded-md mb-5 text-center text-sm">
            <span>We've sent you a password reset link. If your email is registered, it should arrive shortly.</span>
        </div>}
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <FormItem label="Email" name="email" rules={[{required:true}]}>
                <Input type="email" placeholder='your@email.com' />
            </FormItem>

            <FormItem className='mt-5!'>
                <Button className="w-full text-base h-13.75! flex justify-center gap-2 items-center p-2.75 text-center bg-[#9013FE]! text-white!  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px]! hover:bg-[#6D28D9]" htmlType="submit" type="primary" loading={loading}>
                    Send Reset Link
                </Button>
            </FormItem>
        </Form>
    </AuthContainer>
  )
}

export default ResetPassword