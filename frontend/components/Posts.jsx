import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'


const Posts = () => {
    const { posts, isLoading } = useSelector((state) => state.posts)

    if(!posts.length && !isLoading) return 'No Posts'

  return (
    <div className='flex rounded-md w-full'>
        {posts.map((post, id) => ( 
            <Post post={post} key={id}/> 
         ))}
    </div>
  )
}

export default Posts