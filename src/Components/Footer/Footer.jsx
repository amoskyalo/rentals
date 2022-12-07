import React from 'react'
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='border py-4 bg-footerColor'>
        <div className="flex flex-row justify-between items-center mx-auto md:max-w-screen-xl">
            <div className="flex flex-row items-center gap-4">
                <Link><BsTwitter className='text-2xl text-navColor'/></Link>
                <Link><BsLinkedin className='text-xl text-navColor'/></Link>
                <Link><AiFillInstagram className='text-3xl text-navColor'/></Link>
            </div>
            <div>
                <p className='text-navColor'>© Copyright <span className="font-bold">Our Name</span>. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer