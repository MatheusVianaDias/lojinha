'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Carousel from '@/components/carousel'
import ProductGrid from '@/components/product-grid'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <Carousel />
      <div className="flex-1">
        <ProductGrid />
      </div>
      <Footer />
    </main>
  )
}
