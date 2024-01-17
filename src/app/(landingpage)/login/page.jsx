"use client"
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image'
import Modal from '@/components/Modal/Modal';

import Login from "/public/images/login.svg"
const API = "http://127.0.0.1:5000";

export default function LoginForm () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch(`${API}/auth/login` ,{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
          username:email,
          password:password,
      })
    })
    
    const data = await res.json();
    const { message, tokens, error } = data;
    console.log(tokens)
    
    if (error) {
      return (
        <Modal show={true}>
          <h3>Error</h3>
          <p>{error}</p>
        </Modal>
      );
    }
    if (message) {
      const res = await fetch(`${API}/auth/whoami` ,{
        method: 'GET',
        headers:{
          'Authorization':`Bearer ${tokens.access}`,
          'Content-Type':'application/json'
        }
      })
      const data2 = await res.json();
      const user_id = data2.user_details.id;
      console.log(data2.user_details.id)
      localStorage.setItem('token',tokens.access)
      localStorage.setItem('refresh',tokens.refresh)
      localStorage.setItem('user_id',user_id)
      return (
          router.push('/dashboard')
      );
    }
  };
  const handleRegistreClick = () => {
    router.push('/registre')
  };
  return (
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center px-8 md:px-12">
        <div>
          <h2 className="font-bold text-2xl text-[#111]">Login</h2>
          <p className="text-xs mt-4 text-[#111]">
            If you are already a member, easily log in
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="email"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
            </div>
            <button
              className="bg-[#0f94c4] rounded-xl text-white py-2 hover:scale-105 duration-300"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#111]">
            <p>Don't have an account?</p>
            </div>
              <button 
                className="bg-white border py-2 rounded-xl text-[#0f94c4] hover:scale-105 duration-300"
                type='button'
                onClick={handleRegistreClick}
              >
                Register
              </button>
            
          <div className="mt-5 text-xs border-b border-[#111] py-4 text-[#111]">
            <a href="#">Forgot your password?</a>
          </div> 
          </form>         
        </div>        
        <div className="md:block hidden w-1/2">
          <Image src={Login} alt='st' height={300} width={1000} />
        </div>
      </div>
  );
};
