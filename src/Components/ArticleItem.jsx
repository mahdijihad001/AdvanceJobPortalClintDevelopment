import React from 'react'
import { Link } from 'react-router'



const ArticleItem = ({blogImage}) => {
    return (
        <div className='shadow bg-white rounded-[10px] px-2.5 pt-2.5 pb-7 '>
            <img src={blogImage} className='w-full h-[320px] rounded-md hover:scale-102 duration-700' alt="" />
            <div className='p-4'>
                <h2 className='text-slate-400 font-medium text-[15px] pb-3'>August 31, 2021</h2>
                <Link to={"/ariicleDes"} className='font-bold text-xl text-[#2f3238] hover:text-blue-400 duration-500'>Attract Sales And Profits</Link>
                <p className='text-[14px] font-normal text-gray-400 py-2.5'>A job ravenously while Far much that one rank beheld after outside....</p>
                <Link to={"/ariicleDes"} className='text-[17px] font-normal mt-2.5 text-blue-400 hover:text-blue-700'>Read More</Link>
            </div>
        </div>
    )
}

export default ArticleItem