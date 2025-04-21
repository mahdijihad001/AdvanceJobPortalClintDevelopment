import React, { useEffect, useState } from 'react'
import BaseUrl from '../../../../Utils/BaseUrl/BaseUrl'
import Swal from 'sweetalert2';

const SocialNetwork = ({ id }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getSocialNetwork = async () => {
            const getData = await fetch(`${BaseUrl()}/network/find/${id}`);
            const finalData = await getData.json();
            if (finalData.status) {
                setData(finalData?.data)
            }
        };
        getSocialNetwork();
    }, [id])

    const HandleUpdateSocialNetwork = async (e) => {
        e.preventDefault();
        const form = e.target;

        const facebook = form.facebook.value;
        const twiter = form.twiter.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;

        const updateProfile = await fetch(`${BaseUrl()}/network/update/${id}` , {method : "PATCH" , headers : {"Content-type" : "application/json"} , body : JSON.stringify({authore : id , facebook , twiter , linkedin , github})});
        const finalData = await updateProfile.json();
        if (finalData.status) {
            Swal.fire({
                title: "Success!",
                text: finalData.message,
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Faild!",
                text: finalData.message,
                icon: "error"
            });
        }

    }

    return (
        <form onSubmit={HandleUpdateSocialNetwork} action="" className='px-5 py-10 shadow bg-white rounded-[10px] mb-[50px]'>
            <div className='pb-[40px]'>
                <h1 className='text-2xl font-medium text-gray-500'>Social Network</h1>
            </div>
            {/* facebook link & twiter */}
            <div className='space-y-5'>
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Facebook Profile</label>
                        <input defaultValue={data ? data?.facebook : ""} name='facebook' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.facebook.com' />
                    </div>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Twiter Profile</label>
                        <input defaultValue={data ? data?.twiter : ""}  name='twiter' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.twiter.com/' />
                    </div>
                </div>
                {/* Linkedin & github */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Linkedin Profile</label>
                        <input defaultValue={data ? data?.linkedin : ""} name='linkedin' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.Linkedin.com' />
                    </div>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Github Profile</label>
                        <input defaultValue={data ? data?.github : ""} name='github' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='https://www.github.com/' />
                    </div>
                </div>
                <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
            </div>
        </form>
    )
}

export default SocialNetwork