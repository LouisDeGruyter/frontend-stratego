"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CustomButton } from '@/components';
import { useAuthContext } from '@/context/auth.context';
import { User } from 'firebase/auth';
import { signInWithGoogle, signOut } from '@/firebase/config';
const Navbar = () => {
  const { user }: { user: User } = useAuthContext();
  return (
    <header className='w-full absolute z-10'>
      <nav className=' mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image src='/logo-no-background.svg' alt='logo' width={118} height={18} className='object-contain' />
        </Link>
                
          {user?
          <div className='float-right flex'>  
          <div className='flex items-center justify-center'>{user.displayName}</div>
          <CustomButton
            title="Sign out"
            btnType="button"
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            handleClick={signOut}
          />
          </div>
          :<div className='float-right flex'>  
          <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
          handleClick={signInWithGoogle}
        />
        </div>
          
}
      </nav>
    </header>
  )
}

export default Navbar