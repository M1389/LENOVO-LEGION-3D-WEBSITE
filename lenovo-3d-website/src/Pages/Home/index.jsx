import React from 'react'
import Header from './Header'
import ModelViewer from './ModelViewer'
import ProcessorViewer from './ProcessorViewer'
import CpuIntro from './CpuIntro'

export default function Home() {
  return (
    <>
        <Header/>
        <ModelViewer/>
        <ProcessorViewer/>
        <CpuIntro/>
    </>
  )
}
