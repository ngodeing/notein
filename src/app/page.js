"use client"

import { useState, useEffect } from 'react'
import Homepage from "@/components/Homepage"
import Startpage from '@/components/startpage'


export default function Home() {
  const [showStartPage, setShowStartPage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartPage(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {showStartPage ? <Startpage /> : <Homepage />}
    </div>
  )
}
