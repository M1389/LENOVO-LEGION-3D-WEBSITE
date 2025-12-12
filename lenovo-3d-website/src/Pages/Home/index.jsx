import React from 'react'
import Header from './Header'
import ModelViewer from './ModelViewer'
import ProcessorViewer from './ProcessorViewer'

export default function Home() {
  return (
    <>
        <Header/>
        <ModelViewer/>
        <ProcessorViewer/>
    </>
  )
}
