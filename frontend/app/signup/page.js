"use client"
import { toggleModal } from "@/redux/slice";
import { postRequest } from "@/utils/api";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const response = await postRequest('v1/users', formData)

    if (response) {
      console.log(response);
      dispatch(toggleModal('SIGN_UP'));
      if (response.statusCode == 400) {
        alert(response.error[0])
      }
    } else {
      console.log(response);
      dispatch(toggleModal('SIGN_UP'));
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
      <div style={{ height: '90vh', width: '95vw' }} className="flex flex-wrap justify-center content-center">
        <form className="w-96" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-4">SIGN UP</h1>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.username} onChange={handleChange}
          />

          <label htmlFor="first_name" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.first_name} onChange={handleChange}
          />

          <label htmlFor="last_name" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.last_name} onChange={handleChange}
          />

          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
            Email
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
            SignUp
          </button>
        </form>
      </div>
    </>
  )
} 