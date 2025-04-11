import React from 'react'
import { FaCheck, FaDollarSign, FaEye, FaMapMarkerAlt, FaTimes, FaTrash } from 'react-icons/fa'

const AppliedJobsCart = () => {
    return (
        <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
            <img
                className="w-16 h-16 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
            />
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">Darlene Robertson</h2>
                <p className="text-blue-500 text-sm mb-1">Frontend Developer</p>
                <div className='flex gap-7'>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                        <FaMapMarkerAlt className="mr-1" /> London, UK
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                        <FaDollarSign className="mr-1" /> $44 / hour
                    </div>
                </div>
                <div className="mt-2 flex gap-5 space-x-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">App</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Design</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Digital</span>
                </div>
                <div className="mt-3 flex space-x-2 text-blue-500">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"><FaEye /></button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"><FaCheck /></button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"><FaTimes /></button>
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"><FaTrash /></button>
                </div>
            </div>
        </div>
    )
}

export default AppliedJobsCart