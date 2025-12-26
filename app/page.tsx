"use client"
import { Card, Layout } from "antd";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
const { Content } = Layout;
export default function Home() {
  const router = useRouter();
  const variants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
  };
  return (
    <Layout className="min-h-screen! flex justify-center py-5 px-3 items-center bg-linear-to-br! from-[#9013fe]! to-[#6D28D9]!">
      <Content className="flex justify-center items-center w-full max-w-105">
        <motion.div initial="hidden" animate="visible" variants={variants} className="w-full">
          <Card styles={{ body: {padding: "2rem" }}} className="w-full shadow-lg bg-white rounded-[10px]">
             <div className="mb-7.5 text-center">
              <h1 className="text-2xl text-[#6D28D9] font-semibold mb-2">Welcome to flowva clone demo</h1>
              
              <div className="flex flex-row-reverse mt-auto pt-8 w-full gap-4">
          <button
            type="button"
            
            onClick={() => router.push("/auth/login")}
            className={`inline-flex w-full justify-center font-semibold items-center transition-all duration-[0.25s] text-white rounded-[100px] py-3 px-5 border-none bg-[#9013FE] hover:bg-[#A29BFE] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => router.push("/auth/signup")}
            className="bg-transparent w-full font-medium border-none shadow-none rounded-xl hover:text-[#9013FE] hover:underline text-sm"
          >
            Sign up
          </button>
        </div>
            </div>
          </Card>
        </motion.div>
      </Content>
    </Layout>
  );
}
