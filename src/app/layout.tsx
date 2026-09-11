import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { company } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skilledgetechsolutions.com"),
  title: {
    default: `${company.name} | ${company.taglinePlain}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Practical technology training and consulting. We help professionals move into data, ERP and AI roles, and help businesses get real value from their digital investments.",
  keywords: [
    "Business Analysis training",
    "Dynamics 365 Business Central",
    "Microsoft Power Platform",
    "AI skills for business",
    "ERP implementation",
    "Power BI training",
    "Nigeria tech training",
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_NG",
    url: "/",
    title: `${company.name} | ${company.taglinePlain}`,
    description:
      "Practical technology training and consulting, built around real business case studies and a capstone project you can show.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: `${company.name}. ${company.taglinePlain}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.taglinePlain}`,
    description:
      "Practical technology training and consulting, built around real business case studies and a capstone project you can show.",
    images: ["/brand/og-image.png"],
  },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
