"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import Logo from "@/assets/svg/Logo";
import DashboardIcon from "@/assets/svg/DashboardIcon";

import Avatar from "@/assets/png/profile.png";
import Trend from "@/assets/svg/Trend";
import People from "@/assets/svg/People";
import Box from "@/assets/svg/Box";
import Discount from "@/assets/svg/Discount";
import InfoIcon from "@/assets/svg/InfoIcon";
import ArrowRight from "@/assets/svg/ArrowRight";
import Settings from "@/assets/svg/Settings";
import Logout from "@/assets/svg/Logout";
import SideDrawer from "../ui/SideDrawer";

// react icons
import { IoChevronDown } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi2";
import Dashboard from "../dashboard/Dashboard";
import { ThemeToggle } from "../others/theme-toggle";

const DashboardLayout = () => {
  const date = new Date();
  const [rotation, setRotation] = useState(180);
  const isSidebarCollapsed = rotation !== 0;

  const handleClick = () => {
    setRotation((prevRotation) => (prevRotation + 180) % 360);
    // Add other stuff you want to do on click here
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* sider */}
      <div
        className={`border-r border-[#E5EAEF] dark:border-white/40 top-0 bottom-0 left-0 sticky h-screen overflow-auto hidden lg:block bg-[#F7F8FA] dark:bg-gray-800 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "w-20" : "w-[17.5rem]"
        }`}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b border-[#E5EAEF] dark:border-white/40  px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Logo className="h-10 w-10" />
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="flex flex-col h-full justify-between items-start px-4 text-sm font-medium">
              <div className="w-full space-y-4">
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <DashboardIcon className="h-4 w-4 dark:border" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Home
                  </p>
                </Link>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <Trend className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Trends
                  </p>
                </Link>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <People className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Customers
                  </p>
                </Link>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <Box className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Products
                  </p>
                </Link>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <Discount className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Discounts
                  </p>
                </Link>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <InfoIcon className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Info
                  </p>
                </Link>

                {/* Toggle */}
                <ThemeToggle />
              </div>

              <div className="w-full space-y-4">
                {/* expand/collapse */}
                <Link
                  className={`lg:flex items-center w-max hidden gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 rotate-${rotation}`}
                  href="#"
                  onClick={handleClick}
                >
                  <ArrowRight
                    className={`h-4 w-4 ${
                      isSidebarCollapsed ? "rotate-180" : ""
                    } transition-all duration-300 ease-in-out`}
                  />
                  <p className="sr-only">Expand</p>
                </Link>
                {/* end of expand/collapse */}
                <div className="flex lg:hidden items-center lg:justify-center">
                  <SideDrawer />
                </div>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <Settings className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Settings
                  </p>
                </Link>
                <Link
                  className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <Logout className="h-4 w-4" />
                  <p
                    className={`${isSidebarCollapsed ? "hidden" : "block"}
                  `}
                  >
                    Logout
                  </p>
                </Link>
              </div>
            </nav>
          </div>
          {/* end of sider */}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* navbar */}
        <header className="flex h-16 items-center sticky top-0 z-30 gap-4 border-b border-[#E5EAEF] dark:border-white/40 px-6 bg-[#F7F8FA] dark:bg-gray-800">
          <Link className="lg:hidden" href="/">
            <Logo className="h-10 w-10" />
            <span className="sr-only">Home</span>
          </Link>

          <div className="flex items-center justify-between w-full">
            <h1 className="font-semibold text-lg md:text-xl text-current dark:text-gray-50">
              Dashboard
            </h1>

            <div className="flex gap-4">
              <form className="w-full invisible md:visible">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-3.5 h-[1.125rem] w-[1.125rem] text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full min-w-[20rem] bg-inherit shadow-none appearance-none pl-8 dark:border-gray-950 dark:border text-gray-500 dark:text-gray-400"
                    // md:w-2/3 lg:w-1/3
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>

              <div className="w-full flex gap-2 invisible lg:visible py-3">
                <LuCalendarDays className="h-6 w-6 text-[#26282C] dark:text-gray-50" />
                <p className="text-[#26282C] dark:text-gray-50">
                  {date.toLocaleString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="py-2 mt-2 md:mt-0">
                <Button className="h-8 w-8" size="icon" variant="outline">
                  {/* <Notification className="h-4 w-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" /> */}
                  <HiOutlineBell className="h-6 w-6 text-[#E2A640] transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>

              {/* Avatar */}
              <div className="min-w-[13rem] max-h-[3.25rem] mt-2 md:mt-0 rounded-full border border-[#DADDDD] p-1 cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex gap-2">
                      <Image
                        alt="Avatar"
                        className="rounded-full w-[2.375rem] h-[2.375rem] "
                        // object-cover aspect-square
                        src={Avatar}
                      />
                      <span>
                        <p className="text-base text-[#26282C] dark:text-gray-50">
                          Justin Bergson
                        </p>
                        <p className="text-sm text-[#787486] dark:text-gray-400">
                          Justin@gmail.com
                        </p>
                      </span>
                      <span className="sr-only">Toggle user menu</span>
                      <span className="py-2">
                        <IoChevronDown className="h-6 w-6 text-[#26282C] dark:text-gray-50" />
                        {/* <ArrowDown className="h-6 w-6 text-[#26282C] dark:text-gray-50" /> */}
                      </span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>
        {/* end of navbar */}

        {/* main content */}
        <Dashboard />
      </div>
    </div>
  );
};

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default DashboardLayout;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { AiOutlinePieChart } from "react-icons/ai";
// import { Layout, Menu, theme } from "antd";
// import Calendar from "@/assets/svg/Calendar";
// import DashboardIcon from "@/assets/svg/DashboardIcon";
// import Dashboard from "../dashboard/Dashboard";

// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("Category", "1", <DashboardIcon />),
//   getItem("Trends", "2", <AiOutlinePieChart />),
//   getItem("Users", "3", <AiOutlinePieChart />),
//   getItem("Item 4", "4", <AiOutlinePieChart />),
//   getItem("Item 5", "5", <AiOutlinePieChart />),
//   getItem("Item 6", "6", <AiOutlinePieChart />),
//   getItem("Item 7", "7", <AiOutlinePieChart />),
//   getItem("Item 8", "8", <AiOutlinePieChart />),
// ];

// const DashboardLayout = () => {
//   const date = new Date();

//   const [collapsed, setCollapsed] = useState(false);

//   //   const {
//   //     token: { colorBgContainer, borderRadiusLG },
//   //   } = theme.useToken();

//   return (
//     <Layout className="min-h-screen">
//       <Sider
//         className="bg-inherit top-0 bottom-0 left-0 sticky h-screen overflow-auto bg-[#F7F8FA]"
//         breakpoint="lg"
//         // collapsedWidth="0"
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         <div className="p-4 mx-auto flex items-center w-full bg-[#FAFAFA]">
//           <div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               viewBox="0 0 40 40"
//               fill="none"
//             >
//               <path
//                 fill-rule="evenodd"
//                 clip-rule="evenodd"
//                 d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z"
//                 fill="#34CAA5"
//               />
//             </svg>
//           </div>
//         </div>

//         <Menu
//           className="bg-inherit"
//           //   theme="light"
//           defaultSelectedKeys={["1"]}
//           mode="inline"
//           items={items}
//         />
//       </Sider>
//       <Layout>
//         <Header className="sticky top-0 z-10 w-full flex items-center px-2 h-16 bg-inherit border-b border-[#A3A3A3]/50">
//           <div className="flex justify-between px-4">
//             <div>
//               <h1 className="text-xl text-black font-semibold">Dashboard</h1>
//             </div>
//             <span className="flex gap-2 py-1">
//               <Calendar />
//               <p className="text-black font-medium text-sm">
//                 {date.toLocaleString("en-US", {
//                   month: "long",
//                   day: "2-digit",
//                   year: "numeric",
//                 })}
//               </p>
//             </span>
//           </div>
//         </Header>
//         <Content className="p-4">
//           <Dashboard />
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Geegpay ©{new Date().getFullYear()} Created by{" "}
//           <Link href="https://stephen-adeniji.vercel.app/" target="_blank">
//             Stephen Adeniji
//           </Link>
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default DashboardLayout;
