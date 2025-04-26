import React, { useState } from 'react'
import LogInImage from "../../assets/banner-img-1.png"
import { Link, useNavigate } from 'react-router'
import { FaRegUser } from 'react-icons/fa'
import { IoBagHandle } from 'react-icons/io5'
import Swal from 'sweetalert2'
import { useRegisterUserMutation } from '../../Redux/Services/AuthApi/AuthApi'


const SingUp = () => {
    const navigate = useNavigate();
    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const [role, setRole] = useState("candidate");

    const FormData = async (e) => {
        e.preventDefault();
        const form = e.target;

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            username, email, password, role
        };

        const res = await registerUser(user);
        if (res?.data?.status) {
            Swal.fire({
                title: "success",
                text: res?.data?.message,
                icon: "success"
            }
            );
            navigate("/login")
        } else if (res?.error?.data?.message) {
            return Swal.fire({
                title: "Faild",
                text: res?.error?.data?.message,
                icon: "error"
            });
        }
        else {
            return Swal.fire({
                title: "Faild",
                text: "Something went wrond...! Please try again.",
                icon: "error"
            });
        }

    }

    return (
        <div className='container sectionContainer grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[92vh]'>
            <div className='relative hidden md:block' >
                <img className='absolute bottom-0' src={LogInImage} alt="" />
            </div>
            {/* Sing Up Form */}
            <div className='flex flex-col justify-center'>
                <div className='text-center mb-10'>
                    <h1 className='font-bold text-4xl text-gray-600'>Create a Free Superio Account</h1>
                </div>
                <div>
                    <form onSubmit={FormData} className="p-4 space-y-3">
                        <div className='grid grid-cols-2 gap-5'>
                            <button type='button' onClick={() => setRole("candidate")} className={`flex items-center justify-center gap-2 py-4 text-[#1967d2] font-semibold text-[20px] ${role === "candidate" ? "bg-[#34a853] text-[#ffff]" : "bg-[#e2eaf8]"} rounded-[8px] duration-500`}><FaRegUser /> Candidate</button>
                            <button type='button' onClick={() => setRole("employe")} className={`flex items-center justify-center gap-2 py-4 text-[#1967d2] font-semibold text-[20px] ${role === "employe" ? "bg-[#34a853] text-[#ffff]" : "bg-[#e2eaf8]"} rounded-[8px] duration-500`}><IoBagHandle /> Employer</button>
                        </div>
                        <div>
                            <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Username</label>
                            <input name='username' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="text" placeholder='Username' required />
                        </div>
                        <div>
                            <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Email</label>
                            <input name='email' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="email" placeholder='Email' required />
                        </div>
                        <div>
                            <label className='block text-[15px] font-bold leading-5 text-gray-500' htmlFor="">Password</label>
                            <input name='password' className='w-full p-3.5 mt-2.5 bg-[#f0f5f7] rounded-md border-blue-300 focus:to-blue-300 outline-blue-300' type="password" placeholder='Password' required />
                        </div>
                        <div className='flex items-center justify-center mt-7'>
                            <button className='bg-[#1967d2] w-full py-3 rounded-md font-bold text-white text-xl hover:bg-[#6e86a8] duration-500'> {isLoading ? "Loading..." : "Sing Up"}</button>
                        </div>
                    </form>
                    <div className='p-4'>
                        <h2 className='font-medium text-[18px] leading-5 text-[#696969] text-center'>Already have an accoun? <Link className='font-bold' to={"/login"}>Log In</Link></h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingUp