import NavBar from "@/components/re/navBar";
import { Inter } from "next/font/google";
import logo from "../public/logo.jpg";
import "../app/globals.css"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Donocare Technology | Leading Software & IT Consulting Company",
  description: "DonoCare Technology is a leading software company providing IT consulting, software development, web and mobile apps development, and digital marketing services for small to medium enterprises.",
  keywords: "Software Company, IT Consulting Company, Software Development Company, Web Development Company, Mobile Apps Development, Web Design Company, Software Developer, Mobile Apps Developer, Software for small business, Software for SMEs, Digital Marketing, AI, Machine Learning, Blockchain, Cloud Services, CRM, School Management Software, IT Company India, Software Company in Patna, Software Company in Bihar, Web hosting Company in Bihar",
  robots: "index, follow",
  canonical: "https://www.donocare.com",
  openGraph: {
    title: "Donocare Technology | Leading Software & IT Consulting Company",
    description: "DonoCare Technology is a leading software company providing IT consulting, software development, web and mobile apps development, and digital marketing services for small to medium enterprises.",
    type: "website",
    url: "https://www.donocare.com",
    image: logo.src,
    siteName: "Donocare Technology",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DonocareTech",
    creator: "@DonocareTech",
    title: "Donocare Technology | Leading Software & IT Consulting Company",
    description: "DonoCare Technology is a leading software company providing IT consulting, software development, web and mobile apps development, and digital marketing services.",
    image: logo.src,
  },
  alternates: {
    canonical: "https://www.donocare.com",
    languages: {
      "en-US": "https://www.donocare.com/en-us",
      "hi-IN": "https://www.donocare.com/hi-in",
    },
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#ffffff",
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Donocare Technology",
    url: "https://www.donocare.com",
    logo: logo.src,
    sameAs: [
      "https://www.facebook.com/DonocareTech",
      "https://twitter.com/DonocareTech",
      "https://www.linkedin.com/company/donocaretech/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8986113306",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business St",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon"
         href="../public/logo.jpg"
           sizes="any" /> */}
      </head>
      <body className="{inter.className} bg-lB font-poppins scroll-smooth">

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <div>
          <NavBar />
        </div>
        {children}
        <ToastContainer />

      </body>
    </html>
  );
}
