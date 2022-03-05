import React, { useEffect } from 'react'
import Container from '../components/Container.jsx'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts.jsx'

import { useDispatch } from 'react-redux'
import { getPosts } from '../action/potsts.js'

const dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
  return (
    <Container>
        <Navbar/>
        <div className='flex justify-center items-center'>
            <div className="w-8/12">
                <Posts/>
            </div>
            <div className="w-4/12">
                form
            </div>

        </div>
    </Container>  
  )
}

export default dashboard