// pages/dashboard/more.jsx

import React from 'react';
import Link from 'next/link';
import {
  MdOutlineContactSupport,
  MdOutlineInfo,
} from "react-icons/md";

const More = () => {
  return (
    <div>
      <h1>More Options</h1>
      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#0f94c4] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
        <Link href='/dashboard/contact'>
          <div className="flex items-center gap-2">
            <MdOutlineContactSupport className="text-2xl text-gray-600 group-hover:text-white" />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
              Contact Us
            </h3>
          </div>
        </Link>
      </div>
      <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#0f94c4] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
        <Link href='/dashboard/about'>
          <div className="flex items-center gap-2">
            <MdOutlineInfo className="text-2xl text-gray-600 group-hover:text-white" />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
             About us 
            </h3>
            <p>
            Spending Tracker is an innovative web application that centralizes all financial transactions made through electronic transfers (e-transfer). Leveraging advanced web-scraping features and the assistance of artificial intelligence, this application provides a detailed history of all incoming and outgoing transfers from the bank account.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default More;
