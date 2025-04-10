import React from 'react'
import { Link } from 'react-router'
import JobCart from './../../Components/JobCart';

const AllJobs = () => {

  const positions = [
    { department: "Accounting / Finance", value: "Accounting&Finance" },
    { department: "Marketing", value: "Marketing" },
    { department: "Design", value: "Design" },
    { department: "Development", value: "Development" },
    { department: "Human Resource", value: "Human&Resource" },
    { department: "Automotive Jobs", value: "Automotive&Jobs" },
    { department: "Customer Service", value: "Customer&Service" },
    { department: "Health and Care", value: "Health&Care" },
    { department: "Project Management", value: "ProjectManagement" }
  ];

  return (
    <div className='min-h-screen'>
      <div className='bg-blue-50 py-[100px] text-center'>
        <h1 className='font-bold text-3xl text-gray-600 mb-3.5'>Find Jobs</h1>
        <h2 className='text-[17px] font-semibold text-gray-600'><Link to={"/"}>Home </Link>/<span> Jobs</span></h2>
      </div>
      <div className='container sectionContainer px-2.5'>
        <div className='py-10'>
          {/* Category Filtering */}
          <div className="relative my-6 md:w-60">
            <select
              id="id-01"
              name="id-01"
              defaultValue={""}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="">All</option>
              {
                positions.map((item, idx) => (
                  <option key={idx} value={item.value}>{item.department}</option>
                ))
              }
            </select>
            <label
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Select Your Department
            </label>
          </div>
          {/* End */}
        </div>
        {/* Job Cart */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
              <JobCart/>
        </div>
        {/* Pagination */}
        <div className='py-8 text-center'>
              <button className='p-4 bg-gray-400 rounded-md font-bold text-white mr-2.5 hover:bg-gray-500 duration-500'>Pre</button>
              <button className='py-4 px-6 bg-blue-200 rounded-md font-bold text-gray-700'>1</button>
              <button className='p-4 bg-gray-400 rounded-md font-bold text-white ml-2.5 hover:bg-gray-500 duration-500'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default AllJobs