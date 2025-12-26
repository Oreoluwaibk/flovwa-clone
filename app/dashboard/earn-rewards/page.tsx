"use client"
import DashboardContainer from '@/components/containers/DashboardContainer'
import EarnPoints from '@/components/rewards/EarnPoints';
import RedeemRewards from '@/components/rewards/RedeemRewards';
import { Tabs, TabsProps } from 'antd';
import React, { useState } from 'react'

const Page = () => {
    const [ active, setActive ] = useState("1");

    const tabItems: TabsProps["items"] = [
        {
            key: "1",
            label: "Earn Points",
            children: <EarnPoints />
        },
        {
            key: "2",
            label: "Redeem Rewards",
            children: <RedeemRewards />
        }
    ]
  return (
    <DashboardContainer 
        active='Rewards Hub' 
        title='Rewards Hub'
        description='Earn Points, unlock rewards, and celebrate your progress!'
    >
        <Tabs 
            activeKey={active}
            items={tabItems}
            className='tab_rewards w-full'
            onChange={(key) => setActive(key)}
            // onChange={handleCategoryChange}
            // className="w-full"
            // defaultActiveKey="Careworker"
        />
    </DashboardContainer>
  )
}

export default Page