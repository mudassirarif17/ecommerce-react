import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllUser from './dashboard/AllUser'
import AddProduct from './dashboard/AddProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './dashboard/AllProducts'
import AllOrders from './dashboard/AllOrders'
import HomeDashboard from './dashboard/HomeDashboard'
import Home from './pages/Home'
import Tshirts from './pages/Tshirts'
import Hoodies from './pages/Hoodies'
import Stickers from './pages/Stickers'
import Mugs from './pages/Mugs'


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tshirts" element={<Tshirts/>}/>
            <Route path="/hoodies" element={<Hoodies/>}/>
            <Route path="/stickers" element={<Stickers/>}/>
            <Route path="/mugs" element={<Mugs/>}/>
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