import DashboardLayout from "@/components/layout/DashboardLayout";
import { ThemeProvider } from "@/components/others/ThemeProvider";
import React from "react";

const page = ({ pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DashboardLayout {...pageProps} />
    </ThemeProvider>
  );
};

export default page;
