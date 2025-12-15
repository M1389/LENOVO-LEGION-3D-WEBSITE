import React from "react";
import { gpuInfo } from "../../../Constants";

export default function GpuIntro() {
  return (
    <section className="py-10 px-[5%] bg-black bg-[url(/GPUSection/images/Ellipse-gradient.png)] bg-contained bg-top bg-no-repeat">
      <div className="relative ">
        {/* <img className="w-[90%] mx-auto z-0" src="/GPUSection/images/Ellipse-gradient.png" alt="gradient" /> */}
        <div className=" z-30 ">
          <h2 className="Orbitron text-xl lg:text-8xl text-white  text-center">Powered by</h2>
          <img className="w-[20%] mx-auto mt-5 z-40" src="/GPUSection/images/NVIDIA-lable.png" alt="lable" />
        </div>
        <img className="w-[80%] mx-auto  z-60" src="/GPUSection/images/Lenovo-Top-2.png" alt="Lenovo" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl lg:text-2xl text-white text-center w-[90%] lg:w-[50%]">Real, <span className="RGBTEXTURE">safe-feeling gaming with the NVIDIA GeForce 4060</span> — every motion rendered with stunning clarity and ultra-smooth performance. Enjoy responsive controls, immersive frame rates, realistic lighting and shadows, and reduced latency for stable, elevated gameplay.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
        {gpuInfo.map((e,index)=>(
            <div key={index} className="flex flex-col items-center gap-3">
                <img className="w-[40%] lg:w-[60%] mx-auto" src={e.img} alt={e.id} />
                <h3 className="text-white text-xl lg:text-2xl text-center">{e.header}</h3>
                <p className="text-white text-center">{e.description}</p>
            </div>
        ))}
      </div>
      
    </section>
  );
}
