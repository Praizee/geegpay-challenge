"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Drawer, Space } from "antd";

import Logo from "@/assets/svg/Logo";
import DashboardIcon from "@/assets/svg/DashboardIcon";
import Avatar from "@/assets/png/profile.png";
import Trend from "@/assets/svg/Trend";
import People from "@/assets/svg/People";
import Box from "@/assets/svg/Box";
import Discount from "@/assets/svg/Discount";
import InfoIcon from "@/assets/svg/InfoIcon";
import Settings from "@/assets/svg/Settings";
import Logout from "@/assets/svg/Logout";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeToggle } from "../others/theme-toggle";
import ArrowRight from "@/assets/svg/ArrowRight";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Link
          onClick={showDrawer}
          className="flex items-center lg:justify-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <RxHamburgerMenu className="h-4 w-4" />
          <p className="sr-only">Expand</p>
        </Link>
      </Space>
      <Drawer
        // title="Drawer"
        placement={placement}
        width={80}
        onClose={onClose}
        closable={false} // Set closable to false
        open={open}
        bodyStyle={{
          padding: 0,
          background: "#F7F8FA",
          color: "#26282C",
          border: "none",
          borderStyle: "none",
        }} // Remove default padding
      >
        <div className="w- p-0 top-0 bottom-0  left-0 sticky h-full overflow-auto bg-[#F7F8FA] dark:bg-gray-800 transition-all duration-300 ease-in-out">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b border-[#E5EAEF] dark:border-white/40  px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <Logo className="h-10 w-10" />
              </Link>
            </div>
            <div className="flex-1 overflow-auto">
              <nav className="flex flex-col h-full justify-between items-start px-4 text-sm font-medium space-y-4">
                <div className="w-full space-y-4">
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <DashboardIcon className="h-4 w-4" />
                    <p className="hidden">Home</p>
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <Trend className="h-4 w-4" />
                    <p className="hidden">Trends</p>
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <People className="h-4 w-4" />
                    <p className="hidden">Customers</p>
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <Box className="h-4 w-4" />
                    <p className="hidden">Products</p>
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <Discount className="h-4 w-4" />
                    <p className="hidden">Discounts</p>
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <InfoIcon className="h-4 w-4" />
                    <p className="hidden">Info</p>
                  </Link>

                  {/* Toggle */}
                  <ThemeToggle />
                </div>

                <div className="w-full space-y-4">
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <ArrowRight className="h-4 w-4 " />
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <Settings className="h-4 w-4" />
                    <p className="hidden">Settings</p>
                  </Link>
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <Logout className="h-4 w-4" />
                    <p className="hidden">Logout</p>
                  </Link>
                </div>
                <div className="h-8 w-full bg-white dark:bg-black/50" />
              </nav>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;
