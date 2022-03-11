import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'


const Posts = ({user}) => {
    const { posts, isLoading } = useSelector((state) => state.posts)

    if(!posts.length && !isLoading) return 'No Posts'
    
  return (
    <div className='flex flex-wrap mr-5'>
        {posts.map((post, id) => ( 
          <Post post={post} user={user} key={id}/> 
          ))}
    </div>
  )
}

export default Posts