import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { GiButtonFinger } from 'react-icons/gi'
import { MdTipsAndUpdates } from 'react-icons/md'
import { FaLocationDot, FaMoneyCheckDollar, FaSackDollar, FaUserLarge } from 'react-icons/fa6'
import { LuClock8 } from 'react-icons/lu'


const JobInfo = () => {
    return (
        <div className='bg-blue-50 rounded-md w-full py-8 pl-8'>
            <h1 className='font-medium text-gray-500 text-[24px] mb-5'>Job Overview</h1>
            <div className='pb-10 flex flex-col gap-6'>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-500 text-3xl'><CiCalendar /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Date Posted :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>April 06, 2021</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-400 text-3xl'><MdTipsAndUpdates /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Expiration date :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>April 06, 2021</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-400 text-2xl'><FaLocationDot /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Location :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>London, UK</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-400 text-2xl'><FaUserLarge /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Job Title :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>Designer</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-400 text-2xl'><LuClock8 /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Hours :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>50h / week</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-400 text-2xl'><FaMoneyCheckDollar /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Rate :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>$15 - $25 / hour</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-3'>
                    <div className='text-blue-400 text-2xl'><FaSackDollar /></div>
                    <div>
                        <h2 className='font-medium text-gray-500 text-[18px]'>Salary :</h2>
                        <p className='text-[14px] font-medium text-gray-700'>$35k - $45k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobInfo