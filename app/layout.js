import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jarkata = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Geegpay Analytics Dashboard",
  description: "GeegPay Challenge - (Analytics Dashboard)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Jarkata.className} !bg-[#FAFAFA] dark:!bg-gray-800`}>
        {children}
      </body>
    </html>
  );
}
