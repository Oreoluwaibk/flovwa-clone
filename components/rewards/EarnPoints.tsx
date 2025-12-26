import { Button, Card, Col, Input, List, Progress, Row } from 'antd'
import React from 'react'
import CustomTitle from '../general/CustomTitle'
import { CalendarOutlined, CopyOutlined, FacebookFilled, GiftFilled, LinkedinFilled, ShareAltOutlined, UserAddOutlined, UsergroupDeleteOutlined, WhatsAppOutlined, XFilled } from '@ant-design/icons'
import RewardIcon from '../svgs/RewardIcon'
import StarIcon from '../svgs/StarIcon'
import DailyICon from '../svgs/DailyICon'
import Plus from '../svgs/Plus'
import StarPurple from '../svgs/StarPurple'
import ShareIcon from '../svgs/ShareIcon'
import ShareBtn from '../general/ShareBtn'
import Copy from '../svgs/Copy'
import FaceBookIcon from '../svgs/FaceBookIcon'
import XIcon from '../svgs/XIcon'
import LinkedinIcon from '../svgs/LinkedinIcon'
import WhatsapIcon from '../svgs/WhatsapIcon'

const weekdays = ["M","T","W","T","F","S","S"]
const EarnPoints = () => {
  return (
    <Row gutter={[15, 15]}>
      <Col lg={24} sm={24} xs={24}>
        <Card 
          classNames={{ header: "px-0! bg-gray-50! border-0!", body: "bg-gray-50! px-0! border-0!"}}
          className=' bg-gray-50! px-0! border-0!'
          title={<CustomTitle title='Your Rewards Journey' />}
          variant="borderless"
        >
          <Row gutter={[15, 15]} className='min-h-80'>
            <Col lg={8} sm={24} xs={24}>
              <Card 
               className='h-full shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl! hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6]! overflow-hidden transition-shadow duration-200'
                classNames={{ header: "bg-[#eef2ff]! py-0! px-3!"}}
                title={
                  <div className='flex items-center gap-2'>
                    <RewardIcon />
                    <p>Point Balance</p>
                  </div>
              }>
                <div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-extrabold text-[36px] text-[#9013fe] m-[10px_0]'>0</p>
                    <StarIcon />
                  </div>

                  <div className='flex flex-col gap-0'>
                    <div className='flex items-center justify-between'>
                      <p className='text-gray-600'>Progress to <span className="font-medium">$5 Gift Card</span></p>
                      <span className="font-medium">0/5000</span>
                    </div>

                    <Progress showInfo={false} />

                    <p className="text-xs text-gray-500 mt-2">🚀 Just getting started — keep earning points!</p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={8} sm={24} xs={24}>
              <Card 
              className='h-full shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl! hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6]! overflow-hidden transition-shadow duration-200'
                classNames={{ header: "bg-[#eef2ff]! py-0! px-3!" }}
              title={
                <div className='flex items-center gap-2'>
                  <DailyICon />
                  <p>Daily Streak</p>
                </div>
              }>
                <div>
                  <div className="font-extrabold text-[36px] text-[#9013fe] mb-2">0 day</div>

                  <div className='flex items-center justify-center gap-2'>
                  {weekdays.map((item, i) => (
                    i ===3 ? <span className='h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ring-2 ring-[#9013fe] ring-offset-2'>{item}</span> :<span className='h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 '>{item}</span>
                  ))}
                  </div>
                  <p className="text-[0.875rem] text-gray-600 text-center mt-3">Check in daily to to earn +5 points</p>
                  <button className="mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-[#9013fe] text-white hover:shadow-[0_4px_12px_rgba(144,19,254,0.2)] hover:-translate-y-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-5 w-5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Claim Today's Points</button>
                </div>
              </Card>
            </Col>

             <Col lg={8} sm={24} xs={24}>
              <Card 
               className='h-full shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-2xl! hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6]! overflow-hidden transition-shadow duration-200'
               classNames={{ header: "m-0! p-0!", body: "px-0! py-1! h-fit!", actions: "py-0!"}}
              title={
               <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
                <span className="tabsolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">Featured</span>
                <div className="flex items-center justify-between">
                    <h3 className="text-[1.25rem] font-bold relative z-2">Top Tool Spotlight</h3> 
                    <div className="overflow-hidden relative rounded-full size-10 md:size-10">
                      <img src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png"/>
                    </div>
                  </div>
                  <p className="text-lg"><strong> Reclaim</strong></p>
                </div>
              }
              actions={[
                <div className='flex items-center justify-between mx-4'>
                  <Button icon={<UserAddOutlined />} type='primary' className="bg-[#9013fe]! hover:bg-[#8628da]! text-white py-2! px-4! rounded-full! font-semibold! transition-all duration-200 flex items-center justify-center gap-2 border-0! h-9!">Sign up</Button>
                  <Button type='primary' className='bg-[linear-gradient(45deg,#9013FE,#FF8687)]! text-white!  py-2 px-4 rounded-full! h-9! font-semibold! text-sm!' icon={<GiftFilled className='text-white' />}>Claim 50 Pts</Button>
                </div>
              ]}
            >
               <div className="px-4 pt-2"><div className="flex justify-start"><div className="w-6 h-6 animate-pulse bg-[#eef2ff] rounded-md flex items-center justify-center mr-4 shrink-0 text-[#9013fe]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg></div><div className="flex-1"><h4 className="mb-1 font-semibold">Automate and Optimize Your Schedule</h4><p className="text-[0.875rem] text-gray-600">Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!</p></div></div></div>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col lg={24} sm={24} xs={24}>
        <Card 
          classNames={{ header: "px-0! bg-gray-50! border-0!", body: "bg-gray-50! px-0! border-0!"}}
          className='h-full  bg-gray-50! px-0! border-0!'
          title={<CustomTitle title='Earn More Points' />}
          variant="borderless"
        >
          <Row gutter={[15, 15]}>
            <Col lg={8} sm={24} xs={24}>
              <Card 
              className='transition-all hover:border-[#9013fe]! hover:-translate-y-1.25! hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border! border-[#e5e7eb]! rounded-xl overflow-hidden'
              classNames={{ header: "p-0! m-0!", body: "p-0! m-0! "}}
              title={
                <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
                  <StarPurple />
                  <div>
                    
                    <h3 className="font-semibold">Refer and win 10,000 points!</h3>
                    </div>
                  </div>
              }>
               <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of <span className="text-[#9013fe]">10,000 points</span>. Friends must complete onboarding to qualify.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={8} sm={24} xs={24}>
              <Card 
              classNames={{ header: "p-0! m-0!", body: "p-0! m-0! "}}
               className='h-full transition-all hover:border-[#9013fe]! hover:-translate-y-1.25! hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border! border-[#e5e7eb]! rounded-xl overflow-hidden'
              title={
                <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
                  <ShareIcon />
                  <div><h3 className="font-semibold">Share Your Stack</h3><p className="text-xs text-gray-500">Earn +25 pts</p></div></div>
              }>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Share your tool stack</p>
                    </div>
                    <ShareBtn />
                  </div>
                </div>
              </Card>
            </Col>

          </Row>
        </Card>
      </Col>

      <Col lg={24} sm={24} xs={24}>
        <Card 
          classNames={{ header: "px-0! bg-gray-50! border-0!", body: "bg-gray-50! px-0! border-0!"}}
          className=' bg-gray-50! px-0! border-0!'
          title={<CustomTitle title='Earn More Points' />}
          variant="borderless"
        >
         <div className="shadow-[0_5px_15px_rgba(0,0,0,0.05)]  rounded-2xl hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
            <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-6 w-6 text-[#9013fe]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>

                <div>
                  <h3 className="text-xl font-semibold text-gray-700">Share Your Link</h3>
                  <p className="text-gray-500 text-sm">Invite friends and earn 25 points when they join!</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-6">
                <div className="flex justify-between mb-4">
                  <div className="text-center p-2 flex-1">
                    <div className="text-[1.5rem] font-semibold text-[#9013fe]">0</div>
                    <div className="gtext-gray-600">Referrals</div>
                  </div>
                  <div className="text-center p-2 flex-1">
                    <div className="text-[1.5rem] font-semibold text-[#9013fe]">0</div>
                    <div className="gtext-gray-600">Points Earned</div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm mb-2 text-gray-700">Your personal referral link:</p>
                  <div className="relative">
                    <input type="text"  className="flex-1  border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10" value="https://app.flowvahub.com/signup/?ref=oreol6486"/>
                    <button className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer z-10">
                      <Copy />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:-translate-y-0.75" style={{background: "rgb(24, 119, 242)"}}>
                    <FaceBookIcon />
                  </button>
                  <button className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:-translate-y-0.75" style={{background: "black"}}>
                    <XIcon />
                  </button>
                  <button className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:-translate-y-0.75" style={{background: "rgb(0, 119, 181)"}}>
                    <LinkedinIcon />
                  </button>
                  <button className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:-translate-y-0.75" style={{background: "rgb(37, 211, 102)"}}>
                   <WhatsapIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        </Card>
      </Col>
    </Row>
  )
}

export default EarnPoints