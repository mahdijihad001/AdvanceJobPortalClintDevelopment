import React from 'react'
import PopulerCategoryItem from '../../Components/PopulerCategoryItem'
import Finance from "../../assets/mony-1.png"
import Marketing from "../../assets/marketing.png"
import Design from "../../assets/design.png"
import Development from "../../assets/programing.png"
import Resource from "../../assets/resource.png"
import car from "../../assets/car (1).png"
import rocket from "../../assets/rocket.png"
import Health from "../../assets/first-aid-kit.png"
import Management from "../../assets/mony-1.png"

const Populer = () => {

    const positions = [
        { department: "Accounting / Finance", openPositions: 2, icon: Finance },
        { department: "Marketing", openPositions: 86, icon: Marketing },
        { department: "Design", openPositions: 43, icon: Design },
        { department: "Development", openPositions: 12, icon: Development },
        { department: "Human Resource", openPositions: 55, icon: Resource },
        { department: "Automotive Jobs", openPositions: 2, icon: car },
        { department: "Customer Service", openPositions: 2, icon: rocket },
        { department: "Health and Care", openPositions: 25, icon: Health },
        { department: "Project Management", openPositions: 92, icon: Management }
    ];


    return (
        <div className='min-h-[80vh] container sectionContainer'>
            <div className='text-center mt-[80px]'>
                <h1 className='text-4xl font-bold text-gray-500 pb-3.5'>Popular Job Categories</h1>
                <h2 className='text-[17px] font-normal text-gray-500 pt-2.5'>2020 jobs live - 293 added today.</h2>
            </div>
            <div className='mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {
                    positions.map((item, idx) => (
                        <PopulerCategoryItem key={idx} item={item} />
                    ))
                }

            </div>
            <div className='py-[50px] text-center'>
                <button className='px-8 rounded-full hover:bg-blue-500 duration-500 py-2.5 bg-blue-400 text-white font-medium'>See All Jobs</button>
            </div>
            <hr className='text-gray-300' />
        </div>
    )
}

export default Populer