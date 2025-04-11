import React from 'react';
import figma from "../../../assets/figma.png";
import { FaEye } from 'react-icons/fa';
import { GrDocumentStore } from 'react-icons/gr';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';
import { RiDeleteBinLine } from 'react-icons/ri';

const AppliedJobs = () => {
    return (
        <div className="p-6 min-h-screen">
            <div>
                <h1 className='text-3xl font-medium text-gray-500'>Applied jobs!</h1>
                <h2 className='text-lg font-medium mt-4 text-gray-600'>Ready to jump back in?</h2>
            </div>

            <div className="mt-6 shadow bg-white rounded-md p-5">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">My Applied Jobs</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className='w-full border-collapse'>
                        <thead className='bg-[#f5f7fc] mb-5 py-4'>
                            <tr className='text-blue-600/50 font-bold text-xl'>
                                <th className="text-left py-3 px-5">Job Title</th>
                                <th className="text-left py-3 px-5">Date Applied</th>
                                <th className="text-left py-3 px-5">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Gap Between Rows */}
                            <tr className="h-4"></tr>
                            {/* First Row */}
                            <tr className="border border-gray-300 rounded-md">
                                <td className="py-4 px-5">
                                    <div className='flex gap-5 items-center'>
                                        <div className='bg-[#f3f4f7] h-[70px] w-[70px] rounded-md flex items-center justify-center'>
                                            <img src={figma} className='h-[40px] w-[40px]' alt="" />
                                        </div>
                                        <div>
                                            <Link to={'/jobDetails'} className='font-bold text-lg sm:text-xl text-gray-500 mb-2 hover:text-blue-400 duration-700 block'>
                                                Software Engineer (Android), Libraries
                                            </Link>
                                            <div className='flex flex-wrap items-center gap-3 text-gray-600 text-sm'>
                                                <div className='flex items-center gap-1'>
                                                    <GrDocumentStore className='text-lg' />
                                                    <span>Segment</span>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <FaLocationDot className='text-lg' />
                                                    <span>London, UK</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-5 text-gray-700">Dec 5, 2020</td>
                                <td className="py-4 px-5">
                                    <div className='flex gap-4 items-center text-gray-600 text-lg cursor-pointer'>
                                        <FaEye className='hover:text-blue-500' />
                                        <RiDeleteBinLine className='hover:text-red-500' />
                                    </div>
                                </td>
                            </tr>
                            {/* Gap Between Rows */}
                            <tr className="h-4"></tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AppliedJobs;
