import React, { useState } from 'react'
import logo from "../../../assets/logo.svg"
import profile from "../../../assets/profile_pic.png"
import { Link } from 'react-router'
import { FiAlignRight, FiX } from 'react-icons/fi'
import { CiBookmark } from 'react-icons/ci'
import { FaArtstation, FaHome, FaUser } from 'react-icons/fa'
import { MdCreateNewFolder, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { IoBagCheckOutline } from 'react-icons/io5'
import { RiFileList2Fill } from 'react-icons/ri'
import { PiReadCvLogoFill } from 'react-icons/pi'

const DashboardNav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const HandleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };




    const candidate = [
        { name: "Dashboard", icon: FaHome, path: "/dashboard" },
        { name: "Update Profile", icon: FaUser, path: `/dashboard/candifateProfile/${10}` },
        { name: "My Resume", icon: PiReadCvLogoFill, path: "/dashboard/resumi" },
        { name: "Applied Jobs", icon: IoBagCheckOutline, path: "/dashboard/appliedJobs" },
        { name: "Shortlisted Jobs", icon: CiBookmark, path: "/dashboard/candidateBookmark" },
    ];

    const employe = [
        { name: "Dashboard", icon: FaHome, path: "/dashboard" },
        { name: "Post A New Job", icon: MdOutlineKeyboardDoubleArrowRight, path: "/dashboard/postJob" },
        { name: "Create Company", icon: MdCreateNewFolder, path: "/dashboard/createCompany" },
        { name: "Manage Jobs", icon: IoBagCheckOutline, path: "/dashboard/manageJob" },
        { name: "All Applicants", icon: RiFileList2Fill, path: "/dashboard/CandidateAppliedAllJobs" },
    ];

    const admin = [
        { name: "Dashboard", icon: FaHome, path: "/dashboard" },
        { name: "Manage All User", icon: FaUser, path: "/dashboard/manageAllUsers" },
        { name: "Post A New Job", icon: MdOutlineKeyboardDoubleArrowRight, path: "/dashboard/postJob" },
        { name: "Manage All Jobs", icon: IoBagCheckOutline, path: "/dashboard/manageAllJobs" },
        { name: "Post New Atricles", icon: MdOutlineKeyboardDoubleArrowRight, path: "/dashboard/postArticals" },
        { name: "Manage All Atricles", icon: FaArtstation, path: "/dashboard/manageArticals" },
    ];


    const userRole = "candidate";
    // const userRole = "employe";
    // const userRole = "admin";

    const isAdmin = userRole === "admin" ? [...admin] : userRole === "employe" ? [...employe] : [...candidate]

    return (
        <nav>
            <div className='px-6 py-3 flex items-center justify-between shadow'>
                {/* Logo */}
                <div>
                    <Link to={"/"}><img className='h-14' src={logo} alt="" /></Link>
                </div>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img className='rounded-full h-[60px] w-[60px]' src={profile} alt="" />
                    </div>
                    <div className='lg:hidden'>
                        <FiAlignRight className='text-5xl' onClick={HandleMenuOpen} />
                    </div>
                </div>
            </div>
            <div className={`w-[350px] p-5 bg-white shadow h-screen fixed top-0 right-0 ${menuOpen ? "translate-x-[0px]" : "translate-x-[400px]"} duration-700`}>
                <div className='absolute right-3'>
                    <FiX className='text-4xl' onClick={HandleMenuOpen} />
                </div>
                <div className='pt-[50px]'>
                    <ul className='flex flex-col gap-6'>
                        {
                            isAdmin.map((item, idx) => (
                                <Link onClick={HandleMenuOpen} key={idx} to={item.path} className='flex items-center gap-2.5 text-[22px] font-medium text-slate-600 leading-8 outfit'><item.icon /><span>{item.name}</span></Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DashboardNav