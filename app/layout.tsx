import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Footer/Footer";
import ImagePriority from "./Components/ImagePriority";
import Script from "next/script";

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

const siteUrl = "https://www.pro-sim.com";

const siteTitle =
  "ProSIM | Detailed Engineering, CAE, Pipeline, FEA, CFD Simulations & Research and Development";

const siteDescription =
  "Discover ProSIM Bangalore's home for CAE, FEA and engineering outsourcing services, including piping design, seismic qualification and structural integrity assessment for global clients.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    absolute: siteTitle,
  },

  description: siteDescription,

  applicationName: "ProSIM",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "jCiNe7_izmiAZMPcbmgQZQAGwkvclmG59lUrRv5HWBE",
  },

  icons: {
    icon: [
      {
        url: "/assets/images/favicon/favicon.webp",
        type: "image/webp",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ProSIM",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/images/favicon/favicon.webp",
        alt: "ProSIM",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

// WebSite and Organization structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "ProSIM",
      alternateName: [
        "Pro SIM",
        "ProSIM",
        "ProSIM R&D",
        "prosim",
        "prosim.com",
      ],
      url: `${siteUrl}/`,
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ProSIM R&D Pvt. Ltd.",
      alternateName: ["ProSIM", "Pro SIM", "Prosim"],
      url: `${siteUrl}/`,

      // Replace this with your actual company logo URL.
      logo: `${siteUrl}/assets/images/logo/logo.webp`,

      sameAs: [
        "https://www.linkedin.com/company/prosim-r-d-pvt-ltd/",
      ],
    },
  ],
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
      <body>
        <Header />

        <ImagePriority />

        {/* WebSite + Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <main>{children}</main>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-153697714-1"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'UA-153697714-1');
          `}
        </Script>

        <Footer />
      </body>
    </html>
  );
}

