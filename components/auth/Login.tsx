"use client"
import React from 'react'
import { AuthContainer } from '../containers/AuthContainer';
import { Button, Form, Input } from 'antd'
import { useAuth } from '@/context/AuthContext';

const FormItem = Form.Item;


const Login = () => {
    const [form] = Form.useForm();
    const { loginWithEmail, loading } = useAuth();

    const handleSubmit = () => {
        form.validateFields()
        .then(value => {
            loginWithEmail(value.email, value.password)
        })
    }
    

    const IconRenderer = (visible: boolean) => (
    <p className='cursor-pointer text-[#A78BFA]! h-fit font-medium text-xs m-auto'>{visible ? "Hide" : "Show"}</p>
    )
  return (
    <AuthContainer 
        active='login'
        description='Log in to receive personalized recommendations'
        title='Log in to flowva'
        authBtnTitle='Sign in with Google'
        redirectLinkTitle='Sign up'
        redirectTitle="Don't have an account?"
        redirectTo='/auth/signup'
    >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <FormItem label="Email" name="email" rules={[{required: true}]}>
                <Input type="email" placeholder='your@email.com' />
            </FormItem>

            <FormItem label="Password" name="password" rules={[{required: true}]}>
                <Input.Password iconRender={IconRenderer}  placeholder='••••••••' />
            </FormItem>
            <div className="flex justify-end items-center w-full -mt-1.25">
                <a className=" text-[#9013fe]! no-underline text-sm font-medium hover:underline" href="/auth/forgot-password" data-discover="true">Forgot Password?</a>
            </div>

            <FormItem className='mt-2!'>
                <Button type="primary" htmlType='submit' loading={loading} className="w-full text-base! h-13.75! flex justify-center gap-2 items-center p-2.75! bg-[#9013FE]! text-white  font-medium! border-none transition-colors ease-linear duration-200 rounded-[100px]! hover:bg-[#6D28D9]!">Sign in</Button>
                {/* <button type="submit" onClick={handleSubmit} className="w-full text-base h-13.75  flex justify-center gap-2 items-center p-2.75 text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9]">Sign in</button> */}
            </FormItem>
        </Form>
    </AuthContainer>
  )
}

export default Login