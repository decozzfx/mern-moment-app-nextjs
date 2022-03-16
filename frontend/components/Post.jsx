import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

import { MdDelete } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch } from 'react-redux';

import { deletePost, getPost } from '../action/posts';
import Link from 'next/link'

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
      <div className='flex flex-col rounded-md bg-orange-400 mb-4 p-3 mt-5 mr-3 h-80'>
        <div className="flex justify-end">
          { user ? (
            <button className='text-white text-2xl mb-2' onClick={() => selectId(post._id)}>
              <BsThreeDots/>
            </button>
          ) : '' }
        </div>
        <img src={post?.selectedFile || noneImageUrl} alt={post?.selectedFile} className='h-32 rounded-md' />
        <div className='flex flex-col justify-between flex-1'>
            <Link href={`/posts/${post._id}`}><h1 onClick={() => dispatch(getPost(post._id))} className='text-2xl truncate text-white font-semibold mt-2 cursor-pointer'>{post.title}</h1></Link>
            <h2 className='text-white text-xl truncate'>{post.message}</h2>
            <div className="">
              <h3 className='text-transparent/60 mt-5 text-right'>{moment(post.createdAt).fromNow()}</h3>
            </div>
        </div>
          {user ? (
          <div className="border-t-2 border-white justify-between">
              <button className='text-2xl mt-2 -ml-1' onClick={() => deleteHandle()}>
              <MdDelete/>
            </button>
          </div>  
          ) : ''}
      </div>
    </div>
  )
}

export default Post