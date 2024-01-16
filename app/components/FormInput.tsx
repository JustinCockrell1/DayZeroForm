import Image from 'next/image'
import React, {useState} from 'react'
import IconAsterisk from "../icons/required-asterisk.png";

export default function FormInput(
  {label,type, id, Icon, placeholder="", required=false, errorMessage="", value, onChange, maxLength}:{label:string, Icon:any, type:string, id:string, placeholder?:string, required?:boolean, errorMessage?:string, value:string, onChange:any, maxLength?:number}) {

  const error = errorMessage.length>0;

  let progressBarWidth; 
  if(maxLength) {
    progressBarWidth = `${Math.min((value.length / maxLength) * 100,100)}%`;
  }

  return (
    <>
    <label htmlFor={id} className=' mt-3'>
      <span className='text-xs flex'>{label} {required&&<Image src={IconAsterisk} alt=""></Image>}</span>
      </label>
      <div className='w-full relative'>
        <Icon className={`absolute left-0 top-0 bottom-0 m-auto ${ error?  "fill-error" : "fill-almostblack"}`}></Icon>
        <input 
        maxLength={maxLength}
        onChange={(v)=>(onChange(v.target.value))}
        value={value} 
        className={`${error ? "text-error" : "text-almostblack"} text-[16px] w-full border-b-[1px] ${error ? "border-error" : "border-almostblack"} ${maxLength && "border-shadedgray"} outline-none p-2 pl-6 font-normal placeholder:font-light ${error ? "placeholder-error" : "placeholder-[#CCC]"} ${!maxLength && "focus:border-error"} bg-background`}
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        />
        
        {maxLength && 
        <>
          <div
          className={`bg-error absolute bottom-0 left-0 h-[1px] transition-all`}
          style={{ width: progressBarWidth }}
        ></div>
        <div className={`${error ? "bg-error":"bg-almostblack"} flex py-1 px-2 justify-center items-center absolute right-0 top-0 bottom-0 m-auto rounded-full text-xs text-white h-fit opacity-0 ${value.length>0 && "opacity-100"} duration-500`}>
          {value.length}/{maxLength}
        </div>
        </>
        }
      </div>
      {error && <p className='text-error text-xs font-light'>{errorMessage}</p>}
      </>
  )
}
