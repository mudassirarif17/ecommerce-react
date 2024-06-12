import React from 'react'
import Dashboard from './Dashboard'
import "../App.css";

const AddProduct = () => {
  return (
    <>
    <Dashboard>
        <h1 className='text-center font-light text-3xl'>Add Product</h1>

        <div className='add-user my-5'>
          
          <div className='mb-3'>
              <input type="text" className='border-2 w-[80vw] md:w-[50vw] outline-none px-2 py-1 rounded-lg' placeholder='Product Name'/>
          </div>
          <div className='mb-3'>
              <input type="text" className='border-2 w-[80vw] md:w-[50vw] outline-none px-2 py-1 rounded-lg' placeholder='Product Price'/>
          </div>
          <div className='mb-3'>
              <textarea type="text" className='border-2 w-[80vw] md:w-[50vw] outline-none px-2 py-1 rounded-lg' placeholder='Product Description'/>
          </div>
          <div className='mb-3'>
              <input type="text" className='border-2 w-[80vw] md:w-[50vw] outline-none px-2 py-1 rounded-lg' placeholder='Product Category'/>
          </div>
          <div className='mb-3'>
              <input type="text" className='border-2 w-[80vw] md:w-[50vw] outline-none px-2 py-1 rounded-lg' placeholder='Product Quantity'/>
          </div>
          <div className='mb-3'>
              <p>Product Image</p>
              <input type="file" className='border-2 w-[80vw] md:w-[50vw] outline-none px-2 py-1 rounded-lg' />
          </div>
          <div className='mb-3'>
          <button className='bg-[#5A67BA] text-white px-4 py-1 rounded-lg font-medium active:bg-[#5A45BA] mr-1'>Add Product</button>
          </div>
        </div>
    </Dashboard>
    </>
  )
}

export default AddProduct