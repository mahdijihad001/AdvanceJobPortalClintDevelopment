import React from 'react'
import { Link, Outlet } from 'react-router'
import { CiBookmark } from 'react-icons/ci'
import { FaArtstation, FaHome, FaUser } from 'react-icons/fa'
import { MdCreateNewFolder, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { IoBagCheckOutline } from 'react-icons/io5'
import { RiFileList2Fill } from 'react-icons/ri'
import { PiReadCvLogoFill } from 'react-icons/pi'
import DashboardNav from './DashboardNav'

const Layout = () => {

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
        { name: "Create Company", icon: MdCreateNewFolder, path: "/dashboard/createCompany" },
        { name: "Manage All Jobs", icon: IoBagCheckOutline, path: "/dashboard/manageAllJobs" },
        { name: "Post New Atricles", icon: MdOutlineKeyboardDoubleArrowRight, path: "/dashboard/postArticals" },
        { name: "Manage All Atricles", icon: FaArtstation, path: "/dashboard/manageArticals" },
    ];

    const userRole = "candidate";
    // const userRole = "employe";
    // const userRole = "admin";

    const isAdmin = userRole === "admin" ? [...admin] : userRole === "employe" ? [...employe] : [...candidate];

    return (
        <div className='h-screen'>
            <DashboardNav />
            <div className='grid lg:grid-cols-15 h-[90vh]'>
                {/* Dashboard Menu */}
                <div className='lg:col-span-3 shadow p-6 hidden lg:block'>
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
                <div className='overflow-y-auto lg:col-span-12 p-6 shadow bg-slate-50'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout