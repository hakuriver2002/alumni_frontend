import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <div className='flex flex-col mb-8'>
      <h2 className='text-center text-3xl font-bold text-red-500 uppercase '>{title}</h2>
      <h3 className='text-center text-2xl text-blue-500 uppercase'>{subtitle}</h3>
    </div>
  )
}

export default Header
