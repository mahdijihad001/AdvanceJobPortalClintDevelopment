import React from 'react'
import figma from "../assets/figma.png"
import { FaFileInvoiceDollar, FaRegBookmark } from 'react-icons/fa'
import { GrDocumentStore } from 'react-icons/gr'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router'

const JobCart = () => {
  return (
    <div className='p-4 sm:p-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-2.5 border border-gray-300 rounded-md'>
      {/* Logo */}
      <div className='bg-[#f3f4f7] h-[70px] w-[70px] rounded-md sm:col-span-2 flex items-center justify-center mx-auto sm:mx-0'>
        <img src={figma} className='h-[40px] w-[40px]' alt="" />
      </div>

      {/* Job Details */}
      <div className='sm:col-span-9'>
        <Link to={'/jobDetails'} className='font-bold text-lg sm:text-xl text-gray-500 mb-2 hover:text-blue-400 duration-700 block text-center sm:text-left'>
          Software Engineer (Android), Libraries
        </Link>
        <div className='flex flex-wrap justify-center sm:justify-start items-center gap-2'>
          <div className='flex items-center gap-1'>
            <span className='text-[18px] text-[#696969]'><GrDocumentStore /></span>
            <span className='text-[#696969] text-[14px] font-medium'>Segment</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-[18px] text-[#696969]'><FaLocationDot /></span>
            <span className='text-[#696969] text-[14px] font-medium'>London, UK</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-[18px] text-[#696969]'><MdOutlineWatchLater /></span>
            <span className='text-[#696969] text-[14px] font-medium'>11 hours ago</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-[18px] text-[#696969]'><FaFileInvoiceDollar /></span>
            <span className='text-[#696969] text-[14px] font-medium'>$35k - $45k</span>
          </div>
        </div>
        <div className='flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-5 pt-3'>
          <button className='bg-[#1967d2]/20 text-[#1967d2] px-3 sm:px-5 py-1.5 rounded-[50px] text-sm sm:text-base'>
            Full Time
          </button>
          <button className='bg-[#34a853]/20 text-[#34a853] px-3 sm:px-5 py-1.5 rounded-[50px] text-sm sm:text-base'>
            Private
          </button>
          <button className='bg-[#f9ab00]/20 text-[#f9ab00] px-3 sm:px-5 py-1.5 rounded-[50px] text-sm sm:text-base'>
            Urgent
          </button>
        </div>
      </div>

      {/* Bookmark Icon */}
      <div className='sm:col-span-1 flex justify-center sm:justify-end items-start sm:items-center'>
        <FaRegBookmark className='font-bold text-2xl sm:text-3xl text-gray-600 hover:text-blue-400 duration-700' />
      </div>
    </div>
  )
}

export default JobCart