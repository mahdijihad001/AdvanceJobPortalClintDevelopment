import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import BaseUrl from '../../../Utils/BaseUrl/BaseUrl';
import Swal from 'sweetalert2';

const UpdateUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [getuser, setGetuser] = useState();

    useEffect(() => {
        const getUserValue = async () => {
            const result = await fetch(`${BaseUrl()}/user/${id}`);
            await result.json().then((user) => setGetuser(user?.user)).catch((error) => console.log(error));
        };
        getUserValue();
    }, [id]);


    const HandleUpdateUser = async (e) => {
        e.preventDefault();
        const form = e.target;

        const username = form.username.value;
        const email = form.email.value;
        const role = form.role.value;
        
        try {

            const result = await fetch(`${BaseUrl()}/user/update/${id}` , {
                method : "PATCH",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify({username , email , role})
            });

            const finalResult = await result.json();

            if(finalResult.status){
                Swal.fire({
                    title: "Success!",
                    text: finalResult.message,
                    icon: "success"
                });
                navigate("/dashboard/manageAllUsers")
            }else{
                Swal.fire({
                    title: "Faild!",
                    text: finalResult.message,
                    icon: "error"
                }); 
            }

        } catch (error) {
            Swal.fire({
                title: "Faild!",
                text: "User Update Faild!",
                icon: "error"
            });
        }
    }

    return (
        <div>
            <h1 className='text-4xl text-blue-300 font-bold mb-10'>Update Single User Profile</h1>
            {
                getuser && <form onSubmit={HandleUpdateUser} action="" className="space-y-3 bg-white shadow p-10 rounded-[10px]">
                    <div>
                        <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Username</label>
                        <input defaultValue={getuser?.username} name='username' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="text" placeholder='Username' required />
                    </div>
                    <div>
                        <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Email</label>
                        <input  defaultValue={getuser?.email} name='email' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="email" placeholder='Email' required />
                    </div>
                    <div>
                        <label className='block text-[15px] font-bold leading-5 text-gray-500 mb-2.5' htmlFor="">Role</label>
                        <select defaultValue={getuser?.role} className='w-full py-3 bg-blue-100 rounded-md px-4' name="role" id="">
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