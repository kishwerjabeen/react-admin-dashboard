import React from 'react'
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='home'>

    <Sidebar/>

    <div className='homeContainer'>Container</div>
    
    <h1 className='title'> Kishwar Jabeen</h1>
    </div>
  )
}

export default Home