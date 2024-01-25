import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/others/ThemeProvider";

const Jarkata = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://stephen-adeniji.vercel.app/"),

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
    images: "/assets/svg/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Jarkata.className} !bg-[#FAFAFA] dark:!bg-gray-800`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

{
  /* <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <BackToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html> */
}
