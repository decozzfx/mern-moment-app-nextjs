import moment from 'moment'
import React from 'react'
import { MdDelete } from 'react-icons/fa'
import { useDispatch } from 'react-redux';

import { deletePost } from '../action/posts';

const Post = ({post}) => {
  const dispatch = useDispatch()
  const noneImageUrl = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'

  const deleteHandle = () => {
    dispatch(deletePost(post._id))
    
  }

  return (
    <div className="w-3/12 ">
    <div className='flex flex-col rounded-md bg-orange-400 mb-4 p-3 mt-5 mr-3'>
      <img src={post.selectedFile || noneImageUrl} alt={post.selectedFile} className='rounded-md' />
      <div>
          <h1 className='text-2xl text-white font-semibold mt-2'>{post.title}</h1>
          <h2 className='text-white text-xl'>{post.message}</h2>
          <h3 className='text-transparent/70'>{moment(post.createdAt).fromNow()}</h3>
      </div>
      <div className="justify-between">
      <button onClick={() => deleteHandle()}>
        <MdDelete/>
      </button>
      </div>
    </div>
    </div>
  )
}

export default Post