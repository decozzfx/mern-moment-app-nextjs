import React, { useEffect } from 'react'
import Container from '../components/Container.jsx'
import Navbar from '../components/Navbar.jsx'
import Posts from '../components/Posts.jsx'

import { useDispatch } from 'react-redux'
import { getPosts } from '../action/posts.js'
import Form from '../components/Form.jsx'

const dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
  return (
    <Container>
        <Navbar/>
        <div className='flex'>
            <div className="w-9/12">
                <Posts/>
            </div>
            <div className="w-3/12">
                <Form/>
            </div>

        </div>
    </Container>  
  )
}

export default dashboard