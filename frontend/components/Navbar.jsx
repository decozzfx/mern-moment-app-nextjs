import React, { useState } from 'react'

const Navbar = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  return (
    <div className='py-5 rounded-xl bg-orange-400 mt-10'>
        <div className="px-5 flex justify-between items-center">
          <div className="text-6xl font-bold text-orange-500 p-5 border-2 shadow-lg bg-slate-100 rounded-full">Moment App</div>
          <div className="px-2 text-4xl font-semibold">
              {isLoggedIn ? 'Logout' : 'Login'}
          </div>
        </div>
    </div>
  )
}

export default Navbar