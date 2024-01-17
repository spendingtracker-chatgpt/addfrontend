"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import {useRouter} from 'next/navigation';
import { useEffect } from 'react';
import  SignUp from "/public/images/signup.svg"
const API = "http://127.0.0.1:5000";

export default function Registre () {

  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const res = await fetch(`${API}/auth/register` ,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
          username:email,
          lastname:lastName,
          firstname:firstName,
          password:Password,
      })
    })
    const data = await res.json();
    console.log(data)
    
  };
  const handleLoginClick = () => {
    router.push('/login')
  };
  return (
    
        <section className=" justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center  px-8 md:px-12">
        <div className="w-1/2 p-4">
            <h2 className="font-bold text-2xl text-[#111]">Sign Up</h2>
            <form className="flex flex-col gap-4">
            <div className="relative flex items-center mt-10">
                <i
                className="fas fa-envelope absolute left-3 text-gray-500"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                ></i>
                <input
                className="p-2 pl-10  rounded-xl border w-full"
                type="text"
                name="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="relative flex items-center">
                <i className="fas fa-user-alt absolute left-3 text-gray-500"></i>
                <input
                className="p-2 pl-10 rounded-xl border w-full"
                type="text"
                name="first_name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="relative flex items-center">
                <i className="fas fa-user-alt absolute left-3 text-gray-500"></i>
                <input
                className="p-2 pl-10 rounded-xl border w-full"
                type="text"
                name="first_name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="relative flex items-center">
                <i className="fas fa-lock absolute left-3 text-gray-500"></i>
                <input
                className="p-2 pl-10 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

                <button
                className="bg-[#0f94c4] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-10"
                type="button"
                  onClick={handleSignup}
                >
                Sign Up
                </button>  
                <button
                    className="bg-white border py-2 rounded-xl text-[#0f94c4] hover:scale-105 duration-300"
                    type="button"
                    onClick={handleLoginClick}
                >
                    Login
                </button>         
            </form>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <Image src={SignUp} alt='st' height={300} width={1000} />
        </div>   
        </div>
        </section>
  );
};

