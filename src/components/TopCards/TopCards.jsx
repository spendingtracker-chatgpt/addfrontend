import React from 'react';
import { GiPayMoney } from "react-icons/gi";

const TopCards = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        <GiPayMoney size={20} className='text-gray-400' /> My Spending Tracker</h2>
      <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
          <h4 className='text-gray-400 mb-2'>Your Income</h4>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>Dhs 1220,00</p>
            <p className='text-gray-600'>Your Income Amount </p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+18%</span>
          </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
          <h4 className='text-gray-400 mb-2'>Total Expenses</h4>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>Dhs 230,21</p>
            <p className='text-gray-600'>Your Total Spend</p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-yellow-500 text-lg'>+2%</span>
          </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
          <h4 className='text-gray-400 mb-2'>Total Money</h4>
          <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>Dhs 11,437</p>
            <p className='text-gray-600'>Total money in your Accounts</p>
          </div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+12%</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopCards;
