import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import BaseUrl from './../../../Utils/BaseUrl/BaseUrl';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageAllUsers = () => {

  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      try {
        const result = await fetch(`${BaseUrl()}/user/find`);
        const finalResult = await result.json();
        setAllUser(finalResult?.allUser)
      } catch (error) {
        console.log(error);
      }
    }
    featchData();
  }, []);



  const HandleDeleteuser = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const result = await fetch(`${BaseUrl()}/user/delete/${id}`, {
          method: "DELETE"
        });
        const finalResult = await result.json();
        if (finalResult?.status) {
          Swal.fire({
            title: "Good job!",
            text: "User Deleted Success!",
            icon: "success"
          });
          // Remove user is display
          setAllUser((allUser) => allUser.filter((item) => item._id !== id));

        }
      } catch (error) {
        Swal.fire({
          title: "Faild!",
          text: "User Deleted Faild!",
          icon: "error"
        });
      }
    }
  }



  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold text-gray-500'>Manage All Users</h1>
      </div>
      <div className="overflow-x-auto mt-6 shadow bg-white rounded-md p-5">
        <h1 className='font-bold text-2xl text-gray-400 mb-5'>Users</h1>
        <table className='w-full border-collapse'>
          <thead className='bg-[#f5f7fc] mb-5 py-4'>
            <tr className='text-blue-600/50 font-bold text-xl'>
              <th className="text-left py-3 px-5">UserName</th>
              <th className="text-left py-3 px-5">Email</th>
              <th className="text-left py-3 px-5">Role</th>
              <th className="text-left py-3 px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Gap Between Rows */}
            <tr className="h-4"></tr>
            {
              allUser.map((item) =>
                <tr key={item._id} className="border border-gray-300 rounded-md" >
                  <td className="py-4 px-5">{item?.username}</td>
                  <td className="py-4 px-5 text-gray-700 ">{item?.email}</td>
                  <td className="py-4 px-5 text-gray-700 flex flex-col gap-1">{item?.role}</td>
                  <td className="py-4 px-5">
                    <div className='flex gap-4 items-center text-gray-600 text-xl cursor-pointer'>
                      <FaEye className='hover:text-blue-500' />
                      <Link to={`/dashboard/updateUser/${item._id}`}><CiEdit className='hover:text-blue-500' /></Link>
                      <RiDeleteBinLine onClick={() => HandleDeleteuser(item?._id)} className='hover:text-red-500' />
                    </div>
                  </td>
                </tr>
              )
            }
            {/* Gap Between Rows */}
            <tr className="h-4"></tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default ManageAllUsers