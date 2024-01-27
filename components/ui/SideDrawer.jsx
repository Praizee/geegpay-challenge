"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Drawer, Space } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

import DashboardIcon from "@/assets/svg/DashboardIcon";
import Trend from "@/assets/svg/Trend";
import People from "@/assets/svg/People";
import Box from "@/assets/svg/Box";
import Discount from "@/assets/svg/Discount";
import InfoIcon from "@/assets/svg/InfoIcon";
import Settings from "@/assets/svg/Settings";
import Logout from "@/assets/svg/Logout";
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
              <button
                onClick={onClose}
                className="text-2xl font-semibold text-gray-600 dark:text-gray-50"
              >
                <MdOutlineCancel className="w-7 h-7" />
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <nav className="flex flex-col h-full justify-between items-start px-4 text-sm font-medium space-y-4">
                <div className="w-full space-y-4">
                  <Link
                    className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
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
                    {/* <DashboardIcon className="h-4 w-4" /> //disabled cause  the dark classes 'breaks' it, doesn't display */}
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
