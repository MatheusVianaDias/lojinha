'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const carouselImages = [
  {
    id: 1,
    src: '/camiseta-masculina-preta-minimalista.jpg',
    alt: 'Camiseta Premium Preta'
  },
  {
    id: 2,
    src: '/camiseta-masculina-branca-estilo-urbano.jpg',
    alt: 'Camiseta Branca Urban'
  },
  {
    id: 3,
    src: '/camiseta-masculina-cinza-casual-moderno.jpg',
    alt: 'Camiseta Cinza Casual'
  },
  {
    id: 4,
    src: '/homem-vestindo-camiseta-preta-quality.jpg',
    alt: 'Modelo com Camiseta Preta'
  },
  {
    id: 5,
    src: '/detalhe-tecido-camiseta-premium-masculina.jpg',
    alt: 'Detalhe do Tecido'
  },
  {
    id: 6,
    src: '/camiseta-masculina-estilo-fashion-streetwear.jpg',
    alt: 'Estilo Streetwear'
  }
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsAutoPlay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % carouselImages.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] bg-primary/10">
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === current}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setIsAutoPlay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Resume Button */}
      {!isAutoPlay && (
        <button
          onClick={() => setIsAutoPlay(true)}
          className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
        >
          ▶ Retomar
        </button>
      )}
    </div>
  )
}
