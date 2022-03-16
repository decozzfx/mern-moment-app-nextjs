import React, { useEffect } from 'react'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getPost } from '../../action/posts'
import PostDetail from '../../components/PostDetail'

const Post = () => {
    const user = useSelector((state) => state.auth.authData)
    const post = useSelector((state) => state.posts.currentPost)

    const dispatch = useDispatch()

    // console.log(data)
    
  return (
    <Container>
        <Navbar/>
        <PostDetail post={post} />
    </Container>
  )
}

export default Post