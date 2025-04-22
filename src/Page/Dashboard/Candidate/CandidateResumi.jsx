import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { Link, useParams } from 'react-router'
import BaseUrl from '../../../Utils/BaseUrl/BaseUrl';

const CandidateResumi = () => {

    const {id} = useParams();
    const [resumi , setResumi] = useState([]);
    const userResumi = resumi[0];
    useEffect( () =>{
        const getResumi = async() =>{
            const result = await fetch(`${BaseUrl()}/resumi/find/${id}`);
            const finalResult = await result.json();
            if(finalResult.status){
                setResumi(finalResult.data)
            }
        };
        getResumi();
    } ,[id])

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Header Section */}
            <div className='flex justify-between'>
                <div className="flex items-center space-x-6 mb-6">
                    <img
                        src={userResumi?.profile?.image}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-gray-300"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{userResumi?.profile?.fullname}</h1>
                        <p className="text-gray-600">{userResumi?.profile?.jobTitle}</p>
                    </div>
                </div>
                <div><Link to={`/dashboard/candifateProfile/${10}`}><CiEdit className='font-bold text-4xl text-red-400' /></Link></div>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4"> Contact Information</h2>
                <p><strong>Phone:</strong> +880{userResumi?.profile?.phoneNumber}</p>
                <p><strong>Email:</strong> {userResumi?.email}</p>
                <p><strong>Website:</strong> {userResumi?.profile?.website}</p>
                <p><strong>Country:</strong> {userResumi?.contact?.country}</p>
                <p><strong>City:</strong> {userResumi?.contact?.city}</p>
                <p><strong>Complete Address:</strong> {userResumi?.contact?.compliteAddress}</p>
            </div>

            {/* Professional Details */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Professional Details</h2>
                <p><strong>Expected Salary:</strong> ${userResumi?.profile?.expectedSalary}</p>
                <p><strong>Experience:</strong> {userResumi?.profile?.exprience}</p>
                <p><strong>Age:</strong> {userResumi?.profile?.age}</p>
                <p><strong>Education Level:</strong> {userResumi?.profile?.educationLable}</p>
                <p><strong>Language:</strong> {userResumi?.profile?.language}</p>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">About Me</h2>
                <p className="text-gray-700">
                    {userResumi?.profile?.description}
                </p>
            </div>

            {/* Social Profiles */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Social Profiles</h2>
                <p><strong>Facebook:</strong> <Link to={userResumi?.network?.facebook} className="text-blue-600">{userResumi?.network?.facebook}</Link></p>
                <p><strong>Twitter:</strong> <Link to={userResumi?.network?.twiter} className="text-blue-600">{userResumi?.network?.twiter}</Link></p>
                <p><strong>LinkedIn:</strong> <Link to={userResumi?.network?.linkedin} className="text-blue-600">{userResumi?.network?.linkedin}</Link></p>
                <p><strong>GitHub:</strong> <Link className="text-blue-600">{userResumi?.network?.github}</Link></p>
            </div>
        </div>
    )
}

export default CandidateResumi