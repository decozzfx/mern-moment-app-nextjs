import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

import { MdDelete } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch } from 'react-redux';

import { deletePost } from '../action/posts';

const Post = ({post}) => {
  const dispatch = useDispatch()
  const noneImageUrl = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
  const user = useSelector((state) => state.auth.authData)


  const deleteHandle = () => {
    dispatch(deletePost(post._id))
    
  }

  const selectId = (id) => {
    dispatch({ type : 'SELECT_ID', payload : id})
  }

  return (
    <div className="w-3/12 ">
    <div className='flex flex-col rounded-md bg-orange-400 mb-4 p-3 mt-5 mr-3'>
      <div className="flex justify-end">
        { user ? (
          <button className='text-white text-2xl mb-2' onClick={() => selectId(post._id)}>
            <BsThreeDots/>
          </button>
        ) : '' }
      </div>
      <img src={post.selectedFile || noneImageUrl} alt={post.selectedFile} className='rounded-md' />
      <div>
          <h1 className='text-2xl text-white font-semibold mt-2'>{post.title}</h1>
          <h2 className='text-white text-xl'>{post.message}</h2>
          <h3 className='text-transparent/60 mt-5'>{moment(post.createdAt).fromNow()}</h3>
      </div>
      <div className="justify-between">
        {user ? (
          <button className='text-2xl mt-2' onClick={() => deleteHandle()}>
            <MdDelete/>
          </button>
        ) : ''}
      </div>
    </div>
    </div>
  )
}

export default Post