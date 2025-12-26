import { Card, Col, Row, Tabs, TabsProps } from 'antd'
import React, { useState } from 'react'
import CustomTitle from '../general/CustomTitle'
import RedeemCard from '../general/RedeemCard';
import { Reward } from '@/utils/interface';

const RedeemRewards = () => {
  const [ active, setActive ] = useState("1");
  const [ counts, setCounts ] = useState({
    all: 0,
    unlocked: 0,
    locked: 0,
    commingSoon: 0
  })
  const [ rewards ] = useState<Reward[]>([
    {
      id: "rw-001",
      title: "$5 Bank Transfer",
      description: "The $5 equivalent will be transferred to your bank account.",
      type: "payment",
      value: 5,
      points: 5000,
    },
    {
      id: "rw-002",
      title: "$5 PayPal International",
      description:
        "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
      type: "payment",
      value: 5,
      points: 5000,
    },
    {
      id: "rw-003",
      title: "$5 Virtual Visa Card",
      description:
        "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
      type: "card",
      value: 5,
      points: 5000,
    },
    {
      id: "rw-004",
      title: "$5 Apple Gift Card",
      description:
        "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
      type: "card",
      value: 5,
      points: 5000,
    },
    {
      id: "rw-005",
      title: "$5 Google Play Card",
      description:
        "Use this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store.",
      type: "card",
      value: 5,
      points: 5000,
    },
    {
      id: "rw-006",
      title: "$5 Amazon Gift Card",
      description:
        "Get a $5 digital gift card to spend on your favorite tools or platforms.",
      type: "card",
      value: 5,
      points: 5000,
    },
    {
      id: "rw-007",
      title: "$10 Amazon Gift Card",
      description:
        "Get a $10 digital gift card to spend on your favorite tools or platforms.",
      type: "card",
      value: 10,
      points: 10000,
    },
    {
      id: "rw-008",
      title: "Free Udemy Course",
      description: "Coming Soon!",
      type: "course",
      value: 0,
      points: 0,
    },
  ]);

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: <p>All Rewards <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${active === "1" ?`bg-[#9031fe]/10 text-[#9031fe]` : "text-[#CBD5E0]  bg-[#E2E8F0]"} font-semibold`}>{counts.all}</span></p>
      // children: <EarnPoints />
    },
    {
      key: "2",
      label: <p>Unlocked <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${active === "2" ?`bg-[#9031fe]/10 text-[#9031fe]` : "text-[#CBD5E0]  bg-[#E2E8F0]"} font-semibold`}>{counts.unlocked}</span></p>
      // children: <RedeemRewards />
    },
    {
      key: "3",
      label: <p>Locked <span className={`ml-3 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${active === "3" ?`bg-[#9031fe]/10 text-[#9031fe]` : "text-[#CBD5E0]  bg-[#E2E8F0]"} font-semibold`}>{counts.unlocked}</span></p>
      // children: <RedeemRewards 3>
    },
    {
      key: "4",
      label: <p>Coming Soon <span className={`ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center ${active === "4" ?`bg-[#9031fe]/10 text-[#9031fe]` : "text-[#CBD5E0]  bg-[#E2E8F0]"} font-semibold`}>{counts.unlocked}</span></p>
      // children: <RedeemRewards />
    }
  ]
  return (
    <Card
      title={<CustomTitle title='Redeem Your Points' fontSize="xl" />}
      classNames={{ header: "p-0!"}}
      variant="borderless"
    >
      <Tabs 
        activeKey={active}
        items={tabItems}
        className='tab_rewards w-full'
        onChange={(key) => setActive(key)}
      />

      <Row gutter={[15, 15]} className='h-80'>
        {rewards.map((reward) => (
          <Col lg={6} sm={12} xs={24} className='h-full'>
            <RedeemCard reward={reward} />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default RedeemRewards