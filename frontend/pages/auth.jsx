import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import Router from 'next/router'

import { signin, signup } from '../action/auth'
import Container from '../components/Container'
import Icon from '../components/Icon'

const initialState = { firstName : '', lastName : '', email : '', password : '', confirmPassword : '' }

const Auth = () => {
   const dispatch = useDispatch()
   
   const [ showPassword, setShowPassword ] = useState(false)
   const [ isSignup, setIsSignup ] = useState(true)
   const [ formData, setFormData ] = useState(initialState)

   function handleChange(){

   }

   function googleSuccess(){

   }

   function googleFailure(){

   }

  return (
      <Container>
         <div className="flex justify-center items-center h-screen bg-slate-300">
             <div className="bg-gray-100 rounded-lg w-1/4 p-10">
                <h1 className='text-5xl text-center'>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
                <form className=' mt-10'>
                    <div className="flex flex-col">
                        {
                            isSignup && (
                                <>
                                    <label className='text-gray-500 mb-2'>First name</label>
                                    <input className='mb-4 border-2' name='firstName' type="text" onChange={handleChange} />
                                    <label className='text-gray-500'>Last name</label>
                                    <input className='mb-4 border-2' name='lastName mb-2' type="text" onChange={handleChange} />
                                </>
                            )
                        }
                        <label className='text-gray-500 mb-2'>Email</label>
                        <input className='mb-4 border-2' name='email' type="email" onChange={handleChange} />
                        <label className='text-gray-500 mb-2'>Password</label>
                        <input className='mb-4 border-2' name='password' type="password" onChange={handleChange} />
                        { isSignup && (
                            <>
                            <label className='text-gray-500 mb-2'>Confirm Password</label>
                            <input className='mb-4 border-2' name='password' type="password" onChange={handleChange} />
                            </>
                        ) 
                        }
                        <button type='submit' className='w-full border-2 mt-4 py-2 px-2 '>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </button>
                        <GoogleLogin 
                            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                            render={(renderProps) => (
                                <button
                                className='flex justify-center py-2 w-full text-white bg-blue-500 mt-4 disabled:cursor-not-allowed disabled:bg-blue-200'
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                ><Icon/>oogle Sign In  </button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        />
                        <div className="flex flex-end">
                            <button>{ isSignup ? 'Already have account ? Sign In' : "Don't have an account? Sign Up" }</button>
                        </div>
                    </div>
                </form>
            </div>
         </div>
      </Container>
  )
}

export default Auth