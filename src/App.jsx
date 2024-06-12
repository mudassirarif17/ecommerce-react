import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllUser from './dashboard/AllUser'
import AddProduct from './dashboard/AddProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './dashboard/AllProducts'
import AllOrders from './dashboard/AllOrders'
import HomeDashboard from './dashboard/HomeDashboard'


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<HomeDashboard/>}/>
            <Route path="/add_product" element={<AddProduct/>}/>
            <Route path="/all_products" element={<AllProducts/>}/>
            <Route path="/all_users" element={<AllUser />}/>
            <Route path="/all_orders" element={<AllOrders />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
        
        
        
    </div>
  )
}

export default App