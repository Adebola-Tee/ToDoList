import React from 'react'
import Tasklist from '../../components/Tasklist/Tasklist.jsx';
import Taskheader from '../../components/Taskheader/Taskheader.jsx';
import './home.css'

const Home = () => {
  return (
   <div className='container-fluid home--container'>
    <div className='home--wrapper'>
    <Taskheader/>
    <Tasklist/>
    </div>
   </div>
  )
}

export default Home
