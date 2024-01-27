import React from "react";

import { ThemeProvider } from "@/components/others/ThemeProvider";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Page = () => {
  return (
    <ThemeProvider>
      <DashboardLayout />
    </ThemeProvider>
  );
};

export default Page;
