import React, { useContext, useEffect, useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"
import { CreateAuthContext } from '../../../Context/Auth/CreateAuthContext';
import { useParams } from 'react-router';
import BaseUrl from './../../../Utils/BaseUrl/BaseUrl';
import Swal from 'sweetalert2';
import SocialNetwork from './SocialMediaForm/SocialNetwork';
import ContactAddress from './ContactForm/ContactAddress';

const CandidateProfile = () => {

  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [profile , setProfile] = useState([])

  const [authoreImg, setAuthoreImg] = useState("");

  const [img, setimg] = useState("");

  const HandleImageShow = async(e) => {
    const file = e.target.files[0];
    if (file) {
      setimg(URL.createObjectURL(file));
    };

    if(!file) return

    const data = new FormData();
    data.append("file" , file);
    data.append("upload_preset" , "jobportal_cloud_image_host");
    data.append("cloud_name" , "de8jq6747");

    const getImageUrl = await fetch(`https://api.cloudinary.com/v1_1/de8jq6747/image/upload` , {method : "POST" , body : data})
    const result = await getImageUrl.json();
    setAuthoreImg(result?.url);
  };


  useEffect(() => {
    const getUser = async () => {
      const result = await fetch(`${BaseUrl()}/user/${id}`);
      const finalResult = await result.json();
      if (finalResult.status) {
        setUser(finalResult?.user);
      }
    };

    const getuserProfileData = async() =>{
      const result = await fetch(`${BaseUrl()}/profile/single/${id}`);
      const finalResult = await result.json();
      if(finalResult.status){
        setProfile(finalResult?.profile)
      }

    }
    getUser();
    getuserProfileData();
  }, [id])

  const HandleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;

    const authore = id;
    const image = authoreImg;
    const fullname = form.fullName.value;
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const phoneNumber = form.phone.value;
    const website = form.website.value;
    const expectedSalary = form.expectedSalary.value;
    const exprience = form.exprience.value;
    const age = form.age.value;
    const educationLable = form.educationLable.value;
    const language = form.language.value;
    const description = form.description.value;

    const updateProfile = { authore, image, fullname, jobTitle, phoneNumber, website, expectedSalary, exprience, age, educationLable, language, description };

    const emailUpdate = await fetch(`${BaseUrl()}/user/update/${id}`, { method: "PATCH", headers: { "Content-type": "application/json", body: JSON.stringify({ email }) } });

    const finalUpdateEmail = await emailUpdate.json();

    if (!finalUpdateEmail.status) {
      return Swal.fire({
        title: "Faild!",
        text: finalUpdateEmail.message,
        icon: "error"
      });
    }

    const result = await fetch(`${BaseUrl()}/profile/update/${id}`, { method: "PATCH", headers: { "Content-type": "application/json" }, body: JSON.stringify(updateProfile) });

    const finalResult = await result.json();

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

  };  

  return (
    <div className='p-2 md:p-5'>
      <div>
        <h1 className='text-3xl font-medium leading-5 text-gray-500'>Update My Profile</h1>
      </div>
      {/* ------------------------------------- */}
      {/* Candidate Profile */}
      {/* My Profile */}
      <form onSubmit={HandleUpdateProfile} className='px-5 py-10 shadow bg-white rounded-[10px] mt-[40px] mb-[70px]'>
        <div className=''>
          <h1 className='text-2xl font-medium text-gray-500'>My Profile</h1>
        </div>
        <div className='flex flex-col gap-5 md:flex-row py-10 items-center'>
          <img className='h-[100px] w-[100px] rounded-full' src={img ? img : demoProfile} alt="" />
          <input className='border p-10 rounded-md border-gray-300' onChange={HandleImageShow} name='file' type="file" />
        </div>
        {/* Form Input */}
        <div className='space-y-5'>
          {/* Name & Job Title */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Full Name</label>
              <input defaultValue={profile ? profile?.fullname : ""} name='fullName' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Full Name' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Job Title</label>
              <input defaultValue={profile ? profile?.jobTitle : ""} name='jobTitle' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Job Title' />
            </div>
          </div>
          {/* Phone & Email*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Phone</label>
              <input defaultValue={profile ? profile?.phoneNumber : ""} name='phone' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" placeholder='Phone Number' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Email</label>
              <input defaultValue={user ? user?.email : ""} name='email' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="email" placeholder='Email' />
            </div>
          </div>
          {/* Website & sallary*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Website</label>
              <input defaultValue={profile ? profile?.website : ""} name='website' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='www.profile.com' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Expected Salary</label>
              <input defaultValue={profile ? profile?.expectedSalary : ""}  name='expectedSalary' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Expected Salary' />
            </div>
          </div>
          {/* Exprience & age*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Exprience</label>
              <input defaultValue={profile ? profile?.exprience : ""} name='exprience' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Exprience' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Age</label>
              <input defaultValue={profile ? profile?.age : ""} name='age' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Age' />
            </div>
          </div>
          {/* Education Level & Languages */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Education Level</label>
              <input defaultValue={profile ? profile?.educationLable : ""} name='educationLable' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Education Level' />
            </div>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Language</label>
              <input defaultValue={profile ? profile?.language : ""} name='language' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" placeholder='Languages' />
            </div>
          </div>
          {/* Description*/}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            <div className='flex flex-col gap-1.5 w-full'>
              <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Description</label>
              <textarea defaultValue={profile ? profile?.description : ""} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200 min-h-[200px]' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam corporis expedita earum maiores nobis sed necessitatibus labore minima ex aliquam ipsam dolorum rerum veniam, ad asperiores amet excepturi dignissimos!' name="description" id=""></textarea>
            </div>
          </div>
        </div>
        <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>Save</button>
      </form>

      {/* -------------------------------------------------------- */}
      {/* Social Media */}
      <SocialNetwork id={id} />


      {/* ------------------------ */}
      {/* Contact Information */}
      <ContactAddress id={id} />

    </div>
  )
}

export default CandidateProfile