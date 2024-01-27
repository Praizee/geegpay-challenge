import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jarkata = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://geegpay-challenge.vercel.app/"),

  title: "Geegpay Analytics Dashboard",
  description: "GeegPay Challenge - (Analytics Dashboard)",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/public/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Jarkata.className} !bg-[#FAFAFA] dark:!bg-gray-800 text-[#26282C] dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
