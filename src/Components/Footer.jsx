import React from 'react'
import logo from "../assets/logo.svg"
import { GoDash } from 'react-icons/go'

const Footer = () => {
  return (
    <div className='bg-white py-10'>
      <div className='container sectionContainer grid grid-cols-1  md:grid-cols-5 px-2.5 justify-evenly'>
        {/* 1 St */}
        <div className='col-span-2'>
          <img className='mb-5' src={logo} alt="" />
          <div>
            <h2><span className='font-bold text-gray-500 text-2xl'>Call Us</span><p className='text-2xl text-blue-500 font-bold mb-4'>123 456 7890</p></h2>
            <p className='text-[#696969] font-medium text-[14px] mb-5'>329 Queensberry Street, North Melbourne VIC</p>
            <p className='text-[#696969] font-medium text-[14px] mb-5'>3051, Australia.</p>
            <p className='text-[#696969] font-medium text-[14px] mb-5'>support@superio.com</p>
          </div>
        </div>
        {/* 2 nd */}
        <div>
          <h2 className='text-2xl font-bold text-gray-500 mb-4'>For Candidates</h2>
          <div>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Browse Jobs</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Browse Categories</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Job Alerts</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>My Bookmarks</h2>
          </div>
        </div>
        {/* 3 nd */}
        <div>
          <h2 className='text-2xl font-bold text-gray-500 mb-4'>For Employers</h2>
          <div>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Browse Candidates</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Employer Dashboard</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Add Job</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Job Packages</h2>
          </div>
        </div>
        {/* 4 nd */}
        <div>
          <h2 className='text-2xl font-bold text-gray-500 mb-4'>About Us</h2>
          <div>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>About Us</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Job Page Invoice</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Terms Page</h2>
            <h2 className='text-[#696969] font-medium text-[14px] mb-5 hover:underline'>Articles</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer