import {  MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {

    const mobile = useMediaQuery({
    query: '(min-width: 800px)'
  });
  return (
    <section className='w-full h-[65px] bg-black flex flex-row justify-between items-center px-[5%]'>
        <div className='w-[65px]'>
            <img src="/Navbar/legion-logo.png" alt="legion-logo" />
        </div>
        <div className={mobile ? 'flex' : 'hidden'}>
            <ul className='flex flex-row justify-between items-center gap-10'>
                <li className='text-[#D6D3D1] Orbitron cursor-pointer text-[14px]'>
                    Design
                </li>
                <li className='text-[#D6D3D1] Orbitron cursor-pointer text-[14px]'>
                    Products
                </li>
                <li className='text-[#D6D3D1] Orbitron cursor-pointer text-[14px]'>
                    Models
                </li>
                <li className='text-[#D6D3D1] Orbitron cursor-pointer text-[14px]'>
                    Services
                </li>
                <li className='text-[#D6D3D1] Orbitron cursor-pointer text-[14px]'>
                    About
                </li>
            </ul>
        </div>
        <div className='flex flex-row justify-between gap-3 items-center'>
            <ShoppingCartIcon width={25} height={25} color='white' className='cursor-pointer'/>
            <MagnifyingGlassIcon width={25} height={25} color='white' className='cursor-pointer' />
        </div>
    </section>
  )
}
