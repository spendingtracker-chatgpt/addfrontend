"use client"
import React from 'react';
import SideNavbar from "@/components/SideNavBar/SideNavBar";
import Image from "next/image";
import Invest from "/public/images/invest.svg"
const API = "http://127.0.0.1:5000";

export default function AddMail() {
    const authorize = async () => {
        const res = await fetch(`${API}/gmail/authorize`)
        const data = await res.json();
        const link = data.link;
        const oa_link = window.open(data.link,'_blank').addEventListener('credentials',(event)=>{
            console.log('received data',event.data)
            oa_link.close();
        })
        // setTimeout(()=>{
            
        // },6000);
        console.log(link)
      };
  return (
    <>
    
<section class="bg-gray-50 dark:bg-transparent p-3 sm:p-5 antialiased">
        
        
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button  type="button" onClick={authorize} class="flex items-center justify-center text-white bg-[#0f94c4] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-[#0f94c4]">
                        <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add mail
                    </button>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-4">Refresh token</th>
                            <th scope="col" class="px-4 py-3">Access token</th>
                            <th scope="col" class="px-4 py-3">Created date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">--</th>
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