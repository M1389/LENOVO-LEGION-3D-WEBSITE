import React from 'react'
import Header from './Header'
import ModelViewer from './ModelViewer'
import ProcessorViewer from './ProcessorViewer'
import CpuIntro from './CpuIntro'
import GpuIntro from './GpuIntro'
import DisplayIntro from './DisplayIntro'
import CoolingIntro from './CoolingIntro'

export default function Home() {
  return (
    <>
        <Header/>
        <ModelViewer/>
        <ProcessorViewer/>
        <CpuIntro/>
        <GpuIntro/>
        <DisplayIntro/>
        <CoolingIntro/>
    </>
  )
}
