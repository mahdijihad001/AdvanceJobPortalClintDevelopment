import React, { useEffect, useState } from 'react'
import BaseUrl from './../../../../Utils/BaseUrl/BaseUrl';
import Swal from 'sweetalert2';

const ContactAddress = ({ id }) => {

    const [contact, setContact] = useState(null);

    useEffect(() => {
        const getContact = async () => {
            const result = await fetch(`${BaseUrl()}/contact/find/${id}`);
            const finalResult = await result.json();
            if (finalResult.status) {
                setContact(finalResult?.data);
            }
        };
        getContact();
    }, [id]);

    const HandleUpdateContactForm = async (e) => {
        e.preventDefault();
        const form = e.target;

        const country = form.country.value;
        const city = form.city.value;
        const compliteAddress = form.compliteAddress.value;

        const updateData = await fetch(`${BaseUrl()}/contact/update/${id}`, { method: "PATCH", headers: { "Content-type": "application/json" }, body: JSON.stringify({ authore: id, country, city, compliteAddress }) });
        const finalResult = await updateData.json();
        if (finalResult.status) {
            Swal.fire({
                title: "Success!",
                text: finalResult.message,
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Faild!",
                text: finalResult.message,
                icon: "error"
            });
        }
    }


    return (
        <form onSubmit={HandleUpdateContactForm} action="" className='px-5 py-10 shadow bg-white rounded-[10px] mb-[50px]'>
            <div className='pb-[40px]'>
                <h1 className='text-2xl font-medium text-gray-500'>Contact Information</h1>
            </div>
            <div className='space-y-5'>
                {/* Country & City */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Country</label>
                        <input name='country' defaultValue={contact ? contact?.country : ""} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Country' />
                    </div>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">City</label>
                        <input name='city' defaultValue={contact ? contact?.city : ""} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='City' />
                    </div>
                </div>
                {/* Complete Address */}
                <div className='flex flex-col gap-4 md:flex-row items-center'>
                    <div className='flex flex-col gap-1.5 w-full'>
                        <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Complete Address</label>
                        <input name='compliteAddress' defaultValue={contact ? contact?.compliteAddress : ""} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Complete Address' />
                    </div>
                </div>
            </div>
            <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
        </form>
    )
}

export default ContactAddress