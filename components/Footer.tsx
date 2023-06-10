import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className=' text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <Image src='/logo-no-background.svg' alt='logo' width={118} height={18} className='object-contain' />
                <p className='text-base text-gray-700 float-right'>
                    Strategy 2023. All rights reserved&copy;
                </p>
            </div>
    </footer>
  )
}

export default Footer