import moment from 'moment'
import React from 'react'

const Post = ({post}) => {
  return (
    <div className='rounded-md'>
        <img src={post.selectedFile} alt={posts.selectedFile}>
            <h1>{post.title}</h1>
            <h1>{moment(post.createdAt).fromNow()}</h1>
        </img>
    </div>
  )
}

export default Post