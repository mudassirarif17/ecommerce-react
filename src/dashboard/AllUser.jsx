import React from 'react'
import Dashboard from './Dashboard'
import "../App.css";

const AllUser = () => {
  return (
    <>
      <Dashboard>
        <h1 className='text-center font-light text-3xl'>All Users</h1>
        <div className='my-table w-[90%] h-[50vh] flex justify-center items-center overflow-x-auto'>
          <table class="border-collapse border border-gray-300 default-width-right my-3 ">
            <thead>
              <tr className=''>
                <th class="border border-gray-300 py-3">Name</th>
                <th class="border border-gray-300 py-3">Email</th>
                <th class="border border-gray-300 py-3">Password</th>
                <th class="border border-gray-300 py-3">Image</th>
                <th class="border border-gray-300 py-3">Status</th>
                <th class="border border-gray-300 py-3">Date Of Joined</th>
                <th class="border border-gray-300 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 py-3 text-center">Indiana</td>
                <td class="border border-gray-300 py-3 text-center">Indianapolis</td>
                <td class="border border-gray-300 py-3 text-center">Indianapolis</td>
                <td class="border border-gray-300 py-3 text-center">Indianapolis</td>
                <td class="border border-gray-300 py-3 text-center">Indianapolis</td>
                <td class="border border-gray-300 py-3 text-center">Indianapolis</td>
                <td class="border border-gray-300 py-3 text-center">
                  <button className='bg-[#5A67BA] text-white px-4 py-1 rounded-lg font-medium active:bg-[#5A45BA] mr-1'>Edit</button>
                  <button className='bg-[#5A67BA] text-white px-4 py-1 rounded-lg font-medium active:bg-[#5A45BA]'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>




      </Dashboard>
    </>
  )
}

export default AllUser