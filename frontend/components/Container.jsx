import React from 'react'

const Container = ({children}) => {
  return (
    <div className="min-h-screen">
      <div className='mx-auto px-10 '>
          {children}
      </div>
    </div>
  )
}

export default Container