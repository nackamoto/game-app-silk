"use client";
import React from "react";
import { Layout, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import LaunchHeader from "@/components/launch/header";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

const { Content } = Layout;

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const style = {
    margin: "24px 16px 0px 24px",
    padding: 16,
    with: "100%",
    minHeight: 280,
    height: "100%",
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };
  return (
    <Layout className="flex flex-col h-full w-full bg-white overflow-hidden">
      <LaunchHeader />
      <Layout className="w-full h-full">
        <Content style={style} className={`${mulish.className} flex-1`}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          seedzelle ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}
