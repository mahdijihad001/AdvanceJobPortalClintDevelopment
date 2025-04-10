import React from 'react'
import figma from "../../assets/figma.png"
import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const CompanyProfile = () => {
    return (
        <div className='bg-blue-50 rounded-md w-full py-8 p-6'>
            <div className='flex gap-5'>
                <div className='bg-[#cfd4e2] h-[70px] w-[70px] rounded-md col-span-2 flex items-center justify-center'>
                    <img src={figma} className='h-[40px] w-[40px]' alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-gray-500 text-xl'>Invision</h1>
                    <p className='mt-2.5 text-blue-500 font-medium'>Softwire Company</p>
                </div>
            </div>
            <div className='pt-8 space-y-7'>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Primary industry:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5'>Software</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Company size:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5'>501-1,000</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Founded in:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5'>2011</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Phone:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5'>123 456 7890</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Email:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5'>info@joio.com</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Location:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5'>London, UK</span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-[16px] text-[#666a74] leading-5'>Social media:</span>
                    <span className='font-bold text-[13px] text-[#696969] leading-5 flex gap-2.5'>
                        <Link className='text-[15px] text-blue-500'><FaFacebookF /></Link>
                        <Link className='text-[15px] text-blue-500'><FaLinkedin /></Link>
                        <Link className='text-[15px] text-blue-500'><FaTwitter /></Link>
                        <Link className='text-[15px] text-blue-500'><FaInstagram /></Link>
                    </span>
                </div>
                <div>
                    <Link><button className='bg-blue-200 w-full py-4 text-blue-600 rounded-md hover:bg-blue-300 duration-500 text-[14px]'>https://www.invisionapp.com</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile