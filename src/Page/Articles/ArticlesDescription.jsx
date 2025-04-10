import React from 'react'
import profile from "../../assets/profile_pic.png"
import image from "../../assets/2.jpg"
import { useNavigate } from 'react-router'

const ArticlesDescription = () => {

    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1)
    }
  return (
    <div className='py-8'>
        <div className='container sectionContainer mx-2.5 flex flex-col items-center justify-center pt-[50px] md:pt-[100px] px-2.5'>
            <h1 className='w-3/4 text-center text-4xl font-medium text-gray-500 space-y-2.5'>Attract Sales And Profits toward the sunshine - and shadows will fall behind you.</h1>
            <div className='py-4 md:py-8 flex items-center'>
                <div className='w-[60px] h-[60px] rounded-full'>
                    <img className='rounded-full w-full h-full' src={profile} alt="" />
                </div>
                <div className='pl-5 text-gray-500  font-medium'>
                    <p>Mohammad Jihad</p>
                    <li className='text-3xl flex items-center'><span className='text-[18px]'>August 31, 2021</span></li>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <img className='w-full h-auto' src={image} alt="" />
        </div>
        <div className='container sectionContainer py-4 md:py-10 px-2.5'>
            <h1 className='font-bold text-2xl text-gray-400 pb-8'>Course Description</h1>
            <p className='font-normal text-[18px] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil eveniet ex quam doloremque? Suscipit fugiat reiciendis perferendis assumenda? Cupiditate mollitia placeat et reiciendis porro aspernatur hic nulla recusandae laborum, a minima sint minus eveniet incidunt fugit quam! Dolorem, rem deleniti est repellendus ducimus obcaecati provident iure a enim veritatis quo inventore optio nam nisi minus eos! Facere explicabo est odio laudantium, debitis earum! Sed, nemo? Libero voluptatem autem sunt quis, soluta laudantium inventore quibusdam id nam omnis quidem tenetur nisi. Nobis vitae quibusdam explicabo officia. Reiciendis vel error illo, ea officiis autem cumque nihil repellendus voluptas iste libero quidem modi consequuntur exercitationem placeat rem? Ullam recusandae animi possimus consectetur quisquam assumenda rem harum hic optio, voluptatem aut dolore esse praesentium quidem iste ducimus culpa nisi consequatur, voluptate facere provident sapiente qui doloremque. Facere harum quibusdam culpa accusamus, aperiam ut eos, ratione magni ipsam, illum nostrum. Earum animi at excepturi fugit?</p>
        </div>
        <div className='text-center'>
            <button onClick={() => goBack()} className='px-10 py-3 bg-blue-500 rounded-md font-medium text-white hover:bg-blue-600 duration-500'>Go Back</button>
        </div>
    </div>
  )
}

export default ArticlesDescription