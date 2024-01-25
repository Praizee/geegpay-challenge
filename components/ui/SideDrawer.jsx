"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Drawer, Space } from "antd";
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
          <ArrowRight className="h-4 w-4" />
          <p className="sr-only">Expand</p>
        </Link>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={280}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default SideDrawer;
