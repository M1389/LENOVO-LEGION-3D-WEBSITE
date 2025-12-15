import React from 'react'
import Header from './Header'
import ModelViewer from './ModelViewer'
import ProcessorViewer from './ProcessorViewer'
import CpuIntro from './CpuIntro'
import GpuIntro from './GpuIntro'

export default function Home() {
  return (
    <>
        <Header/>
        <ModelViewer/>
        <ProcessorViewer/>
        <CpuIntro/>
        <GpuIntro/>
    </>
  )
}
