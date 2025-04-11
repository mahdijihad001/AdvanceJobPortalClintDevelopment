import React from 'react'
import logo from "../../../assets/logo.svg"
import profile from "../../../assets/profile_pic.png"
import { Link } from 'react-router'

const DashboardNav = () => {
    return (
        <nav className='px-6 py-3 flex items-center justify-between shadow'>
            {/* Logo */}
            <div>
                <Link to={"/"}><img className='h-14' src={logo} alt="" /></Link>
            </div>
            <div>
                <img className='rounded-full h-[60px] w-[60px]' src={profile} alt="" />
            </div>
        </nav>
    )
}

export default DashboardNav