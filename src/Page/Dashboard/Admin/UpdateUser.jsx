import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import BaseUrl from '../../../Utils/BaseUrl/BaseUrl';

const UpdateUser = () => {

    const { id } = useParams();

    const [getuser, setGetuser] = useState();

    useEffect(() => {
        const getUserValue = async () => {
            const result = await fetch(`${BaseUrl()}/user/${id}`);
            await result.json().then((user) => setGetuser(user?.user)).catch((error) => console.log(error));
        };
        getUserValue();
    }, [id]);

    return (
        <div>
            <h1 className='text-4xl text-blue-300 font-bold mb-10'>Update Single User Profile</h1>
            {
                getuser && <form action="" className="space-y-3 bg-white shadow p-10 rounded-[10px]">
                    <div>
                        <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Username</label>
                        <input defaultValue={getuser?.username} name='username' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="text" placeholder='Username' required />
                    </div>
                    <div>
                        <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Email</label>
                        <input defaultValue={getuser?.email} name='email' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="email" placeholder='Email' required />
                    </div>
                    <div>
                        <label className='block text-[15px] font-bold leading-5 text-gray-500 mb-2.5' htmlFor="">Role</label>
                        <select defaultValue={getuser?.role} className='w-full py-3 bg-blue-100 rounded-md px-4' name="" id="">
                            <option value="candidate">candidate</option>
                            <option value="employe">employe</option>
                            <option value="admin">admin</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center mt-7'>
                        <button className='bg-[#1967d2] w-full py-3 rounded-md font-bold text-white text-xl hover:bg-[#6e86a8] duration-500'>Update</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default UpdateUser