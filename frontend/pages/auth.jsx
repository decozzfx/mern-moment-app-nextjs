import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Router from 'next/router'

import { signin, signup } from '../action/auth'
import Container from '../components/Container'
import GoogleIcon from '../components/Icons/googleIcon.js'
import { AiFillEyeInvisible } from 'react-icons/ai'

const initialState = { firstName : '', lastName : '', email : '', password : '', confirmPassword : '' }

const Auth = () => {
    const dispatch = useDispatch()
   
   const [ showPassword, setShowPassword ] = useState(false)
   const [ isSignup, setIsSignup ] = useState(false)
   const [ formData, setFormData ] = useState(initialState)

//    console.log(formData)

    // if(user) return Router.replace('/dashboard')

    function handleSubmit(e){
        e.preventDefault()
        if(isSignup){
            dispatch(signup(formData))
            clear()
            setIsSignup(false)
        }else{
            dispatch(signin(formData))
        }
    }

   function handleChange(e){
        setFormData({ ...formData, [e.target.name] : e.target.value  })
   }

   function googleSuccess(res){
        const result = res?.profileObj
        const token = res?.tokenId
    }

   function googleFailure(error){
    console.log('Google Sign In was unsuccessful, Try again '+error)
   }

   function clear(){
       setFormData(initialState)
   }

  return (
      <Container>
         <div className="flex justify-center items-center h-screen bg-slate-300">
             <div className="bg-gray-100 rounded-lg w-1/4 p-10">
                <h1 className='text-5xl text-center'>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
                <form className='mt-10' onSubmit={handleSubmit}>
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
                        <div className='relative block'>
                            <AiFillEyeInvisible className='absolute top-[30%] transform -translate-y-1/2 left-[92%]' onClick={() => setShowPassword(!showPassword)} />
                            <input className='mb-4 border-2 w-full' name='password' type={showPassword ? 'text' : "password"} onChange={handleChange} />
                        </div>
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
                    </div>
                </form>
                <GoogleLogin 
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                        <button
                        className='flex justify-center py-2 w-full text-white bg-blue-500 mt-4 disabled:cursor-not-allowed disabled:bg-blue-200'
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        ><GoogleIcon/>oogle Sign In  </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
                <div className="text-right mt-4">
                    <button className='hover:text-blue-400' onClick={() => setIsSignup(!isSignup)}>{ isSignup ? 'Already have account ? Sign In' : "Don't have an account? Sign Up" }</button>
                </div>
            </div>
         </div>
      </Container>
  )
}

export default Auth