import React from 'react'
import { GoDot } from 'react-icons/go'
import JobCart from '../../Components/JobCart'
import JobInfo from './JobInfo'
import CompanyProfile from './CompanyProfile'

const JobDescription = () => {
    return (
        <div className='container sectionContainer grid grid-cols-1 md:grid-cols-3 mx-2.5 gap-5'>
            <div className='col-span-1 md:col-span-2'>
                {/* Job Description */}
                <div className='py-10 w-full'>
                    <h1 className='font-medium leading-6 text-[18px] text-[#202124] mb-5'>Job Description</h1>
                    <p className='text-[#696969] text-[15px] mb-6'>As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                </div>
                {/* Key Responsibilities */}
                <div className='pb-10 w-full'>
                    <h1 className='font-medium leading-6 text-[18px] text-[#202124] mb-5'>Key Responsibilities</h1>
                    <ul className='space-y-3'>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                    </ul>
                </div>
                {/* Skill & Experience */}
                <div className='pb-10 w-full'>
                    <h1 className='font-medium leading-6 text-[18px] text-[#202124] mb-5'>Skill & Experience</h1>
                    <ul className='space-y-3'>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                        <li className='flex gap-2.5 items-center text-[#696969] text-[15px]'><span><GoDot className='text-[20px] text-black font-bold' /></span><span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span></li>
                    </ul>
                </div>
                {/* Related Jobs */}
                <div className=''>
                    <h1 className='font-bold leading-6 text-[24px] text-gray-500 mb-5'>Related Jobs</h1>
                    <div className='grid gap-5 py-5 pr-5'>
                        <JobCart />
                        <JobCart />
                        <JobCart />
                        <JobCart />
                        <JobCart />
                        <JobCart />
                    </div>
                </div>
            </div>
            <div className='col-span-1 py-10 space-y-10'>
                {/* Job Info */}
                <JobInfo/>
                <CompanyProfile/>
            </div>
        </div>
    )
}

export default JobDescription