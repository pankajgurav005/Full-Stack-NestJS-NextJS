"use client"
import React, { useReducer, useState } from 'react';
import Image from "next/image";
import Header from '@/app/components/Header';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '@/app/components/Modal';
import { toggleModal } from '../redux/slice';
import { SignIn } from '@/components/Signin';
import { Signup } from '@/app/components/Signup';

export function ModalManager() {
  const isSigninModal = useSelector((state) => state.isSigninModal);
  const isSignupModal = useSelector((state) => state.isSignupModal);

  const dispatch = useDispatch();

  const handleCloseModal = (payload) => {
    dispatch(toggleModal(payload));
  }

  return(
    <>
      { isSigninModal &&  
      <>
        <ModalComponent title={'SIGN IN'} closeModal={() => handleCloseModal('SIGN_IN')}>
          <SignIn />
        </ModalComponent>
      </>
      }

      { isSignupModal &&  
      <>
        <ModalComponent title={'SIGN UP'} closeModal={() => handleCloseModal('SIGN_UP')}>
          <Signup />
        </ModalComponent>
      </>
      }
    </>
  )
}