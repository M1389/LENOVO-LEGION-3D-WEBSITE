import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef } from 'react'

export default function Header() {
  const videoRef = useRef();

  useEffect(()=>{
    if(videoRef.current) videoRef.current.playbackRate = 1;
  },[])

  return (
    <section className='bg-black px-[5%] py-[65px]  flex flex-col items-center'>
      <div className='flex flex-col items-center  z-50 '>
        <h3 className='text-white Orbitron text-2xl'>
          Build for pros
        </h3>
        <img src="/Header/images/RGB-intro3.png" alt="Legion-pro" />
      </div>
      <div className='w-[60%] mx-auto z-10'>
        <video ref={videoRef} src="/Header/videos/Legion-Pro-R7.mp4" muted autoPlay playsInline ></video>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-[18px] text-white text-center'>Best choice for gamers who want to be pro.</p>
        <div className='flex flex-row items-center gap-1.5 border-2 border-white px-2 py-1 cursor-pointer rounded-3xl'>
          <p className='text-[14px] text-white'>See More</p>
          <ArrowUpRightIcon width={20} height={20} color='white'/>
        </div>
      </div>
    </section>
  )
}
