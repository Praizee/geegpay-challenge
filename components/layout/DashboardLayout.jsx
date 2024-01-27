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
  const [rotation, setRotation] = useState(0);
  const isSidebarCollapsed = rotation === 0;

  const handleClick = () => {
    setRotation((prevRotation) => (prevRotation + 180) % 360);
    // Add other stuff you want to do on click here
  };

  const links = [
    {
      id: "dashboard",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="hover:scale-110 animation duration-200"
        >
          <path
            className="fill-[#0D062D] dark:fill-slate-200"
            d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
          ></path>
          <path
            opacity="0.4"
            d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"
            className="fill-[#0D062D] dark:fill-slate-500"
          ></path>
          <path
            d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"
            className="fill-[#0D062D] dark:fill-slate-200"
          ></path>
          <path
            opacity="0.4"
            d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"
            className="fill-[#0D062D] dark:fill-slate-500"
          ></path>
        </svg>
      ),
      title: "Dashboard",
      // <DashboardIcon className="h-4 w-4" /> //disabled cause  the dark classes 'breaks' it, doesn't display
    },
    {
      id: "trends",
      label: "Trends",
      icon: <Trend className="h-4 w-4" />,
      title: "Trends",
    },
    {
      id: "customers",
      label: "Customers",
      icon: <People className="h-4 w-4" />,
      title: "Customers",
    },
    {
      id: "products",
      label: "Products",
      icon: <Box className="h-4 w-4" />,
      title: "Products",
    },
    {
      id: "discounts",
      label: "Discounts",
      icon: <Discount className="h-4 w-4" />,
      title: "Discounts",
    },
    {
      id: "info",
      label: "Info",
      icon: <InfoIcon className="h-4 w-4" />,
      title: "Info",
    },
    // Add more links as needed
  ];

  //  active links
  const [activeLink, setActiveLink] = useState(links[0].id); // sets the first link active

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex min-h-screen w-full !bg-[#FAFAFA] dark:!bg-gray-800 text-[#26282C] dark:text-gray-50">
      {/* sider */}
      <div
        className={`border-r border-[#E5EAEF] dark:border-white/40 top-0 bottom-0  left-0 sticky h-screen overflow-auto hidden lg:block bg-[#F7F8FA] dark:bg-gray-800 transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "w-20" : "w-[14rem]"
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
                {links.map((link) => (
                  <Link
                    key={link.id}
                    className={`flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                      activeLink === link.id
                        ? "border-r-4 border-[#0D062D]"
                        : ""
                    }`}
                    href="#"
                    title={link.title}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.icon}
                    <p className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
                      {link.label}
                    </p>
                  </Link>
                ))}

                {/* Toggle */}
                <ThemeToggle />
              </div>

              <div className="w-full space-y-4">
                {/* expand/collapse */}
                <Link
                  className={`lg:flex items-center w-max hidden gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 rotate-${rotation}`}
                  href="#"
                  onClick={handleClick}
                  title="Expand/Collapse"
                >
                  <ArrowRight
                    className={`h-4 w-4 ${
                      isSidebarCollapsed ? "rotate-180" : ""
                    } transition-all duration-300 ease-in-out`}
                  />
                  <p className="sr-only">Expand</p>
                </Link>
                {/* end of expand/collapse */}
                <Link
                  className={`flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                    activeLink === "settings"
                      ? "border-r-[3px] border-[#0D062D] dark:border-gray-100"
                      : ""
                  }`}
                  href="#"
                  title="Settings"
                  onClick={() => handleLinkClick("settings")}
                >
                  <Settings className="h-4 w-4" />
                  <p className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
                    Settings
                  </p>
                </Link>
                <Link
                  className={`flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
                    activeLink === "logout"
                      ? "border-r-[3px] border-[#0D062D] dark:border-gray-100"
                      : ""
                  }`}
                  href="#"
                  title="Logout"
                  onClick={() => handleLinkClick("logout")}
                >
                  <Logout className="h-4 w-4" />
                  <p className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
                    Logout
                  </p>
                </Link>
              </div>
              <div className="h-8 w-full bg-white dark:bg-black/50" />
            </nav>
          </div>
        </div>
      </div>
      {/* end of sider */}

      <div className="flex flex-col flex-1">
        {/* navbar */}
        <header className="flex h-16 items-center sticky top-0 z-30 gap-4 border-b border-[#E5EAEF] dark:border-white/40 px-4 bg-[#F7F8FA] dark:bg-gray-800">
          <div className="lg:hidden flex gap-2">
            <SideDrawer />
            <Link href="/">
              <Logo className="h-10 w-10" />
              <span className="sr-only">Home</span>
            </Link>
          </div>

          <div className="flex items-center justify-between w-full">
            <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>

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
                <p className="text-[#26282C] dark:text-gray-50 font-medium">
                  {date.toLocaleString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="py-1 mt-2 md:mt-0">
                <Button className="h-10 w-10" size="icon" variant="outline">
                  {/* <Notification className="h-4 w-4 text-[#0D062D] transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" /> */}
                  <HiOutlineBell className="h-6 w-6 text-[#0D062D] bg-transparent transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
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
