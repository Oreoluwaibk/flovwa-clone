import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ConfigProvider, App } from "antd";
import { theme } from "@/theme/themeConfig";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistRoboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowva – Discover, Manage & Share Top Tools",
  description: "Discover the best tools, earn exclusive rewards, and grow with a thriving community. Join Flowva and get rewarded when your friends sign up!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <head>
      <link rel="shortcut icon" href="https://app.flowvahub.com/flowva.svg" type="image/svg+xml" />
    </head>
     <App>
      <AuthProvider>
        <ConfigProvider theme={theme}>
          <body className={`${geistRoboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} >
            {children}
          </body>
        </ConfigProvider>
      </AuthProvider>
    </App>
  </html>
  );
}
