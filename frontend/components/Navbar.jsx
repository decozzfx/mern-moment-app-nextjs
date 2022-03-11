import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import Router, { useRouter } from 'next/router'

const Navbar = ({ user, setUser}) => {
    const dispatch = useDispatch()

    function logoutHandler(){
      dispatch({ type : 'LOGOUT' })
      Router.push('/dashboard')
    }

    useEffect(() => {
      const token = user?.token
      
      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()) logoutHandler()
      }
    },[useRouter()])

  return (
    <div className='py-5 rounded-xl bg-orange-400 mt-10'>
        <div className="px-5 flex justify-between items-center">
          <div className="text-6xl font-bold text-orange-500 p-5 border-2 shadow-lg bg-slate-100 rounded-full">Moment App</div>
            {user ? (
              <div className="flex items-center">
                  <img className='w-2 rounded-full m-5' alt={user?.result.name} src={user?.result.name.charAt(0)}/>
                  <div className="m-10">
                      <h3 className='text-2xl '>{user?.result.name}</h3>
                  </div>
                  <button className='py-2 px-4 bg-red-500' onClick={logoutHandler}>Logout</button>
              </div>
            ) : (
                  <button className='py-2 px-4 bg-white' onClick={() => Router.push('/auth')}>Login</button>
            )}
        </div>
    </div>
  )
}

export default Navbar