"use client"

import React, {lazy} from 'react'
// import Lottie from 'lottie-react';
import dynamic from "next/dynamic";
import animationData from "../animations/animation.json";
import IconClose from "../icons/IconClose.svg";
const Lottie = dynamic(()=>import("lottie-react"), {ssr:false});
export default function Modal({visible=false, setShowModal}:{visible:boolean, setShowModal:any}) {
  return (
    <>
    <div className={`absolute w-full min-h-full bg-opacity-40 bg-black left-0 top-0 ${!visible && "hidden"}`}></div>
    <div className={`absolute w-full bottom-0 rounded-2xl overflow-hidden bg-white text-center ${!visible ? "translate-y-full" : "translate-y-0"} duration-500`}>
    <div className='w-full flex justify-center bg-buttonshade border-[1px] p-4 border-gray-100 text-left bottom-0'>
        <div className='absolute right-8 top-8  rounded-full p-2 group hover:bg-shadedgray cursor-pointer duration-300' onClick={()=>setShowModal(false)}>
    <IconClose className="group-hover:-rotate-90 duration-300 "></IconClose>
    </div>
        <div className='w-20'>
                <Lottie
      autoplay
      loop
      animationData={animationData}
      width={10}
      height={10}
      
    
    />
    </div>

    </div>
    <div className='p-4 pb-8 px-10'>
        <h2 className='text-[22px] font-medium mb-4'>Thank you!</h2>
        <p className='text-[16px] leading-6'>Every detail is important. Please, be aware about spacing, animations, transitions, easing, sizing and timing.</p>
    </div>
    </div>
    </>
  )
}
