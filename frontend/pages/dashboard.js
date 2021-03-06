import React, { useEffect, useState } from 'react'
import Container from '../components/Container.jsx'
import Navbar from '../components/Navbar.jsx'
import Posts from '../components/Posts.jsx'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { getPosts } from '../action/posts.js'
import Form from '../components/Form.jsx'

const dashboard = () => {
    const user = useSelector((state) => state.auth.authData)
    // console.log(user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
        dispatch({ type : 'GETUSER' })  
    },[])

  return (
    <Container>
        <Navbar user={user}/>
        <div className='flex'>
            <div className="w-9/12">
                <Posts user={user}/>
            </div>
            <div className="w-3/12">
                <Form/>
            </div>

        </div>
    </Container>  
  )
}

export default dashboard