"use client"
import React, { useState } from "react";
import { postRequest } from "@/utils/api";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { toggleModal } from "@/redux/slice";

export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const response = await postRequest('auth/login', formData);

    if (response.statusCode == 200) {
      console.log('LOGED IN');
      console.log(response);
      alert('successfully signed in');
      router.push('/');
    } else {
      console.log('ERROR LOGED IN');
      console.log(response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div style={{ height: '90vh', width: '95vw' }} className="flex flex-wrap content-center justify-center">
        <form className="w-96" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-4">SIGN IN</h1>

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.email} onChange={handleChange}
          />

          <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.password} onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
          >
            LogIn
          </button>
        </form>
      </div>
    </>
  )
} 