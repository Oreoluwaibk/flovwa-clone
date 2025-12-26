import DashboardContainer from '@/components/containers/DashboardContainer'
import React from 'react'

const Page = () => {
  return (
    <DashboardContainer 
        active='Home' 
        title='Good morning'
        description='Earn Points, unlock rewards, and celebrate your progress!'
    >
        <div></div>
    </DashboardContainer>
  )
}

export default Page