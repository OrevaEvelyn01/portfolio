import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-gray-700 max-md:flex-col flex justify-center gap-15 items-center px-6 py-6 text-xl'>
    <p>&copy; Obison Orevaoghene</p>

    <div className='flex gap-10'>
      <a href="https://www.fb.com/l/6lp1kJRRR" target='_blank' className=' '> <FaFacebook /></a>
      <a href="#" target='_blank'> <FaLinkedinIn /></a>
      <a href="https://www.instagram.com/oreva_evelyn?igsh=Yml6dDRyb2hqbjl4" target='_blank'> <FaInstagram /></a>
      <a href="#" target='_blank'> <FaXTwitter /></a>
    </div>

    </div>
  )
}

export default Footer
