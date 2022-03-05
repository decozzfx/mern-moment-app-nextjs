import React, { useState } from 'react'

const Navbar = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  return (
    <div className='py-5 rounded-md bg-orange-400 mt-10'>
        <div className="px-5 flex justify-between items-center">
        <div className="text-6xl font-bold text-blue-600 p-2 border-2">Moment App</div>
        <div className="px-2 text-4xl ">
            {isLoggedIn ? 'Logout' : 'Login'}
        </div>
        </div>
    </div>
  )
}

export default Navbar