import React from 'react'

const CompanyAddressForm = ({id}) => {

  console.log(id);

  return (
    <form className='px-5 py-10 shadow bg-white rounded-[10px] mt-[40px] mb-[70px] space-y-2'>
      <div className='mb-[30px]'>
        <h1 className='text-2xl font-medium text-gray-500'>Contact Information</h1>
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
      <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
    </form>
  )
}

export default CompanyAddressForm