import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import CpuIntro from "../CpuIntro";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessorViewer() {

  const tablet = useMediaQuery({query: '(max-width: 920px)'});
  useGSAP(() => {
    if(!tablet){
        const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#videoContainer",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    timeLine
      .fromTo(
        ".Mask img",
        {
          scale: 100,
        },
        {
          scale: 1,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".Mask div",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );
    }
  }, [tablet]);

  return (
    <section id="videoContainer" className="relative overflow-hidden ">
      <video
        className="w-full z-10"
        src="/CPUSection/videos/game-trailer.mp4"
        muted
        playsInline
        loop
        autoPlay
      />
      <div className="Mask w-full z-50 absolute top-0 left-0">
        <img
          className="w-full"
          src="/CPUSection/images/RyzenText-2.png"
          alt="Ryzen"
        />

        <div className={`z-100 absolute bottom-[20%] left-[50%] -translate-[50%] ${tablet ? 'hidden' : 'flex'} `}>
          <h2 className={`text-white ${tablet ? 'text-xl' : 'text-3xl'} Orbitron text-center mb-5`}>
            The True Feeling of <span className="RGBTEXTURE">GAMING</span> with
          </h2>
          <h3 className={`Orbitron ${tablet ? 'text-xl' : 'text-4xl'} text-red-600 text-center`}>RYZEN Series</h3>
        </div>
      </div>
      
    </section>
  );
}
