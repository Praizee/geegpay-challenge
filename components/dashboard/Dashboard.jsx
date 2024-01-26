import React from "react";
import Link from "next/link";
import { Flex, ProgressBar, Text } from "@tremor/react";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import OrderIcon from "@/assets/svg/OrderIcon";
import OrderGraph from "@/assets/svg/OrderGraph";
import IncreasePercentage from "@/assets/svg/IncreasePercentage";
import DecreasePercentage from "@/assets/svg/DecreasePercentage";
import RefundIcon from "@/assets/svg/RefundIcon";
import RefundGraph from "@/assets/svg/RefundGraph";
import SalesIcon from "@/assets/svg/SalesIcon";
import SalesGraph from "@/assets/svg/SalesGraph";
import IncomeIcon from "@/assets/svg/IncomeIcon";
import IncomeGraph from "@/assets/svg/IncomeGraph";
import CustomBarChart from "../others/CustomBarChart";
import { BarChartGraph } from "../others/BarChartGraph";
import OrdersTable from "../others/OrdersTable";

const Dashboard = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 z-10">
      <div className="space-y-6">
        {/* charts */}
        <div className="lg:flex gap-6">
          <Card className="flex flex-1 flex-col ">
            {/* max-w-[50rem] */}
            <CardHeader>
              <CardTitle>Sales Trends</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <BarChartGraph className="aspect-[4/3]" /> */}
              <CustomBarChart />
            </CardContent>
          </Card>

          <div className="flex-none grid md:grid-cols-2 gap-6">
            {/* order */}
            <div className="space-y-2 max-w-[16rem] bg-white dark:bg-black/50 border border-[#EDF2F7] dark:border-[#EDF2F7]/50 p-4 rounded-[0.875rem]">
              <span className="flex gap-4 justify-between">
                <OrderIcon className="w-5 h-5" />
                <OrderGraph />
              </span>
              <p className="text-[#898989] dark:text-gray-20 font-medium text-lg">
                Total Order
              </p>
              <p className="text-[#3A3F51] dark:text-gray-50 font-semibold text-2xl">
                350
              </p>
              <span className="flex gap-4 justify-between">
                <IncreasePercentage className="w-6 h-6" />
                <p className="text-[#606060] dark:text-gray-100 text-sm">
                  vs. previous month
                </p>
              </span>
            </div>

            {/* refunds */}
            <div className="space-y-2 max-w-[16rem] bg-white dark:bg-black/50 border border-[#EDF2F7] dark:border-[#EDF2F7]/50 p-4 rounded-[0.875rem]">
              <span className="flex gap-4 justify-between">
                <RefundIcon className="w-5 h-5" />
                <RefundGraph />
              </span>
              <p className="text-[#898989] dark:text-gray-20 font-medium text-lg">
                Total Refund
              </p>
              <p className="text-[#3A3F51] dark:text-gray-50 font-semibold text-2xl">
                270
              </p>
              <span className="flex gap-4 justify-between">
                <DecreasePercentage className="w-6 h-6" />
                <p className="text-[#606060] dark:text-gray-100 text-sm">
                  vs. previous month
                </p>
              </span>
            </div>

            {/* sales */}
            <div className="space-y-2 max-w-[16rem] bg-white dark:bg-black/50 border border-[#EDF2F7] dark:border-[#EDF2F7]/50 p-4 rounded-[0.875rem]">
              <span className="flex gap-4 justify-between">
                <SalesIcon className="w-5 h-5" />
                <SalesGraph />
              </span>
              <p className="text-[#898989] dark:text-gray-20 font-medium text-lg">
                Average Sales
              </p>
              <p className="text-[#3A3F51] dark:text-gray-50 font-semibold text-2xl">
                1567
              </p>
              <span className="flex gap-4 justify-between">
                <DecreasePercentage className="w-6 h-6" />
                <p className="text-[#606060] dark:text-gray-100 text-sm">
                  vs. previous month
                </p>
              </span>
            </div>

            {/* income */}
            <div className="space-y-2 max-w-[16rem] bg-white dark:bg-black/50 border border-[#EDF2F7] dark:border-[#EDF2F7]/50 p-4 rounded-[0.875rem]">
              <span className="flex gap-4 justify-between">
                <IncomeIcon className="w-5 h-5" />
                <IncomeGraph />
              </span>
              <p className="text-[#898989] dark:text-gray-20 font-medium text-lg">
                Total Income
              </p>
              <p className="text-[#3A3F51] dark:text-gray-50 font-semibold text-2xl">
                $350.000
              </p>
              <span className="flex gap-4 justify-between">
                <IncreasePercentage className="w-6 h-6" />
                <p className="text-[#606060] dark:text-gray-100 text-sm">
                  vs. previous month
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-6">
          <Card className="flex flex-1 flex-col">
            {/* w-[50rem] */}
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex justify-between">
                Last Orders
                <button className="text-lg text-[#34CAA5] font-medium">
                  See All
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* orders table */}
              <OrdersTable />
            </CardContent>
          </Card>

          <Card className="flex flex-none flex-col min-w-[30rem]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex justify-between">
                Top Platform
                <button className="text-[#34CAA5] font-medium">See All</button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <p className="text-[#22242C] dark:text-gray-50 text-lg font-semibold">
                  Book Bazaar
                </p>
                <ProgressBar value={50} color="indigo" tooltip="50" />
                <span className="flex justify-between">
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    {" "}
                    $2,500,000
                  </p>
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    +15%
                  </p>
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-[#22242C] dark:text-gray-50 text-lg font-semibold">
                  Artisan Aisle
                </p>
                <ProgressBar value={35} color="cyan" tooltip="35" />
                <span className="flex justify-between">
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    {" "}
                    $1,800,000
                  </p>
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    +10%
                  </p>
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-[#22242C] dark:text-gray-50 text-lg font-semibold">
                  Toy Troop
                </p>
                <ProgressBar value={25} color="yellow" tooltip="25" />
                <span className="flex justify-between">
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    {" "}
                    $1,200,000
                  </p>
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    +8%
                  </p>
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-[#22242C] dark:text-gray-50 text-lg font-semibold">
                  XStore
                </p>
                <ProgressBar value={15} color="red" tooltip="15" />
                <span className="flex justify-between">
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    {" "}
                    $800,000
                  </p>
                  <p className="text-[#525252] dark:text-gray-100 text-lg font-normal">
                    +6%
                  </p>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* footer */}
      <div className="">
        <p className="text-center text-[#26282C] dark:text-gray-50">
          Geegpay ©{new Date().getFullYear()} Created by{" "}
          <Link
            href="https://stephen-adeniji.vercel.app/"
            target="_blank"
            className="text-blue-400"
          >
            Stephen Adeniji
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
