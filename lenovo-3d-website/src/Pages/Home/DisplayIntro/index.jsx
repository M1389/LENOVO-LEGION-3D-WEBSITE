import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

export default function DisplayIntro() {
    const tablet = useMediaQuery({query: '(max-width: 1024px)'});
    useGSAP(()=>{
        if(!tablet){
            const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '#sectionRef',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin:true
            }
        })

        tl.fromTo('.ZoomOut',
            {
                scale: 1.5,
            },
            {
                scale: 1,
            }
        ).fromTo('.Frame',
            {
                opacity: 0
            },
            {
                opacity: 1, 
                ease: 'power1.inOut'
            }
        )
        }
        
    },[tablet])
  return (
    <section id='sectionRef' className='bg-black py-10  px-[5%] overflow-hidden'>
        <div className='mb-12'>
            <h2 className='Orbitron RGBTEXTURE font-bold text-3xl lg:text-8xl text-center '>4K Display-240Hz</h2>
        </div>
        <div className='relative ZoomOut'>
            <div>
                <img className='Frame' src="/DisplaySection/images/Lenovo-Front-3.png" alt="Legion-5" />
            </div>
            
            <div className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[63%]'>
                <video  src="/DisplaySection/videos/DisplayTrailer-3.mp4" muted autoPlay playsInline loop />
            </div>
        </div>
        <div>
            
            <p className='text-white text-xl lg:text-2xl text-center w-[80%] lg:w-[60%] mx-auto mt-10 '>IPS-panel display with 240Hz performance — <span className='RGBTEXTURE'>the best choice for fast-paced gaming on the Legion 5 laptop</span>, delivering smooth motion, low input lag, and vibrant colors that keep competitive shooters and high-FPS titles buttery-clear while maintaining excellent viewing angles for streaming and co-op play.</p>
        </div>
    </section>
  )
}
