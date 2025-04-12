import React from 'react'
import figma from "../../../assets/figma.png";
import { CiEdit } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GrDocumentStore } from 'react-icons/gr'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router'

const ManageAllUsers = () => {
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
            {/* First Row */}
            <tr className="border border-gray-300 rounded-md">
              <td className="py-4 px-5">UserName</td>
              <td className="py-4 px-5 text-gray-700 ">MohammadJihad4040@gmail.com</td>
              <td className="py-4 px-5 text-gray-700 flex flex-col gap-1">Candidate</td>
              <td className="py-4 px-5">
                <div className='flex gap-4 items-center text-gray-600 text-xl cursor-pointer'>
                  <FaEye className='hover:text-blue-500' />
                  <CiEdit className='hover:text-blue-500' />
                  <RiDeleteBinLine className='hover:text-red-500' />
                </div>
              </td>
            </tr>
            {/* Gap Between Rows */}
            <tr className="h-4"></tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageAllUsers