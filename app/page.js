import React from "react";
import { ThemeProvider } from "next-themes";

import DashboardLayout from "@/components/layout/DashboardLayout";

const page = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* enableSystem */}
      <DashboardLayout />
    </ThemeProvider>
  );
};

export default page;
