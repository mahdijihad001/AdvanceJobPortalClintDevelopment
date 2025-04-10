import React from 'react'
import JobCart from '../../Components/JobCart'
import { useNavigate } from 'react-router'

const FeaturedJobs = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-[90vh] container sectionContainer'>
      <div className='py-10 text-center'>
        <h1 className='text-gray-500 font-bold mb-5 text-3xl'>Featured Jobs</h1>
        <h2 className='text-[16px] font-medium text-gray-500'>Know your worth and find the job that qualify your life</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7'>
        <JobCart/>
        <JobCart/>
        <JobCart/>
        <JobCart/>
        <JobCart/>
        <JobCart/>
      </div>
      <div className='py-10 text-center'>
        <button onClick={() => navigate("/alljobs")} className='px-6 py-3 bg-blue-600 rounded-md font-medium text-white hover:bg-blue-800 duration-700'>Load More Listing</button>
      </div>
    </div>
  )
}

export default FeaturedJobs