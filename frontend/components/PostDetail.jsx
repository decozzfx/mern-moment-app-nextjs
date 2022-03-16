import React from 'react'
import moment from 'moment'

const PostDetail = ({post}) => {
    console.log(post)

  return (
    <div className='flex m-5 shadow-lg p-4'>
        <div className="flex-2">
            <img src={post.selectedFile} className='rounded-lg w-96' />
        </div>
        <div className="flex flex-col ml-4 justify-between">
            <p className='text-2xl  font-bold'>{post.title}</p>
            <p className='font-semibold'>Created By : {post.creator}</p>
            <p>message : {post.message}</p>
            <p>Created {moment(post.createdAt).fromNow()}</p>
        </div>
    </div>
  )
}

export default PostDetail