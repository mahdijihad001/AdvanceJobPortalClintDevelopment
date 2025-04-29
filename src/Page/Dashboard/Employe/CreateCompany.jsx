import React, { useEffect, useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"
import { useCreateCompanyMutation } from '../../../Redux/Services/Job/CompanyApi';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const CreateCompany = () => {
    const dispatch = useDispatch();
    const [createCompany, { isLoading }] = useCreateCompanyMutation();
    const { register, handleSubmit, setValue } = useForm();

    const user = useSelector((state) => state.Auth?.user);

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
    }, [user]);

    const HandleCreateCompany = async (data) => {
        console.log(data);
        console.log(user?._id);
        const result = await createCompany({ id: user?._id, data: data });

        console.log(result);
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
                        <span className='text-xl font-bold text-gray-500 mb-3.5'>Company Logo</span><br />
                        <input onChange={HandleShowImage} className='border p-10 rounded-md border-gray-300' name='file' type="file" />
                    </label>
                </div>

                <div className='space-y-7'>
                    {/* Company name & Company Email */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Name</label>
                            <input {...register("companyName")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Inovation' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Email</label>
                            <input {...register("companyEmail")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='inovation@gmail.com' />
                        </div>
                    </div>
                    {/* Company Phone& Company website */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Phone No</label>
                            <input {...register("companyPhoneNo")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" placeholder='0177212121' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Company Website</label>
                            <input {...register("companyWebsite")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='www.inovation.com' />
                        </div>
                    </div>
                    {/* Est. Since & Team Size */}
                    <div className='flex flex-col gap-4 md:flex-row items-center'>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Est. Since</label>
                            <input {...register("estSince")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='05-08-2011' />
                        </div>
                        <div className='flex flex-col gap-1.5 w-full'>
                            <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Team Size</label>
                            <input {...register("teamSize")} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Team Size' />
                        </div>
                    </div>
                </div>
                <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>{isLoading ? "Loading..." : "Post"}</button>

            </form>


            {/* -------------------------- */}
            {/* Social Network */}
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

            {/* -------------------------------- */}
            {/* Contact information */}
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



        </div>
    )
}

export default CreateCompany