import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import "./Navbar.css"

function Navbar({setSearchQuery}) {
  return (
    <div className='navbar'>
      <h1>T O D O</h1>
      <SearchBar setSearchQuery={setSearchQuery}/>
    </div>
  )
}

export default Navbar
