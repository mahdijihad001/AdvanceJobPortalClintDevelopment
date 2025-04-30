import React from 'react'

const CompanySocialMediaForm = ({id}) => {

    console.log(id)


    
    return (
        <form className='px-5 py-10 shadow bg-white rounded-[10px] mt-[40px] mb-[70px] space-y-2'>
            <div className='mb-[30px]'>
                <h1 className='text-2xl font-medium text-gray-500'>Social Network</h1>
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
            <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
        </form>
    )
}

export default CompanySocialMediaForm