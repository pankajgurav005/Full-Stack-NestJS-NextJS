"use client"
import React, { useState } from "react";
import { closeModal, openModal, toggleModal } from "@/redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { postRequest } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function Header({ isLoggedIn }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleModal = (payload) => {
    dispatch(toggleModal(payload));
  }

  const handleLogOut = async () => {
    const response = await postRequest('auth/logout', {});

    if (response.statusCode == 200) {
      console.log('LOGED OUT');
      console.log(response);
      router.push('/')
      //dispatch(toggleModal('SIGN_IN'));
    } else {
      console.log('ERROR LOGED IN');
      console.log(response);
    }
  }

  return (
    <>
      <header className="h-14 fixed w-full bg-slate-800">
        <div className="flex-wrap h-14 flex justify-end content-center gap-5">
          <div className="container flex-1 mx-auto flex justify-between items-center">
            <nav className="ml-4">
              <ul className="flex space-x-4">
                <li>
                  <span className="text-xl text-white font-bold">DEMO APP</span>
                </li>
                <li>
                  <Link href="/">
                    <span className="text-white font-bold">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-white font-bold">About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <span className="text-white font-bold">Profile</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex-1 flex flex-row justify-end">
            {isLoggedIn ? (<>
              <div className="rounded cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" onClick={() => handleLogOut()}>
                LogOut
              </div>
            </>) : (<>
              <Link href={'/signin'}>
                <div className="rounded  cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4">
                  Signin
                </div>
              </Link>
              <Link href={'/signup'}>
                <div className="rounded cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" onClick={() => handleModal('SIGN_UP')}>
                  Signup
                </div></Link></>)}

          </div>
        </div>
      </header>
    </>
  )
}