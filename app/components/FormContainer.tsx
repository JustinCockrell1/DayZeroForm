"use client"

import React, {useState} from 'react'
import Form from './Form'
import Image from "next/image"
import Icon from "../icons/vector.png"
import Modal from './Modal'

export default function FormContainer() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-full relative'>
    <div className="bg-buttonshade px-4 py-8">
      <span className='w-full flex items-center'>
    <h2 className=' text-[26px] font-medium mr-2'>Welcome!</h2>
    <Image src={Icon} alt="" quality={100}></Image>
    </span>
    <p className='text-[16px] mr-4 mt-1'>Please, complete the following example form.</p>
    
  </div>
  <Form onComplete={(clearForm:any)=>{setShowModal(true)}}/>
  <Modal visible={showModal} setShowModal={setShowModal}></Modal>
  </div>
  )
}
