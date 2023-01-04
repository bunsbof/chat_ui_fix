import React from 'react'

import welcome from '../../assets/welcome.jpg'

const Welcome = () => {
  return (
    <div className='flex justify-center items-center bg-[#E0F4F1] my-6 rounded-2xl w-full h-full md:hidden'>
        <img src={welcome} alt="welcome" className='object-cover' />
    </div>
  )
}

export default Welcome