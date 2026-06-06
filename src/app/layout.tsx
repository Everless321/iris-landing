import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jbm = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iris — 高性能多级转发控制平台",
  description: "Rust 写的多级转发平台。任意 N 跳级联、全链路 mTLS、splice 零拷贝单流近 10 Gbps、Web 面板可视化。",
  keywords: ["Iris", "转发", "中转", "Rust", "splice", "mTLS", "gRPC", "forward proxy", "realm", "gost"],
  authors: [{ name: "Everless" }],
  openGraph: {
    title: "Iris — 高性能多级转发控制平台",
    description: "任意 N 跳级联，全链路 mTLS，splice 零拷贝近线速。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${jbm.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
