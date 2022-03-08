import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RiDeleteBinLine } from 'react-icons/fa'

import { createPost } from '../action/posts'
import Title from './Title.jsx'

const Form = () => {
    const [ postData, setPostData ] = useState({ title : '', message: '', selectedFile: '' })
    // console.log(postData)

    const dispatch = useDispatch()

    const handleSubmit = () => {
       dispatch(createPost(postData))
       clear()
    }

    const clear = () => {
      setPostData({ title : '', message : '', selectedFile : '' })
    }

  return (
    <div className='rounded-md flex flex-row bg-orange-300 mt-5 justify-center'>
      <form onSubmit={handleSubmit} className='rounded-lg shadow-xl flex flex-col px-8 mt-10 pb-10 bg-white w-full'>
         <div className="text-center">
            <Title>Post a Moment</Title>
         </div>
         <label className="text-gray-500 font-light mt-8 ">Title<span className="text-red-500 ">*</span></label>
         <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" value={postData.title} onChange={(e) => {setPostData({...postData, title : e.target.value})}} />
         <label className="text-gray-500 font-light mt-8 ">Message<span className="text-red-500 ">*</span></label>
         <textarea type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" value={postData.message} onChange={(e) => {setPostData({...postData, message : e.target.value})}} />
         <label className="text-gray-500 font-light mt-8 ">Image<span className="text-red-500 ">*</span></label>
         <div className="mt-8">
            <FileBase
            type='file'
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64}) }
            />
         </div>
         <button type="submit" className={`border-green-500px-10 mt-14 py-5 px-6 bg-[#130F49] hover:scale-105 text-gray-50 font-semibold rounded-md text-lg flex flex-row items-center disabled:opacity-40 justify-center`}>
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>

      </form>        
    </div>
  )
}

export default Form