import { Box, Center, OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Legion } from "../../../Components/Models/Lenovo/LEGION";
import StudioLights from "../../../Components/StudioLights";
import { BlackLegion } from "../../../Components/Models/Lenovo/BlackLegion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
export default function ModelViewer() {
  const mobile = useMediaQuery({ query: "(max-width: 768px)" });
  const sectionRef = useRef(null);
  const [dark, setDark] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".FadeIn",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".FadeIn",
          start: "top center",
          end: "center top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      ".FadeInTwo",
      { opacity: 0, y: 10, scale: 0 },
      {
        opacity: 1,
        y: 0,
        scale: 1.1,
        
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".FadeInTwo",
          start: "top center",
          end: "center top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-12 ">
      <div className="py-11 flex flex-col items-center">
        <h2 className={`FadeIn ${!mobile ? 'text-5xl' : 'text-2xl'} Orbitron text-white text-center tracking-wider`}>
          Take a colser look
        </h2>
        <img
          className={`FadeInTwo ${!mobile ? 'w-[40%]' : 'w-[70%]'} mx-auto`}
          src="/ModelPreview/RGB-closerlook-2.png"
          alt="RGB-light"
        />
      </div>
      <Canvas
        id="canvas"
        camera={{
          position: [0, 15, 50], // Camera above and behind
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
      >
        <StudioLights />
        <PresentationControls
          snap={true}
          speed={1}
          zoom={1}
          polar={[-Math.PI, Math.PI]}
          global={true}
          config={{ mass: 2, tension: 400 }}
        >
          <Center key={mobile ? "mobile" : "desktop"} >
            <group scale={mobile ? 60 : 100} >
              {dark ? <BlackLegion /> : <Legion />}
            </group>
          </Center>
        </PresentationControls>
      </Canvas>

      <div className={`bg-[#636363] ${mobile ? 'w-[50%]' : 'w-[15%]'}  h-[65px] rounded-full flex flex-row justify-between items-center px-1 gap-1.5 mx-auto`}>
        <div
          onClick={() => setDark(false)}
          className={`w-[50%] h-[55px] rounded-full bg-white cursor-pointer border-2 ${dark ? 'border-white' : 'border-amber-400'}`}
        />
        <div
          onClick={() => setDark(true)}
          className={`w-[50%] h-[55px] rounded-full bg-[#2E2E2E] cursor-pointer border-2 ${!dark ? 'border-[#2E2E2E]' : 'border-amber-400'}`}
        />
      </div>
      <div className="w-[50%^] mx-auto flex flex-col items-center pt-11 gap-3">
        <p className="text-white text-xl text-center">Designed For <span className="RGBTEXTURE">Gaming</span> and also we tried to make it <span className="RGBTEXTURE">Soft and handy</span>.</p>
        <p className="text-white text-2xl text-center">“Designer-Team”</p>
      </div>
    </section>
  );
}

