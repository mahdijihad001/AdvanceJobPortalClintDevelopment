import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { Link, useParams } from 'react-router'
import BaseUrl from '../../../Utils/BaseUrl/BaseUrl';

const CandidateResumi = () => {

    const {id} = useParams();
    const [resumi , setResumi] = useState([]);
    console.log(resumi);
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
                        src="/path-to-your-image.jpg"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-gray-300"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Full Name</h1>
                        <p className="text-gray-600">Job Title</p>
                    </div>
                </div>
                <div><Link to={`/dashboard/candifateProfile/${10}`}><CiEdit className='font-bold text-4xl text-red-400' /></Link></div>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Contact Information</h2>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> example@email.com</p>
                <p><strong>Website:</strong> www.yourwebsite.com</p>
                <p><strong>Country:</strong> Country Name</p>
                <p><strong>City:</strong> City Name</p>
                <p><strong>Complete Address:</strong> Street, Area, City, Country</p>
            </div>

            {/* Professional Details */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Professional Details</h2>
                <p><strong>Expected Salary:</strong> $50,000 per year</p>
                <p><strong>Experience:</strong> 3+ Years</p>
                <p><strong>Age:</strong> 28</p>
                <p><strong>Education Level:</strong> Bachelor's Degree in Computer Science</p>
                <p><strong>Language:</strong> English, Bengali</p>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">About Me</h2>
                <p className="text-gray-700">
                    Passionate MERN Stack Developer with expertise in building modern web applications. Proficient in JavaScript, React, Node.js, and MongoDB.
                </p>
            </div>

            {/* Social Profiles */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Social Profiles</h2>
                <p><strong>Facebook:</strong> <a href="#" className="text-blue-600">facebook.com/yourprofile</a></p>
                <p><strong>Twitter:</strong> <a href="#" className="text-blue-600">twitter.com/yourprofile</a></p>
                <p><strong>LinkedIn:</strong> <a href="#" className="text-blue-600">linkedin.com/in/yourprofile</a></p>
                <p><strong>GitHub:</strong> <a href="#" className="text-blue-600">github.com/yourprofile</a></p>
            </div>
        </div>
    )
}

export default CandidateResumi