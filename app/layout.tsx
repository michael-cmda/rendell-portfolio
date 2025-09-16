import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rendell Yap - IT System Administrator & Cybersecurity Specialist",
  description:
    "Professional portfolio of Rendell C. Yap, IT System Administrator & Cybersecurity Specialist with 10+ years of experience in system administration, network security, and data privacy compliance.",
  generator: "v0.app",
  keywords:
    "IT Administrator, Cybersecurity, System Administration, Network Security, Data Privacy, CEH, CySA+, Philippines",
  authors: [{ name: "Rendell C. Yap" }],
  openGraph: {
    title: "Rendell Yap - IT System Administrator & Cybersecurity Specialist",
    description:
      "Professional portfolio showcasing expertise in cybersecurity, system administration, and IT infrastructure management.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
