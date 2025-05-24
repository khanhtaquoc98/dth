'use client'
import MainSection from '@/modules/homepage/main-section'
import ProcessSection from '@/modules/homepage/process-section'
import ValueSection from '@/modules/homepage/value-section'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <MainSection />
      <ValueSection />
      <ProcessSection />
    </>
  )
}
