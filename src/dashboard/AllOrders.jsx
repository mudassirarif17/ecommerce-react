import React from 'react';
import Dashboard from './Dashboard';

const AllOrders = () => {
  return (
    <>
      <Dashboard>
      <h1 className='text-center font-light text-3xl my-3'>All Orderss</h1>
        <div className="w-[90%] mx-auto p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-[#F0EDFF] text-[#5A67BA] border-t border-[#5A67BA] uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">P.Id</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Image</th>
                  <th className="py-3 px-6 text-left">Edit</th>
                  <th className="py-3 px-6 text-left">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-gray-200 text-gray-600  text-sm font-light">
              <tr className="w-full bg-[#F0EDFF] text-[#5A67BA] border-t border-[#5A67BA] uppercase text-sm leading-normal">
                  <td className="py-3 px-6 text-left">Data 1</td>
                  <td className="py-3 px-6 text-left">Data 2</td>
                  <td className="py-3 px-6 text-left">Data 3</td>
                  <td className="py-3 px-6 text-left">Data 4</td>
                  <td className="py-3 px-6 text-left">Data 5</td>
                  <td className="py-3 px-6 text-left">
                  <button className='bg-[#5A67BA] text-white px-4 py-1 rounded-lg font-medium active:bg-[#5A45BA] mr-1'>Edit</button>
                  </td>
                  <td className="py-3 px-6 text-left">
                  <button className='bg-[#5A67BA] text-white px-4 py-1 rounded-lg font-medium active:bg-[#5A45BA] mr-1'>Delete</button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>

      </Dashboard>
    </>
  );
};

export default AllOrders;
