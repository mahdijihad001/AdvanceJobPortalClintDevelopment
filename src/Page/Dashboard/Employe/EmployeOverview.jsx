import React from 'react'
import { FaRegBookmark } from 'react-icons/fa'
import { IoBagCheckOutline, IoDocumentTextOutline } from 'react-icons/io5'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeOverview = () => {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Candidate Overview Stats',
          },
        },
      };
    
      const data = {
        labels: ["Posted Jobs" , "Application" , "Shortlist"],
        datasets: [{
          label: 'Candidate Dashboard Overview',
          data: [55, 59, 41],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 1
        }]
      };

  return (
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {/* 1 St */}
            <div className='shadow rounded-md p-5 flex justify-between items-center'>
              <div className='w-[80px] h-[80px] bg-blue-50 rounded-md flex items-center justify-center'>
                <IoBagCheckOutline className='text-5xl text-blue-400' />
              </div>
              <div className='text-center'>
                <h1 className='font-bold text-4xl text-blue-400'>22</h1>
                <h2 className='font-medium text-gray-500 text-xl mt-3'>Posted Jobs</h2>
              </div>
            </div>
            {/* 2 nd */}
            <div className='shadow rounded-md p-5 flex justify-between items-center'>
              <div style={{ backgroundColor: "rgb(217 48 37 / 10%)" }} className='w-[80px] h-[80px] rounded-md flex items-center justify-center'>
                <IoDocumentTextOutline className='text-5xl text-[#d93025]' />
              </div>
              <div className='text-center'>
                <h1 className='font-bold text-4xl text-[#d93025]'>22</h1>
                <h2 className='font-medium text-gray-500 text-xl mt-3'>Application</h2>
              </div>
            </div>
            {/* 3 rd */}
            <div className='shadow rounded-md p-5 flex justify-between items-center'>
              <div style={{ backgroundColor: "rgb(52 168 83 / 10%)" }} className='w-[80px] h-[80px] rounded-md flex items-center justify-center'>
                <FaRegBookmark className='text-5xl text-[#34a853]' />
              </div>
              <div className='text-center'>
                <h1 className='font-bold text-4xl text-[#34a853]'>22</h1>
                <h2 className='font-medium text-gray-500 text-xl mt-3'>Shortlist</h2>
              </div>
            </div>
          </div>
          {/* Bar Chart */}
          <div className='py-[30px] md:py-[60px]'>
            <Bar options={options} data={data} />
          </div>
          {/* End Bar Chart */}
        </div>
  )
}

export default EmployeOverview