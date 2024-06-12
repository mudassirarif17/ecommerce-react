import React from 'react'
import Dashboard from './Dashboard'
import { FaUsers } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
import { Line , Bar , Pie  } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HomeDashboard = () => {
  // Define chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <>
      <Dashboard>
        <div className='w-[90%] h-[90vh] flex flex-col'>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 mx-auto">

            <div className="card bg-[#F0EDFF] h-[27vh] w-[80vw] md:[25vw] lg:w-[16vw] flex flex-col justify-center items-center">
            <FaUsers className='text-5xl text-[#5A67BA]'/>
            <h1 className='text-[#5A67BA] text-2xl font-semibold'>Users</h1>
            <p className='text-[#5A67BA] text-2xl font-semibold'>99<sup>+</sup></p>
            </div>

            <div className="card bg-[#F0EDFF] h-[27vh] w-[80vw] md:[25vw] lg:w-[16vw] flex flex-col justify-center items-center">
            <FaChartPie className='text-5xl text-[#5A67BA]'/>
            <h1 className='text-[#5A67BA] text-2xl font-semibold'>Orders</h1>
            <p className='text-[#5A67BA] text-2xl font-semibold'>99<sup>+</sup></p>
            </div>

            <div className="card bg-[#F0EDFF] h-[27vh] w-[80vw] md:[25vw] lg:w-[16vw] flex flex-col justify-center items-center">
            <FaProductHunt className='text-5xl text-[#5A67BA]'/>
            <h1 className='text-[#5A67BA] text-2xl font-semibold'>Products</h1>
            <p className='text-[#5A67BA] text-2xl font-semibold'>99<sup>+</sup></p>
            </div>

            <div className="card bg-[#F0EDFF] h-[27vh] w-[80vw] md:[25vw] lg:w-[16vw] flex flex-col justify-center items-center">
            <FcFeedback className='text-5xl text-[#5A67BA]'/>
            <h1 className='text-[#5A67BA] text-2xl font-semibold'>Feedback</h1>
            <p className='text-[#5A67BA] text-2xl font-semibold'>99<sup>+</sup></p>
            </div>
          </div>

          <div className='chart flex flex-col md:flex-row gap-8 justify-center mx-auto'>

            <div className='bg-[#F0EDFF] h-[27vh] w-[77vw] md:w-[33vw] md:h-[50vh] my-2 flex justify-center items-center'>
            <Line data={data} options={options} />
            </div>

            <div className='bg-[#F0EDFF] h-[27vh] w-[77vw] md:w-[33vw] md:h-[50vh] my-2 flex justify-center items-center'>
            <Line data={data} options={options} />
            </div>
            

          </div>
          
    
        </div>

        
      </Dashboard>
    </>
  )
}

export default HomeDashboard