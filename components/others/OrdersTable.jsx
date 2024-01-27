import React from "react";
import Image from "next/image";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarFallback, Avatar } from "@/components/ui/avatar";

import U1 from "../../assets/png/U1.png";
import U2 from "../../assets/png/U2.png";
import U3 from "../../assets/png/U3.png";
import U4 from "../../assets/png/U4.png";
import U5 from "../../assets/png/U5.png";
import DownloadIcon from "@/assets/svg/DownloadIcon";

const OrdersTable = () => {
  return (
    <div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-base text-[#9CA4AB] dark:text-gray-100 font-medium">
              Name
            </TableHead>
            <TableHead className="text-base text-[#9CA4AB] dark:text-gray-100 font-medium">
              Date
            </TableHead>
            <TableHead className="text-base text-[#9CA4AB] dark:text-gray-100 font-medium">
              Amount
            </TableHead>
            <TableHead className="text-base text-[#9CA4AB] dark:text-gray-100 font-medium">
              Status
            </TableHead>
            <TableHead className="text-base text-[#9CA4AB] dark:text-gray-100 font-medium">
              Invoice
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="flex gap-4">
              <Avatar className="h-8 w-8">
                <Image
                  alt="User 1"
                  src={U1}
                  width={40}
                  height={20}
                  className="w-auto"
                />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <p className="py-1 text-base text-[#3A3F51] dark:text-gray-100 font-medium">
                Marcus Bergson
              </p>
            </TableCell>
            <TableCell className="text-base text-[#737373] dark:text-gray-200 font-normal">
              Nov 15, 2023
            </TableCell>
            <TableCell className="font-medium text-base">$80,000</TableCell>
            <TableCell className="text-[#34CAA5] text-base font-normal ">
              Paid
            </TableCell>{" "}
            <TableCell className="">
              <button className="hover:text-blue-400 text-sm flex gap-2 text-[#0D062D] dark:text-gray-100 font-normal">
                <span className="py-1">
                  <DownloadIcon className="w-5 h-5 pt-1" />
                </span>
                View
              </button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex gap-4">
              <Avatar className="h-8 w-8">
                <Image
                  alt="User 2"
                  src={U2}
                  width={40}
                  height={20}
                  className="w-auto"
                />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <p className="py-1 text-base text-[#3A3F51] dark:text-gray-100 font-medium">
                Jaydon Vaccaro
              </p>
            </TableCell>
            <TableCell className="text-base text-[#737373] dark:text-gray-200 font-normal">
              Nov 15, 2023
            </TableCell>
            <TableCell className="font-medium text-base">$80,000</TableCell>
            <TableCell className="text-[#ED544E] text-base font-normal ">
              Refund
            </TableCell>
            <TableCell>
              <button className="hover:text-blue-400 text-sm flex gap-2 text-[#0D062D] dark:text-gray-100 font-normal">
                <span className="py-1">
                  <DownloadIcon className="w-5 h-5 pt-1" />
                </span>
                View
              </button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex gap-4">
              <Avatar className="h-8 w-8">
                <Image
                  alt="User 3"
                  src={U3}
                  width={40}
                  height={20}
                  className="w-auto"
                />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <p className="py-1 text-base text-[#3A3F51] dark:text-gray-100 font-medium">
                Corey Schleifer
              </p>
            </TableCell>
            <TableCell className="text-base text-[#737373] dark:text-gray-200 font-normal">
              Nov 15, 2023
            </TableCell>
            <TableCell className="font-medium text-base">$80,000</TableCell>
            <TableCell className="text-[#34CAA5] text-base font-normal ">
              Paid
            </TableCell>
            <TableCell>
              <button className="hover:text-blue-400 text-sm flex gap-2 text-[#0D062D] dark:text-gray-100 font-normal">
                <span className="py-1">
                  <DownloadIcon className="w-5 h-5 pt-1" />
                </span>
                View
              </button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex gap-4">
              <Avatar className="h-8 w-8">
                <Image
                  alt="User 4"
                  src={U4}
                  width={40}
                  height={20}
                  className="w-auto"
                />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
              <p className="py-1 text-base text-[#3A3F51] dark:text-gray-100 font-medium">
                Cooper Press
              </p>
            </TableCell>
            <TableCell className="text-base text-[#737373] dark:text-gray-200 font-normal">
              Nov 15, 2023
            </TableCell>
            <TableCell className="font-medium text-base">$80,000</TableCell>
            <TableCell className="text-[#ED544E] text-base font-normal ">
              Refund
            </TableCell>
            <TableCell>
              <button className="hover:text-blue-400 text-sm flex gap-2 text-[#0D062D] dark:text-gray-100 font-normal">
                <span className="py-1">
                  <DownloadIcon className="w-5 h-5 pt-1" />
                </span>
                View
              </button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex gap-4">
              <Avatar className="h-8 w-8">
                <Image
                  alt="User 5"
                  src={U5}
                  width={40}
                  height={20}
                  className="w-auto"
                />
                <AvatarFallback>U5</AvatarFallback>
              </Avatar>
              <p className="py-1 text-base text-[#3A3F51] dark:text-gray-100 font-medium">
                Phillip Lubin
              </p>
            </TableCell>
            <TableCell className="text-base text-[#737373] dark:text-gray-200 font-normal">
              Nov 15, 2023
            </TableCell>
            <TableCell className="font-medium text-base">$80,000</TableCell>
            <TableCell className="text-[#34CAA5] text-base font-normal ">
              Paid
            </TableCell>
            <TableCell>
              <button className="hover:text-blue-400 text-sm flex gap-2 text-[#0D062D] dark:text-gray-100 font-normal">
                <span className="py-1">
                  <DownloadIcon className="w-5 h-5 pt-1" />
                </span>
                View
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersTable;
