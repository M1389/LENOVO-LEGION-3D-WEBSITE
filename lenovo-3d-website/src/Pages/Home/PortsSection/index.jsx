import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

export default function PortsSection() {
  const [pos, setPos] = useState("Center");
  const scrollContainerRef = useRef(null);

  const movePos = (pos) => {
    setPos(pos);
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    switch (pos) {
      case "Left":
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
        break;
      case "Center":
        container.scrollTo({ left: maxScroll / 2, behavior: "smooth" });
        break;
      case "Right":
        container.scrollTo({ left: 0, behavior: "smooth" });
        break;
    }
  }, [pos]);

  useGSAP(()=>{
    gsap.fromTo('.FadeScroll',
        {
            opacity: 0,
            y: 24
        },{
            opacity: 1,
            y: 0,
            ease: 'power1.inOut'
        })
  },[pos])

  return (
    <section className="px-[5%] py-10 bg-black relative overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="overflow-scroll  w-full ScrollHider"
      >
        <div className="w-[700px] lg:w-[2000px]">
          <img
            className="w-[200%] "
            src="/PortIntro/images/lenovo-legion-5-pro-desktop.png"
            alt="ports"
          />
        </div>
      </div>
      <div className=" lg:w-[50%] relative bg-amber-50 mx-auto h-[65px] lg:h-[85px] mt-10 rounded-full  px-4 ">
        <div
          className={`w-[30%] z-10 bg-gray-500 h-[80%] rounded-full duration-500 absolute top-1/2 -translate-y-1/2  ${
            pos == "Center"
              ? "left-1/2 -translate-x-1/2"
              : pos == "Right"
              ? "left-15 lg:left-28 -translate-x-1/2"
              : "right-15 lg:right-28 translate-x-1/2"
          } `}
        />
        <div onClick={() => movePos("Right")}>
          <p className="Orbitron cursor-pointer z-20 absolute top-1/2 left-15  lg:left-28 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-2xl font-bold">
            Right
          </p>
        </div>
        <div onClick={() => movePos("Center")}>
          <p className="Orbitron cursor-pointer z-20 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-2xl font-bold">
            Center
          </p>
        </div>
        <div onClick={() => movePos("Left")}>
          <p className="Orbitron cursor-pointer z-20 absolute top-1/2 right-15 lg:right-28 translate-x-1/2 -translate-y-1/2 text-xl lg:text-2xl font-bold">
            Left
          </p>
        </div>
      </div>
      {/* Ports */}
      <div className="flex flex-row justify-center items-center px-[5%] mt-10 flex-wrap min-h-[40vh]">
        <div className={`flex flex-col gap-5 items-center FadeScroll ${pos === 'Right' ? 'flex' : 'hidden'}`}>
          <p className={` text-xl lg:text-2xl duration-500 RGBTEXTURE text-center `}>
            1. USB-C 3.2 Gen 2 (DisplayPort™ 1.4)
          </p>
          <p className={` text-xl lg:text-2xl duration-500 RGBTEXTURE `}>2. Headphone/mic combo</p>
          
        </div>
        <div className={`flex flex-col gap-5 items-center FadeScroll ${pos === 'Center' ? 'flex' : 'hidden'}`}>
          <p className={` text-xl lg:text-2xl RGBTEXTURE`}>3. USB-A 3.2 Gen 1</p>
          <p className={` text-xl lg:text-2xl RGBTEXTURE`}>4. USB-A 3.2 Gen 1</p>
          <p className={` text-xl lg:text-2xl  RGBTEXTURE`}>5. Webcam e-shutter switch</p>
          <p className={` text-xl lg:text-2xl RGBTEXTURE`}>6. DC-in</p>
            <p className={` text-xl lg:text-2xl RGBTEXTURE text-center`}>
            7. 2 x USB-A 3.2 Gen 1 (1x always on 5V2A)
            </p>
            <p className={`text-xl lg:text-2xl RGBTEXTURE`}>8.USB-C 3.2 Gen 2</p>
        </div>
        <div className={`flex flex-col gap-5 items-center FadeScroll ${pos === 'Left' ? 'flex' : 'hidden'}`}>
            
            <p className={`text-xl lg:text-2xl RGBTEXTURE`}>9. HDMI 2.1</p>
            <p className={`text-xl lg:text-2xl RGBTEXTURE`}>10. Ethernet (RJ45)</p>
        </div>
      </div>
    </section>
  );
}
