import React from 'react'
import './taskheader.css'

const Taskheader = () => {
  return (
    <div className='taskheader--container'>
      <div className='taskheader--wrapper'>
        <h1 className='taskheader-h1'><i>T<span className='color-change'>o</span>-D<span className='color-change'>o</span> L<span className='color-change'>i</span>s<span className='color-change'>t</span></i></h1>
        <img src='../assets/todo-list img.jpg' className='taskheader-img'/>
      </div>
    </div>
  )
}

export default Taskheader
