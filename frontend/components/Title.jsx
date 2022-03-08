import React from 'react'

const Title = ({children}) => {
    return (
        <>
            <h1 className='md:text-5xl text-4xl mt-5 font-bold text-orange-700'>{children}</h1>
        </>
    )
}

export default Title