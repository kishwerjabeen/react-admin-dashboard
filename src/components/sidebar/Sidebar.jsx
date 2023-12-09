import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'><span className='logo'>KishwarAdmin</span></div>
      <div className='center'>
        <ul>
          <span>Dashboard</span>
        </ul>
        <ul>
          <span>Dashboard</span>
        </ul>
        <ul>
          <span>Dashboard</span>
        </ul>
        <ul>
          <span>Dashboard</span>
        </ul>
      </div>
      <div className='bottom'>Color Section</div>
    </div>
  )
}

export default Sidebar