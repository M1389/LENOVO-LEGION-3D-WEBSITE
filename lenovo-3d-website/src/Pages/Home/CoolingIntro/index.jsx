import React, { useRef, useEffect } from 'react'
import { coolingInfo } from '../../../Constants'
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger)

export default function CoolingIntro() {
    const tablet = useMediaQuery({query: '(max-width: 1024px)'})
    const videoRef = useRef(null)

    // IntersectionObserver for video
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.src = "/CoolingSection/videos/Cooling-Lenovo.mp4";
                    video.play().catch(err => console.log(err)); // prevent play promise errors
                    observer.disconnect();
                }
            },
            { rootMargin: "10px" }
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    // GSAP animation
    useGSAP(() => {
        if (!tablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#coolingIntro',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            })

            tl.fromTo('.PopUp',
                { opacity: 0, y: 800 },
                { opacity: 1, y: -40, ease: 'power1.inOut' }
            )
        }
    }, [tablet])

    return (
        <section id='coolingIntro' className='py-10 px-[5%] bg-black h-[2000px] overflow-hidden lg:h-screen relative w-full'>
            <div className='w-[80%] mx-auto'>
                {/* Attach ref here */}
                <video  className='w-full' ref={videoRef}  poster='/CoolingSection/images/CoolingImg.webp' playsInline loop muted />
            </div>
            <div className='w-[95%] backdrop-blur-none lg:backdrop-blur-md PopUp absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl lg:text-6xl font-bold text-white text-center mt-8 mb-12'>
                    Feeling safe while gaming with optimized cooling system
                </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center py-7 gap-8 w-[80%] mx-auto'>
                    {coolingInfo.map((e, index) => (
                        <div key={index}>
                            <div className='flex flex-col lg:flex-row items-center mb-2 gap-4'>
                                <img src={e.img} alt={e.id} />
                                <h3 className='text-2xl lg:text-3xl text-center lg:text-left text-white Orbitron font-bold'>{e.header}</h3>
                            </div>
                            <p className='text-xl text-center lg:text-left lg:text-2xl text-white'>{e.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
