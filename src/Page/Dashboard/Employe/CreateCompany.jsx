import React, { useEffect, useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"
import { useCreateCompanyMutation, useGetCompanyQuery } from '../../../Redux/Services/Job/CompanyApi';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import CompanySocialMediaForm from './CompanySocialMediaForm/CompanySocialMediaForm';
import CompanyAddressForm from './CompanyAddressForm/CompanyAddressForm';

const CreateCompany = () => {
    const user = useSelector((state) => state.Auth?.user);
    const [createCompany, { isLoading }] = useCreateCompanyMutation();

    const {data , isFetching} = useGetCompanyQuery(user?._id);

    const companyData = data?.data?.company;

    const { register, handleSubmit, setValue } = useForm();

    

    const [image, setimage] = useState();

    const HandleShowImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setimage(URL.createObjectURL(file));
        }
        if (!file) return

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "jobportal_cloud_image_host");
        data.append("cloud_name", "de8jq6747");

        const getImageUrl = await fetch(`https://api.cloudinary.com/v1_1/de8jq6747/image/upload`, { method: "POST", body: data })
        const result = await getImageUrl.json();
        setValue("image", result?.url);
    };

    useEffect(() => {
        setValue("authore", user?._id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const HandleCreateCompany = async (data) => {
        const result = await createCompany({ id: user?._id, data: data });
        if (result?.data?.status) {
            return Swal.fire({
                title: "success!",
                text: result?.data?.message,
                icon: "success"
            });
        } else if (result?.error?.code.message) {
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

    }

    return (
        <div className='p-2 md:p-5'>
            <div>
                <h1 className='text-3xl font-medium leading-5 text-gray-500'>Create Your Company!</h1>
            </div>
            {/* -------------------- */}
            {/* Create Company */}
            <form onSubmit={handleSubmit(HandleCreateCompany)} className='px-5 py-10 shadow bg-white rounded-[10px] mt-[40px] mb-[70px]'>
                <div className=''>
                    <h1 className='text-2xl font-medium text-gray-500'>Create Company</h1>
                </div>
                {/* Company Logo */}
                <div className='flex flex-col gap-5 md:flex-row py-10 items-center'>
                    <img className='h-[100px] w-[100px] rounded-full' src={image ? image : demoProfile} alt="" />
                    <label htmlFor="">
                        <span className='text-xl font-bold text-gray-500'>Update Company Logo</span><br /><br />
                        <input onChange={HandleShowImage} className='border p-10 rounded-md border-gray-300' name='file' type="file" />
                    </label>
                </div>

                <div className='space-y-7'>
                    {/* Company name & Company Email */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Name</label>
                            <input defaultValue={companyData?.companyName} {...register("companyName")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" required />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Email</label>
                            <input value={user?.email} {...register("companyEmail")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="email" required />
                        </div>
                    </div>
                    {/* Company Phone& Company website */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Phone No</label>
                            <input defaultValue={companyData?.companyPhoneNo} {...register("companyPhoneNo")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="tel" required />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Website</label>
                            <input defaultValue={companyData?.companyWebsite} {...register("companyWebsite")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" required />
                        </div>
                    </div>
                    {/* Est. Since & Team Size */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Est. Since</label>
                            <input defaultValue={companyData?.estSince} {...register("estSince")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" required />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Team Size</label>
                            <input defaultValue={companyData?.teamSize} {...register("teamSize")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" required />
                        </div>
                    </div>
                </div>
                <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>{isLoading ? "Loading..." : "Post"}</button>

            </form>


            {/* -------------------------- */}
            {/* Social Network */}
            <CompanySocialMediaForm/>

            {/* -------------------------------- */}
            {/* Contact information */}

            <CompanyAddressForm />

        </div>
    )
}

export default CreateCompany