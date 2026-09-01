import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";



const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Detailed Engineering, CAE, Pipeline, FEA, CFD Simulations & Research and Development-ProSIM",
  description: "Discover ProSIM Bangalore's home for CAE, FEA and engineering outsourcing services, including piping design, seismic qualification and structural integrity assessment for global clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
 <head>
        <link
          rel="icon"
          href="/assets/images/favicon/favicon.webp"
          type="image/png"
        />
      </head>

      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}