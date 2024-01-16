"use client"

import React, {FormEvent, useEffect, useState} from 'react'
import FormInput from './FormInput';
import Image from "next/image"
import IconArrow from "../Icons/IconArrow.svg";
import IconEnvelope from "../Icons/IconEnvelope.svg";
import IconSend from "../Icons/IconSend.svg";
import IconProfile from "../Icons/IconProfile.svg";
import IconCalendar from "../Icons/IconCalendar.svg";
import IconPaperclip from "../Icons/IconPaperclip.svg";
import Modal from './Modal';
import { User } from '../_database/database';

const users:User[] = [];

export default function Form({onComplete}:{onComplete:any}) {

    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [link, setLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({fullName:"", dob:"", nickname:"", email:"", link:""}); 
   

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
       
        const user:User = {
            fullName, dob, nickname, email, link
        }

        // await new Promise((resolve:any)=>{setTimeout(resolve, 1000)})

        setIsLoading(false);
        if(validateForm(user)) {
        onComplete();
        clearForm();
       
        users.push(user);
              // const response = await fetch("http://localhost:4000/users", 
        // {
        //     method:"POST", 
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(user)
        // });
        }

    }

    const clearForm = () => {
      setDob("");
      setEmail("");
      setLink("");
      setFullName("");
      setNickname("");
      setErrors({fullName:"", dob:"", nickname:"", email:"", link:""})
    }
    
    const validateForm = (user:User) => { 
      let errors = {fullName:"", dob:"", nickname:"", email:"", link:""}

      if (!fullName) { 
          errors.fullName = 'A name is required to proceed'; 
      } 
      if (!email) { 
          errors.email = 'An email is required to proceed'; 
      } else if (!/\S+@\S+\.\S+/.test(email)) { 
          errors.email = 'Email is invalid'; 
      }
      if(!link) {
        errors.link = "A portfolio link is required to proceed";
      }
      if(!nickname) {
        errors.nickname = "A nickname is required to proceed"
      }
      else if(nickname.trim().includes(" ")) {
        errors.nickname = "No spaces allowed in the nickname"
      }
      else if(users.find((u)=>{
        return u.nickname==user.nickname;
      })) {
        errors.nickname = "This nickname is already taken"
      }
      setErrors(errors); 
      return (errors.dob+errors.email+errors.fullName+errors.link+errors.nickname).length<=0;
  }; 

  return (
    <div className='relative h-full'>
    <form className='p-4' onSubmit={handleSubmit} noValidate onKeyDown={handleKeyDown}>
  
      <div className='flex flex-col bg-background p-4 border-[1px] border-[#F0EDE5] rounded-lg text-left'>
    <h3 className='font-medium text-formheading'>About you</h3>
    <FormInput type="text" label='FULL NAME' id="name" required={true} Icon={IconProfile} value={fullName} onChange={setFullName} errorMessage={errors.fullName}/>
    <FormInput type="text" label='DATE OF BIRTH' id="dob" required={false} Icon={IconCalendar} value={dob} onChange={setDob} errorMessage={errors.dob}/>
    <FormInput type="text" label='NICKNAME' id="nickname" maxLength={50} required={true} Icon={IconSend} placeholder='No spaces' value={nickname} onChange={setNickname} errorMessage={errors.nickname}/>
    <h3 className='mt-3 font-medium text-formheading'>Contact Information</h3>
    <FormInput type="email" label='EMAIL' id="email" required={true} placeholder='email@domain.com' Icon={IconEnvelope} value={email} onChange={setEmail} errorMessage={errors.email}/>
    <FormInput type="text" label='PORTFOLIO LINK' id="portfolio-link" required={true} Icon={IconPaperclip} placeholder='https://' value={link} onChange={setLink} errorMessage={errors.link}/>
      </div>
      <div className='w-full flex justify-end'>

    <button 
    className='rounded-lg border-[1px] border-almostblack p-2 px-3 mt-3 text-[16px] flex items-center group animated-button hover:text-white hover:border-buttonhover duration-300' disabled={isLoading}>
      Submit my form <IconArrow className="group-hover:rotate-45 duration-300 group-hover:fill-white translate-y-[2px] ml-1 "/> 
    </button>
    </div>

  </form>

  </div>
  )
}

function handleKeyDown(e:React.KeyboardEvent) {
  if(e.key=="Enter") {
  e.preventDefault();
  }
}
