import React from 'react'
import AppliedJobsCart from './AppliedJobsCart'

const AllAppliedJobs = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold text-4xl text-gray-500'>All Applicants!</h1>
        </div>

        <div className='shadow bg-white rounded-md p-5 mt-10'>
            <h1 className='font-medium text-gray-700 text-2xl'>Applicant</h1>
                {/* Applied Jobs Cart */}
            <div className='py-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <AppliedJobsCart/>
                <AppliedJobsCart/>
                <AppliedJobsCart/>
                <AppliedJobsCart/>
                <AppliedJobsCart/>
            </div>

        </div>

    </div>
  )
}

export default AllAppliedJobs