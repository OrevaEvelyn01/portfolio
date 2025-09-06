import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black text-gray-700 flex justify-center gap-15 items-center px-6 py-6 text-xl'>
    <p>&copy; Obison Orevaoghene</p>

    <div className='flex gap-10'>
      <a href="#" className=' '> <FaFacebook /></a>
      <a href="#"> <FaLinkedinIn /></a>
      <a href="#"> <FaXTwitter /></a>
    </div>

    </div>
  )
}

export default Footer
