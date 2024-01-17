"use client"
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
import SideNavbar from "@/components/SideNavBar/SideNavBar";
import Image from "next/image";
import Invest from "/public/images/invest.svg"
const API = "http://127.0.0.1:5000";

export default function AddBank() {
    const router = useRouter();
    const [Name, setName] = useState('');
    const [MailAddress, setMailAddress] = useState('');
    const [CurrentAmount, setCurrentAmount] = useState('');
    const add_bank = async () => {
        const res = await fetch(`${API}/bank/add` ,{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user_id:localStorage.getItem('user_id'),
                name:Name,
                mail_adress:MailAddress,
                current_amount:CurrentAmount,
            })
          })
          const data = await res.json();
          console.log(data)
          return (
            router.push('/dashboard/add_bank')
        );
      };
  return (
    <>
    
<section class="bg-gray-50 dark:bg-transparent p-3 sm:p-5 antialiased">
    

        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-1/2 p-4">
            <h2 className="font-bold text-2xl text-[#bbb]">Add Bank</h2>
            <form className="flex flex-col gap-4">
            <div className="relative flex items-center mt-10">
                <i
                className="fas fa-envelope absolute left-3 text-gray-500"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                ></i>
                <input
                className="p-2 pl-10  rounded-xl border w-full bg-gray-200"
                type="text"
                name="Name"
                placeholder="Bank Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="relative flex items-center">
                <i className="fas fa-user-alt absolute left-3 text-gray-500"></i>
                <input
                className="p-2 pl-10 rounded-xl border w-full bg-gray-200"
                type="text"
                name="MailAddress"
                placeholder="Mail Address"
                value={MailAddress}
                onChange={(e) => setMailAddress(e.target.value)}
                />
            </div>
            <div className="relative flex items-center">
                <i className="fas fa-user-alt absolute left-3 text-gray-500"></i>
                <input
                className=" p-2 pl-10 rounded-xl border w-full bg-gray-200"
                type="text"
                name="CurrentAmount"
                placeholder="Current Amount"
                value={CurrentAmount}
                onChange={(e) => setCurrentAmount(e.target.value)}
                />
            </div>

                {/* <button
                className="bg-[#0f94c4] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-10"
                type="button"
                  onClick={handleSignup}
                >
                Sign Up
                </button>           */}
            </form>
            </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button  type="button" onClick={add_bank} class="flex items-center justify-center text-white bg-[#0f94c4] p-50 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-[#0f94c4]">
                        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add Bank
                    </button>
                </div>
            </div>
            <div class="overflow-x-auto">
            <h2 className="font-bold text-2xl text-[#bbb] m-10">Banks</h2>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-4">ID</th>
                            <th scope="col" class="px-4 py-3">Name</th>
                            <th scope="col" class="px-4 py-3">Mail Address</th>
                            <th scope="col" class="px-4 py-3">Current Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">--</th>
                            <td class="px-4 py-3">--</td>
                            <td class="px-4 py-3">--</td>
                            <td class="px-4 py-3">--</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
   
</section>


    </>
  );
  }