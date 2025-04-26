import React, { useState } from 'react'
import demoProfile from "../../../assets/demoProfile.png"
import { useParams } from 'react-router';
import SocialNetwork from './SocialMediaForm/SocialNetwork';
import ContactAddress from './ContactForm/ContactAddress';
import { useGetSingleUserProfioleQuery, useUpdateUserProfileMutation } from '../../../Redux/Services/ProfileApi/ProfileApi';
import Swal from 'sweetalert2';

const CandidateProfile = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetSingleUserProfioleQuery(id);
  const [updateUserProfile, { isLoading: updateLoading }] = useUpdateUserProfileMutation();
  const userData = data?.data[0];
  const profile = userData?.profile;



  const [authoreImg, setAuthoreImg] = useState("");

  const [img, setimg] = useState("");

  const HandleImageShow = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setimg(URL.createObjectURL(file));
    };
    // Image host in Cloudinary
    if (!file) return

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "jobportal_cloud_image_host");
    data.append("cloud_name", "de8jq6747");

    const getImageUrl = await fetch(`https://api.cloudinary.com/v1_1/de8jq6747/image/upload`, { method: "POST", body: data })
    const result = await getImageUrl.json();
    setAuthoreImg(result?.url);
  };






  const HandleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;

    const authore = id;
    const image = authoreImg;
    const fullname = form.fullName.value;
    // const email = form.email.value;
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

    const res = await updateUserProfile({ id, data: updateProfile });
    if (res?.data?.status) {
      Swal.fire({
        title: "success!",
        text: res?.data?.message,
        icon: "success"
      });
      refetch();
    } else if (res?.error.data.message) {
      Swal.fire({
        title: "Faild!",
        text: res?.error.data.message,
        icon: "error"
      });
    } else {
      Swal.fire({
        title: "Faild!",
        text: "Something went wrong! Please try again.",
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
          <h1 className='text-2xl font-medium text-gray-500'>{isLoading ? <div className="skeleton h-10 w-[200px]"></div> : "My Profile"}</h1>
        </div>
        <div className='flex flex-col gap-5 md:flex-row py-10 items-center'>
          {
            isLoading ? <div className='skeleton h-[100px] w-[100px] rounded-full'></div> : <img className='h-[100px] w-[100px] rounded-full' src={img ? img : demoProfile} alt="" />
          }

          {
            isLoading ? <div className="skeleton h-32 w-full"></div> : <input className='border p-10 rounded-md border-gray-300' onChange={HandleImageShow} name='file' type="file" />
          }

        </div>
        {/* Form Input */}
        <div className='space-y-5'>
          {/* Name & Job Title */}
          <div className='flex flex-col gap-4 md:flex-row items-center'>
            {
              isLoading ? <div className='skeleton h-[100px] w-full'></div> : <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Full Name</label>
                <input defaultValue={profile?.fullname} name='fullName' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
            }
            {
              isLoading ? <div className='skeleton h-[100px] w-f'></div> : <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Job Title</label>
                <input defaultValue={profile?.jobTitle} name='jobTitle' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
            }
          </div>
          {/* Phone & Email*/}
          {
            isLoading ? <div className='skeleton h-[100px] w-full'></div> : <div className='flex flex-col gap-4 md:flex-row items-center'>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Phone</label>
                <input defaultValue={profile?.phoneNumber} name='phone' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="number" />
              </div>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Email</label>
                <input value={userData?.email} name='email' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="email" />
              </div>
            </div>
          }
          {/* Website & sallary*/}
          {
            isLoading ? <div className='skeleton h-[100px] w-full'></div> : <div className='flex flex-col gap-4 md:flex-row items-center'>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Website</label>
                <input defaultValue={profile?.website} name='website' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Expected Salary</label>
                <input defaultValue={profile?.expectedSalary} name='expectedSalary' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
            </div>
          }
          {/* Exprience & age*/}
          {
            isLoading ? <div className='skeleton h-[100px] w-full'></div> : <div className='flex flex-col gap-4 md:flex-row items-center'>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Exprience</label>
                <input defaultValue={profile?.exprience} name='exprience' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Age</label>
                <input defaultValue={profile?.age} name='age' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
            </div>
          }
          {/* Education Level & Languages */}
          {
            isLoading ? <div className='skeleton w-full h-[100px]'></div> : <div className='flex flex-col gap-4 md:flex-row items-center'>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Education Level</label>
                <input defaultValue={profile?.educationLable} name='educationLable' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Language</label>
                <input defaultValue={profile?.language} name='language' className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200' type="text" />
              </div>
            </div>
          }
          {/* Description*/}
          {
            isLoading ? <div className='skeleton h-[100px] w-full'></div> : <div className='flex flex-col gap-4 md:flex-row items-center'>
              <div className='flex flex-col gap-1.5 w-full'>
                <label className='font-medium text-gray-500 text-[18px]' htmlFor="">Description</label>
                <textarea defaultValue={profile?.description} className='bg-[#f0f5f7] border-[#f0f5f7] p-4 mt-1 rounded-md outline-blue-200 min-h-[200px]' name="description" id=""></textarea>
              </div>
            </div>
          }
        </div>
        <button className='bg-blue-600 font-bold text-white text-xl px-10 mt-10 py-4 rounded-md hover:bg-blue-400 duration-500'>{updateLoading ? "Loading..." : "Save"}</button>
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