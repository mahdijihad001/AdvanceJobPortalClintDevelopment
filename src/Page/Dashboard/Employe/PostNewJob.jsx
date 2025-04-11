import React, { useState } from 'react'


const PostNewJob = () => {

    const positions = [
        { department: "Accounting / Finance", openPositions: 2 },
        { department: "Marketing", openPositions: 86 },
        { department: "Design", openPositions: 43 },
        { department: "Development", openPositions: 12 },
        { department: "Human Resource", openPositions: 55 },
        { department: "Automotive Jobs", openPositions: 2 },
        { department: "Customer Service", openPositions: 2 },
        { department: "Health and Care", openPositions: 25 },
        { department: "Project Management", openPositions: 92 }
    ];


    const industryTypes = [
        { id: 1, name: "IT Support" },
        { id: 2, name: "Health Support" },
        { id: 3, name: "Banking & Finance" },
        { id: 4, name: "E-commerce" },
        { id: 5, name: "Cyber Security" },
        { id: 6, name: "Digital Marketing" },
        { id: 7, name: "Logistics & Supply Chain" },
        { id: 8, name: "Telecommunications" },
        { id: 9, name: "Software Development" },
        { id: 10, name: "Customer Service" }
    ];

    return (
        <div className='p-2 md:p-5'>
            <div>
                <h1 className='text-3xl font-medium leading-5 text-gray-500'>Post A New Job!</h1>
            </div>
            {/* ---------------------------------- */}
            {/* Post Job */}
            <form className='px-5 py-10 shadow bg-white rounded-[10px] mt-[40px] mb-[70px] space-y-4'>
                <div className='pb-8'>
                    <h1 className='text-2xl font-medium text-gray-500'>Create New Job</h1>
                </div>
                {/* Job Title */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Job Title</label>
                        <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Job Title' />
                    </div>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Job Type</label>
                        <select className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' value="">
                            {
                                positions.map((item, idx) => <option key={idx}>{item.department}</option>)
                            }
                        </select>
                    </div>
                </div>
                {/* Offered Salary & Experience */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Offered Salary</label>
                        <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Offered Salary' />
                    </div>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Experience</label>
                        <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Experience' />
                    </div>
                </div>

                {/*Gender & Industry */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Gender</label>
                        <select className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' value="">
                            <option value="">Male</option>
                            <option value="">Femail</option>
                            <option value="">Both</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Industry</label>
                        <select className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' value="">
                            {
                                industryTypes.map((item, idx) => <option key={idx}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>

                {/* Application Dadline Date */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Application Dadline</label>
                        <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='21-01-2005' />
                    </div>
                </div>

                {/* Description*/}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Description</label>
                        <textarea className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corporis expedita earum maiores nobis sed necessitatibus labore minima ex aliquam ipsam dolorum rerum veniam, ad asperiores amet excepturi dignissimos!' name="" id=""></textarea>
                    </div>
                </div>
                {/* Key Responsibilities */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Key Responsibilities</label>
                        <textarea className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corporis expedita earum maiores nobis sed necessitatibus labore minima ex aliquam ipsam dolorum rerum veniam, ad asperiores amet excepturi dignissimos!' name="" id=""></textarea>
                    </div>
                </div>
                {/* Skill & Experience */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Skill & Experience</label>
                        <textarea className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corporis expedita earum maiores nobis sed necessitatibus labore minima ex aliquam ipsam dolorum rerum veniam, ad asperiores amet excepturi dignissimos!' name="" id=""></textarea>
                    </div>
                </div>
                <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Post</button>
            </form>
        </div>
    )
}

export default PostNewJob