import React, { useEffect, useRef, useState } from 'react'

export default function PortsSection() {

    const [pos ,setPos] = useState('Center');
    const scrollContainerRef = useRef(null);

    const movePos = (pos)=>{
        setPos(pos)
    }

    useEffect(() => {
        if (!scrollContainerRef.current) return;
        
        const container = scrollContainerRef.current;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        switch(pos) {
            case 'Left':
                container.scrollTo({ left: 0, behavior: 'smooth' });
                break;
            case 'Center':
                container.scrollTo({ left: maxScroll / 2, behavior: 'smooth' });
                break;
            case 'Right':
                container.scrollTo({ left: maxScroll, behavior: 'smooth' });
                break;
        }
    }, [pos]);
    
  return (
    <section className='px-[5%] py-10 bg-black relative overflow-hidden'>
        <div ref={scrollContainerRef} className='overflow-scroll bg-red-600 w-full '>
            <div  className='w-[2000px]'>
                <img className='w-[200%] ' src="/PortIntro/images/lenovo-legion-5-pro-desktop.png" alt="ports" />
            </div>
        </div>
        <div className='w-[50%] relative bg-amber-50 mx-auto h-[85px] mt-10 rounded-full  px-4 '>
            <div className={`w-[30%] z-10 bg-gray-500 h-[80%] rounded-full duration-500 absolute top-1/2 -translate-y-1/2  ${pos == 'Center' ? 'left-1/2 -translate-x-1/2' : pos == 'Right' ? 'left-28 -translate-x-1/2' : 'right-28 translate-x-1/2' } `}/>
            <div onClick={()=> movePos('Right')}>
                <p className='Orbitron cursor-pointer z-20 absolute top-1/2  left-28 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-2xl font-bold'>Right</p>
            </div>
            <div onClick={()=>movePos('Center')}>
                <p className='Orbitron cursor-pointer z-20 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-2xl font-bold'>Center</p>
            </div>
            <div onClick={()=>movePos('Left')}>
                <p className='Orbitron cursor-pointer z-20 absolute top-1/2  right-28 translate-x-1/2 -translate-y-1/2 text-xl lg:text-2xl font-bold'>Left</p>
            </div>
        </div>
        <div>
            ports
        </div>
    </section>
  )
}
