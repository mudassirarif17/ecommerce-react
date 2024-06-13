import React from 'react'
import Layout from './Layout'
import hero from "../assets/heroimg.png";


const Home = () => {
  return (
    <Layout>
        <div>
          <img src={hero} alt="" />
        </div>
    </Layout>
  )
}

export default Home