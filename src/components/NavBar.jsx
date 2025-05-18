import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = ({setShowSideBar}) => {
  return (
    <div className='fixed md:hidden flex flex-row-reverse top-0 bg-blue-950 h-11 w-full z-99 px-3 text-white'>
      <button onClick={()=>setShowSideBar(true)}>
      <GiHamburgerMenu size={25}/>
      </button>
    </div>
  )
}

export default NavBar
