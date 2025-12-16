import React from 'react'
import { coolingInfo } from '../../../Constants'
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';


gsap.registerPlugin(ScrollTrigger)
export default function CoolingIntro() {
    const tablet = useMediaQuery({query: '(max-width: 1024px)'})
    useGSAP(()=>{
        if(!tablet){
            const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '#coolingIntro',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin:true
            }
        })


        tl.fromTo('.PopUp',
            {
                opacity: 0,
                y: 800
            },
            {
                opacity: 1,
                y: 0,
                ease: 'power1.inOut'
            }
        )
        }
    },[tablet])
  return (
    <section id='coolingIntro' className='py-10 px-[5%] bg-black relative w-full h-svh'>
        <div>
            <video src="/CoolingSection/videos/Cooling-Lenovo.mp4" playsInline loop autoPlay muted/>
        </div>
        <div className='w-[95%] backdrop-blur-md PopUp absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h2 className='text-2xl lg:text-7xl text-white text-center mt-8 mb-20'>Feeling safe while gaming with optimized cooling system</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-[80%] mx-auto'>
                {coolingInfo.map((e,index)=>(
                    <div key={index}>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <img src={e.img} alt={e.id} />
                            <h3 className='text-2xl lg:text-3xl text-white Orbitron font-bold'>{e.header}</h3>
                        </div>
                        <p className='text-xl lg:text-2xl text-white'>{e.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
