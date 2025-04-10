import React from 'react'
import figma from "../../assets/figma.png"
import { FaFileInvoiceDollar, FaRegBookmark } from 'react-icons/fa'
import { GrDocumentStore } from 'react-icons/gr'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'
import JobDescription from './JobDescription'

const JobDetails = () => {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    }

    return (
        <div className='min-h-screen'>
            {/* Job Cart */}
            <div className='py-[80px] bg-blue-50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-7 gap-6'>
                        {/* Job Item */}
                        <div className='md:col-span-5 grid grid-cols-1 sm:grid-cols-6 items-center gap-4'>
                            {/* Job Details Logo */}
                            <div className='h-[120px] w-[120px] rounded-md bg-[#f3f4f7] flex items-center justify-center sm:col-span-1'>
                                <img className='w-[70px] h-[70px]' src={figma} alt="" />
                            </div>
                            {/* Content */}
                            <div className='sm:col-span-3'>
                                <Link to={'/jobDetails'} className='font-bold text-xl text-gray-500 mb-2 hover:text-blue-400 duration-700'>Software Engineer (Android), Libraries</Link>
                                <div className='flex flex-wrap items-center gap-2'>
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
                                <div className='flex flex-wrap gap-2 pt-3'>
                                    <button className='bg-[#1967d2]/20 text-[#1967d2] px-5 py-1.5 rounded-[50px]'>Full Time</button>
                                    <button className='bg-[#34a853]/20 text-[#34a853] px-5 py-1.5 rounded-[50px]'>Private</button>
                                    <button className='bg-[#f9ab00]/20 text-[#f9ab00] px-5 py-1.5 rounded-[50px]'>Urgent</button>
                                </div>
                            </div>
                        </div>
                        {/* Apply Button */}
                        <div className='md:col-span-2 '>
                            <div className='grid grid-cols-1 sm:grid-cols-5 items-center gap-4'>
                                <button className='py-3 sm:py-[18px] px-4 sm:px-[60px] bg-[#1967d2] text-sm sm:text-[17px] leading-5 font-medium text-center text-white rounded-md hover:bg-[#415572] duration-500 sm:col-span-4'>Apply For Job</button>
                                <div className='bg-blue-200 py-3 sm:py-[18px] rounded-md flex items-center justify-center hover:bg-blue-400 duration-700 text-[#1967d2] hover:text-white shadow'>
                                    <FaRegBookmark className='font-bold text-[20px]' />
                                </div>
                            </div>
                            <div className='text-center py-5'>
                                <button onClick={() => goBack()} className='px-10 py-3 bg-blue-500 rounded-md text-white font-medium hover:bg-blue-600 duration-700'>Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Job Description */}
            <JobDescription />
        </div>
    )
}

export default JobDetails