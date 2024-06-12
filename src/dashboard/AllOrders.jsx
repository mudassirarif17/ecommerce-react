import React from 'react';
import Dashboard from './Dashboard';

const AllOrders = () => {
  return (
    <>
      <Dashboard>
        <h1 className='text-center font-light text-3xl my-3'>All Orders</h1>
        
        <div className='my-table w-[90%] flex justify-center items-center overflow-x-auto'>
          <table class="border-collapse border border-gray-300 default-width-right my-3 ">
            <thead className="text-xs text-[#5A67BA] uppercase bg-[#C7CEFF] dark:text-white">
              <tr>
                <th scope="col" className="px-1 py-3">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F0EDFF] text-[#5A67BA] border-t border-[#5A67BA] ">
              <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Dashboard>
    </>
  );
};

export default AllOrders;
