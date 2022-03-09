import React from 'react'

const Container = ({children}) => {
  return (
    <div className="min-h-screen mx-auto px-10">
          {children}
    </div>
  )
}

export default Container