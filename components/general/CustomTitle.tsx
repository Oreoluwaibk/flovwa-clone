import React from 'react'

const CustomTitle = ({ title, fontSize }: { title: string, fontSize?: string }) => {
  return (
    <p className={`text-lg md:${fontSize||"text-2xl"} my-3 text-black border border-l-4 border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-3 font-semibold`}>{title}</p>
  )
}

export default CustomTitle