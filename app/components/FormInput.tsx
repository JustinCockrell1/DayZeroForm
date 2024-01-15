import Image from 'next/image'
import React, {useState} from 'react'
import IconAsterisk from "../icons/required-asterisk.png";

export default function FormInput(
  {label,type, id, Icon, placeholder="", required=false, errorMessage="", value, onChange}:{label:string, Icon:any, type:string, id:string, placeholder?:string, required?:boolean, errorMessage?:string, value:string, onChange:any}) {
  

  const error = errorMessage.length>0;

    

  return (
    <>
    <label htmlFor={id} className=' mt-3'>
      <span className='text-xs flex'>{label} {required&&<Image src={IconAsterisk} alt=""></Image>}</span>
      </label>
      <div className='w-full relative'>
        <Icon className={`absolute left-0 top-0 bottom-0 m-auto ${ error?  "fill-error" : "fill-[#201E1C]"}`}></Icon>
        <input 
        onChange={(v)=>(onChange(v.target.value))}
        value={value} 
        className={`${error ? "text-error" : "text-[#201E1C]"} text-[16px] w-full border-b-2 ${error ? "border-error" : "border-[#201E1C]"} outline-none p-2 pl-6 font-normal placeholder:font-light ${error ? "placeholder-error" : "placeholder-[#CCC]"} focus:border-error bg-background`}
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        />
      </div>
      {error && <p className='text-error text-xs font-light'>{errorMessage}</p>}
      </>
  )
}
