import React, { useContext, useEffect, useState } from 'react'
import navLogo from "../assets/logo.svg"
import { Link, NavLink, useNavigate } from 'react-router'
import { RxCross1 } from 'react-icons/rx';
import { FaAngleRight, FaUser } from 'react-icons/fa';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import BaseUrl from '../Utils/BaseUrl/BaseUrl';
import Swal from 'sweetalert2';
import { CreateAuthContext } from '../Context/Auth/CreateAuthContext';

const Navber = () => {

  const {logOut} = useContext(CreateAuthContext)

  const navigate = useNavigate();
  const [user] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navItem = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/alljobs" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const HandleLogOut = async () => {
    const result = await fetch(`${BaseUrl()}/user/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      credentials: "include"
    });

    const filanResult = await result.json();

    if (filanResult.status) {
      Swal.fire({
        title: "Success!",
        text: filanResult.message,
        icon: "success"
      });
      logOut();
    } else {
      Swal.fire({
        title: "Faild!",
        text: filanResult.message,
        icon: "error"
      });
    }

  }

  useEffect(() => {

    const handleSchollY = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleSchollY);

    return () => window.removeEventListener("scroll", handleSchollY)

  }, []);





  return (
    <div className={`py-5  fixed top-0 left-0 w-full z-40 duration-1000 ${scrolling ? "shadow bg-[#e2eaf8]" : "bg-[#e2eaf8]"}`}>
      <div className='flex items-center justify-between sectionContainer container max-sm:px-2.5 md:px-3.5'>
        {/* Logo */}
        <div className='flex items-center gap-2.5'>
          <Link to={"/"}><img className='h-10 w-[120px]' src={navLogo} alt="" /></Link>
        </div>
        {/* Authentication */}
        <div className='flex gap-2.5'>
          {
            user ? <div className='flex gap-3 items-center'>
              <FaUser onClick={() => navigate("/login")} className='text-xl md:text-3xl font-medium text-gray-600' />
              <HiOutlineBars3BottomRight onClick={() => HandleMobileMenu()} className='text-2xl md:text-4xl text-gray-600 font-medium' />
            </div> : <button onClick={() => navigate("/login")} className='bg-blue-200 px-[20px] py-2 rounded-md hover:bg-[#1967d2] text-[#1967d2] hover:text-white duration-500'>Log In</button>
          }
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`min-w-[300px] bg-white h-screen absolute top-0 p-4 shadow z-50 ${menuOpen ? "translate-x-[0px]" : "translate-x-[-400px]"} duration-700`}>
        <div className='flex items-center justify-between'>
          <img className='h-10 w-[120px]' src={navLogo} alt="" />
          <RxCross1 onClick={() => HandleMobileMenu()} className='text-3xl font-bold' />
        </div>
        <div className='flex flex-col gap-7 pt-10'>
          {
            navItem.map((item, idx) => (
              <NavLink onClick={() => HandleMobileMenu()} to={item.path} key={idx} className={"text-xl text-gray-500 font-medium active:text-blue-700/45"}><span>{item.name}</span></NavLink>
            ))
          }

          <NavLink onClick={() => {HandleMobileMenu() , HandleLogOut()}} className={"text-xl text-gray-500 font-medium active:text-blue-700/45"}><span>LogOut</span></NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navber





