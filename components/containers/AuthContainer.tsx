"use client";

import { Card, Divider, Layout, Button } from "antd";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";
import { googleBtn } from "../svgs/GoogleBtn";
import { useAuth } from "@/context/AuthContext";

interface AuthProps {
  children?: ReactNode;
  active: string;
  title: string;
  description: string;
  authBtnTitle?: string;
  redirectTitle?: string;
  redirectLinkTitle?: string;
  redirectTo?: string;
}

const { Content } = Layout;
const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

export const AuthContainer: React.FC<AuthProps> = ({
  children,
  active,
  title,
  description,
  authBtnTitle = "Sign in with Google",
  redirectTitle = "Already have an account",
  redirectLinkTitle = "Login",
  redirectTo = "/auth/sign",
}) => {
  const { loginWithGoogle, loading } = useAuth();

  return (
    <Layout className="min-h-screen! flex justify-center py-5 px-3 items-center bg-linear-to-br! from-[#9013fe]! to-[#6D28D9]!">
      <Content className="flex justify-center items-center w-full max-w-105">
        <motion.div initial="hidden" animate="visible" variants={variants} className="w-full">
          <Card styles={{ body: {padding: "2rem" }}} className="w-full shadow-lg bg-white rounded-[10px]">
            <div className="mb-7.5 text-center">
              <h1 className="text-2xl text-[#6D28D9] font-semibold mb-2">{title}</h1>
              <p className="text-sm text-[#6B7280]">{description}</p>
            </div>

            {children}

            {active !== "reset password" && (
              <>
                <Divider>
                  <span className="text-[13px] text-[#A78BFA] font-medium bg-white px-3">or</span>
                </Divider>
                <Button
                  className="h-12 w-full gap-2 text-[#111827] border-[#EDE9FE] rounded-md hover:bg-[#F5F3FF] flex items-center justify-center"
                  icon={<img src={googleBtn} />}
                  onClick={loginWithGoogle}
                  loading={loading}
                >
                  {authBtnTitle}
                </Button>
              </>
            )}

            <div className="text-center mt-5 text-sm">
              <p className="text-[#6B7280]">
                {redirectTitle}
                <Link href={redirectTo} className="text-[#9013fe]! font-medium hover:underline ml-1">
                  {redirectLinkTitle}
                </Link>
              </p>
            </div>
          </Card>
        </motion.div>
      </Content>
    </Layout>
  );
};
