import React from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { GoSearch } from 'react-icons/go'
import BannerImage from "../../assets/banner-img-1.png"
import { FaFileUpload, FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'
import { TbBounceRightFilled } from 'react-icons/tb'

const Banner = () => {
  return (
    <div className='bg-blue-100 h-[93vh] flex items-center px-2.5'>
      <div className='container sectionContainer grid grid-cols-1 lg:grid-cols-2 items-center justify-between'>
        {/* Left Side */}
        <div className='flex flex-col justify-center items-center md:w-full'>
          <h1 className='text-[40px] text-[#202124] font-bold mb-4'>There Are <span className='text-[#1967d2]'>93,178 </span>Jobs For you!</h1>
          <h2 className='text-[#696969] text-[15px] font-normal mb-2.5'>Find Jobs, Employment & Career Opportunities</h2>
          <div className='flex items-center justify-between gap-2.5 bg-white shadow px-4 py-6 rounded-md'>
            <div className='flex items-center gap-2'>
              <FaSearch className='font-normal text-[20px] text-[#5c6770]' />
              <input className='w-full placeholder:text-[#5c6770] placeholder:font-medium text-[#5c6770] placeholder:capitalize bg-transparent outline-none px-2.5 py-2.5' type="search" placeholder='Job title or Keywords' />
            </div>
            <div className='items-center gap-2 max-sm:hidden sm:hidden md:flex'>
              <FaLocationDot className='font-normal text-[20px] text-[#5c6770]' />
              <input className='w-full placeholder:text-[#5c6770] placeholder:font-medium text-[#5c6770] bg-transparent outline-none px-2.5 py-2.5' type="search" placeholder='City or Postcode' />
            </div>
            <button className='bg-[#1967d2] px-5 py-4 font-medium rounded-md hover:bg-[#535e6d] duration-700 text-white'>Find Job</button>
          </div>
          <h3 className='text-[#696969] font-normal mt-5'> <span className='font-bold text-[#696969]'>Popular Searches :</span> Designer, Developer, Web, IOS, PHP, Senior, Engineer</h3>
        </div>
        {/* Right Side */}
        <div className='max-sm:hidden sm:hidden md:hidden lg:block w-full'>
          <img className='bg-center bg-no-repeat h-[710px] absolute bottom-0 right-[100px] w-auto' src={BannerImage} alt="" />
          {/* ToolTip 1 */}
          <div className='p-6 bg-white inline-block rounded-md shadow z-30 absolute top-[140px]'>
            <div className='flex gap-2.5 items-center'>
              <div className='bg-[#f9ab00] p-3 opacity-80 rounded-md'>
                <TfiEmail className='text-3xl text-yellow-100' />
              </div>
              <h2 className='font-bold text-[17px] text-gray-500'>Work Inquiry From Ali Tufan</h2>
            </div>
          </div>
          {/*Tooltip 2*/}
          <div className='p-6 bg-white inline-block rounded-md shadow z-30 absolute bottom-[160px] right-[450px]'>
            <div className='flex gap-2.5 items-center'>
              <div className='p-3 opacity-80 rounded-md'>
                <FaFileUpload className='text-3xl text-blue-500' />
              </div>
              <div className='flex flex-col gap-1.5'>
                <h2 className='font-bold text-[17px] text-gray-500'>Upload Your CV</h2>
                <h2 className='font-bold text-[13px] text-gray-500'>It only takes a few seconds</h2>
              </div>
            </div>
          </div>
          {/*Tooltip 3*/}
          <div className='p-6 bg-white inline-block rounded-md shadow z-30 absolute bottom-[360px] right-[120px]'>
            <div className='flex gap-2.5 items-center'>
              <div className='bg-[#d93025]/20 p-3 rounded-full'>
                <TfiEmail className='text-4xl text-[#d93025] opacity-60' />
              </div>
              <div className='flex flex-col gap-1.5'>
                <h2 className='font-bold text-[17px] text-gray-500'>Creative Agency</h2>
                <h2 className='font-bold text-[13px] text-gray-500'>Startup</h2>
              </div>
              <div className='bg-[#d93025]/10 p-3 rounded-full'>
                <TbBounceRightFilled className='text-xl text-[#d93025] opacity-60' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner



{/* <div className='h-full absolute right-0'>
<img className='bg-center bg-no-repeat h-[710px] w-auto' src={BannerImage} alt="" />
</div> */}