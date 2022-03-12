import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import Avatar from 'react-avatar'

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
    
    // console.log(user)

  return (
    <div className='py-5 rounded-xl bg-orange-400 mt-10'>
        <div className="px-5 flex justify-between items-center">
          <Link href='/dashboard'><a>
            <div className="text-6xl font-bold text-orange-500 p-5 border-2 shadow-lg bg-slate-100 rounded-full">Moment App</div>
          </a></Link>
            {user ? (
              <div className="flex items-center">
                {user?.result?.imageUrl ? (
                  <Avatar src={user?.result?.imageUrl} size='75' round={true}/>
                  ) : (
                  <Avatar name={user?.result?.name} size='75' round={true} />
                  )}
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