"use client"
import { Badge, Card, Layout } from 'antd';
import React, { ReactNode, useCallback, useState } from 'react'
import SideMenu from './SideMenu';
import { BellFilled, MenuOutlined } from "@ant-design/icons"
import { NotificationBell } from '../NotificationBell';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface DashboardProps {
    children: ReactNode;
    active: string;
    title: string | ReactNode;
    description?: string;
}

const { Content, Sider } = Layout;
const DashboardContainer: React.FC<DashboardProps> = ({
    children,
    active,
    title,
    description
}) => {
    const [open, setOpen] = useState(false);
    const { logout, user, loading, session  } = useAuth();

    if(!session) return null
  return (
    <Layout>
        <Sider 
            className='rounded-none! hidden overflow-x-hidden md:flex flex-col shadow-md h-screen border-r border-[#e5e7eb] text-black font-sans sticky! top-0! bottom-0!'
            width={280}
        >
            <SideMenu 
                handleLogout={logout} 
                loading={loading} 
                active={active}
                onCancel={() => setOpen(false)} 
                open={open} 
                user={user}
            />
        </Sider>
        <Content className='w-full bg-gray-50 px-4lg:px-8 lg:pt-8 min-h-screen grow md:overflow-y-auto box-border lg:min-h-0'>
            <Card
                title={
                    <div className='pt-4'>
                        <div className='flex items-center gap-3'>
                            {<MenuOutlined  className='md:hidden! text-2xl' onClick={() => setOpen(!open)} />}
                            <p className='text-xl md:text-[1.5rem] font-medium'>{title}</p>
                        </div>
                        
                        <p className='text-gray-600 font-normal'>{description}</p>
                    </div>
                }
                className='bg-gray-50'
                extra={<span>
                    <NotificationBell />
                </span>}
                classNames={{ header: "bg-gray-50!", body: "bg-gray-50!"}}
            >
                {children}
            </Card>
        </Content>
    </Layout>
  )
}

export default DashboardContainer