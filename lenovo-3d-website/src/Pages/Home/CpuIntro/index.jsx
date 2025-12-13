import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
export default function CpuIntro() {
  const tablet = useMediaQuery({ query: '(max-width: 1024px)' });
  useGSAP(() => {
    if (!tablet) {
      const tm = gsap.timeline({
        scrollTrigger: {
          trigger: "#CpuSection",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      tm.fromTo(
        ".Faded",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power2.out",
        }
      );
    }
  }, [tablet]);
  return (
    <section id="CpuSection" className="relative overflow-hidden w-full h-screen bg-black">
      <div className="w-full relative">
        <img
          className="w-full h-full"
          src="/CPUSection/images/AMD-Ryzen.jpg"
          alt="AMD"
        />
        <div className="absolute top-0 left-0 w-full">
          <img
            className="w-full object-fit Faded"
            src="/CPUSection/images/gradient-mask2.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center  mx-auto Faded">
        <h2 className="Orbitron text-4xl lg:text-8xl text-left">CPU</h2>
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mt-4 text-center  ">
          <div className="col-span-2 Borders flex flex-row items-center justify-between">
            <p className="Orbitron text-2xl text-left font-bold">
              Faster than Last Generation
            </p>
            <p className="Orbitron text-2xl lg:text-3xl ">25%</p>
          </div>
          <div className="col-span-2 Borders row-span-1 row-start-2 flex flex-col items-start justify-center">
            <p className="Orbitron text-xl lg:text-4xl font-bold">3.2GH</p>
            <p className="Orbitron text-xl lg:text-4xl ">As Fast as Light</p>
          </div>
          <div className="row-span-1 col-span-2 lg:col-span-1 lg:row-span-2 Borders flex flex-col items-center justify-between">
            <p className="Orbitron text-xl lg:text-4xl font-bold">12-Cores</p>
            <p className="Orbitron text-xl lg:text-3xl">Up to 32 threads</p>
          </div>
          <div>
            <img src="/CPUSection/images/AMD-logo7.png" alt="AMD" />
          </div>
          <div className="flex flex-col items-center bg-gray-600 opacity-90 justify-center Borders cursor-pointer hover:bg-gray-800 transition-all duration-300">
            <p className="text-2xl lg:text-4xl">More Info</p>
            <ArrowUpRightIcon width={48} height={48} />
          </div>
        </div>
      </div>
    </section>
  );
}
