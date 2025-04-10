import React, { useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"

const PostNewJob = () => {
    const [image, setimage] = useState();

    const HandleShowImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimage(URL.createObjectURL(file));
        }
    };


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
            <form className='px-2.5 py-5'>
                {/* Company Logo */}
                <div className='flex flex-col gap-5 md:flex-row py-10 items-center'>
                    <img className='h-[100px] w-[100px] rounded-full' src={image ? image : demoProfile} alt="" />
                    <label htmlFor="">
                        <span className='text-xl font-bold text-gray-500 mb-3.5'>Company Logo</span><br />
                        <input onChange={HandleShowImage} className='border p-10 rounded-md border-gray-300' name='file' type="file" />
                    </label>
                </div>

                <div className='space-y-7'>
                    {/* Company name & Company Email */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Name</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Inovation' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Email</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='inovation@gmail.com' />
                        </div>
                    </div>
                    {/* Company Phone& Company website */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Phone No</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" placeholder='0177212121' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Website</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='www.inovation.com' />
                        </div>
                    </div>
                    {/* Est. Since & Team Size */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Est. Since</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" placeholder='05-08-2011' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Team Size</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Team Size' />
                        </div>
                    </div>
                    {/* facebook link & twiter */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Facebook Profile</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.facebook.com' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Twiter Profile</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.twiter.com/' />
                        </div>
                    </div>
                    {/* Linkedin & github */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Linkedin Profile</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.Linkedin.com' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Github Profile</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.github.com/' />
                        </div>
                    </div>
                    {/* Country & City */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Country</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Country' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">City</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='City' />
                        </div>
                    </div>
                    {/* Complete Address */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Complete Address</label>
                            <input className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Complete Address' />
                        </div>
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
                </div>
                <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Post</button>

            </form>
        </div>
    )
}

export default PostNewJob