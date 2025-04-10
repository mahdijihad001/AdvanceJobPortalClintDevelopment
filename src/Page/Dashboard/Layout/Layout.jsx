import React from 'react'
import { Link, Outlet } from 'react-router'
import logo from "../../../assets/logo.svg"
import { CiBookmark, CiLogin } from 'react-icons/ci'
import { FaArtstation, FaHome, FaUser } from 'react-icons/fa'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { IoBagCheckOutline } from 'react-icons/io5'
import { RiFileList2Fill } from 'react-icons/ri'
import { PiReadCvLogoFill } from 'react-icons/pi'

const Layout = () => {

    const candidate = [
        { name: "Dashboard", icon: FaHome, path: "/dashboard" },
        { name: "My Profile", icon: FaUser, path: "/dashboard/candifateProfile" },
        { name: "My Resume", icon: PiReadCvLogoFill, path: "" },
        { name: "Applied Jobs", icon: IoBagCheckOutline, path: "/dashboard/appliedJobs" },
        { name: "Shortlisted Jobs", icon: CiBookmark, path: "/dashboard/candidateBookmark" },
    ];

    const employe = [
        { name: "Dashboard", icon: FaHome, path: "/dashboard" },
        { name: "Post A New Job", icon: MdOutlineKeyboardDoubleArrowRight, path: "/dashboard/postJob" },
        { name: "Manage Jobs", icon: IoBagCheckOutline, path: "/dashboard/manageJob" },
        { name: "All Applicants", icon: RiFileList2Fill, path: "" },
    ];

    const admin = [
        { name: "Dashboard", icon: FaHome, path: "/" },
        { name: "Manage All User", icon: FaUser, path: "/" },
        { name: "Post A New Job", icon: MdOutlineKeyboardDoubleArrowRight, path: "/" },
        { name: "Manage All Jobs", icon: IoBagCheckOutline, path: "/" },
        { name: "Post New Atricles", icon: MdOutlineKeyboardDoubleArrowRight, path: "/" },
        { name: "Manage All Atricles", icon: FaArtstation, path: "/" },
    ];

    // const userRole = "candidate";
    const userRole = "employe";
    // const userRole = "admin";

    const isAdmin = userRole === "admin" ? [...admin] : userRole === "employe" ? [...employe] : [...candidate];

    return (
        <div className='h-screen'>
            <div className='grid grid-cols-15 gap-3 h-full'>
                {/* Dashboard Menu */}
                <div className='col-span-3 shadow p-6'>
                    <div>
                        <Link to={"/"}><img className='h-14' src={logo} alt="" /></Link>
                    </div>
                    <div className='pt-7'>
                        {/* Menu */}
                        <div>
                            <ul className='flex flex-col gap-7'>
                                {
                                    isAdmin.map((item, idx) => (
                                        <Link key={idx} to={item.path} className='flex items-center gap-2.5 text-[22px] font-medium text-slate-600 leading-8 outfit'><item.icon /><span>{item.name}</span></Link>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='overflow-y-auto col-span-12 p-6 shadow'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout