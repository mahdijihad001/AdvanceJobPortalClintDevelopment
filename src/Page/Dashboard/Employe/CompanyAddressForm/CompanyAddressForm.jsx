import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useUpdateCompanyAddressMutation } from '../../../../Redux/Services/Job/CompanyApi';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CompanyAddressForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const user = useSelector(state => state.Auth?.user);

  useEffect(() => {
    setValue("authore", user?._id)
  }, [user?._id, setValue]);

  const [updateCompanyAddress, { isLoading }] = useUpdateCompanyAddressMutation();

  const UpdateCompanyAddressFun = async (data) => {
    const result = await updateCompanyAddress({ id: user?._id, data: data });

    if (result?.data?.status) {
      return Swal.fire({
        title: "success!",
        text: "Company Update Success",
        icon: "success"
      });
    } else if (result?.error?.data?.message) {
      return Swal.fire({
        title: "Faild!",
        text: result?.error?.data.message,
        icon: "error"
      })
    } else {
      return Swal.fire({
        title: "Faild!",
        text: "Something went wrong please try again!",
        icon: "error"
      })
    }
  };



  return (
    <form onSubmit={handleSubmit(UpdateCompanyAddressFun)} className='px-5 py-10 shadow bg-white rounded-[10px] mt-[40px] mb-[70px] space-y-2'>
      <div className='mb-[30px]'>
        <h1 className='text-2xl font-medium text-gray-500'>Contact Information</h1>
      </div>
      {/* Country & City */}
      <div className='flex flex-col gap-4 md:flex-row items-center'>
        <div className='flex flex-col gap-1.5 w-full'>
          <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Country</label>
          <input {...register("country")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text"/>
        </div>
        <div className='flex flex-col gap-1.5 w-full'>
          <label className='font-medium text-gray-500 text-[18px]' htmlFor="">City</label>
          <input {...register("city")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
        </div>
      </div>
      {/* Complete Address */}
      <div className='flex flex-col gap-4 md:flex-row items-center'>
        <div className='flex flex-col gap-1.5 w-full'>
          <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Complete Address</label>
          <input {...register("compliteAddress")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text"/>
        </div>
      </div>
      <button type='submit' className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>{isLoading ? "Loading..." : "Save"}</button>
    </form>
  )
}

export default CompanyAddressForm