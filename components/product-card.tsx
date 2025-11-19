'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    colors: string[]
    bestseller?: boolean
  }
}

const sizes = ['P', 'M', 'G', 'GG']

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])

  const handleWhatsAppClick = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho')
      return
    }

    const message = `Olá! Gostaria de comprar o produto SANN'T ${product.name}
- Tamanho: ${selectedSize}
- Cor: ${selectedColor}
- Preço: R$ ${product.price.toFixed(2)}

Poderia confirmar a disponibilidade e o processo de compra?`

    const whatsappUrl = `https://wa.me/55XXXXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.bestseller && (
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
            Bestseller
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
          {product.name}
        </h3>

        <div className="mb-4">
          <p className="text-2xl sm:text-3xl font-bold text-accent">
            R$ {product.price.toFixed(2)}
          </p>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-foreground mb-3">
            Cores Disponíveis
          </label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-2 rounded text-sm font-semibold transition-all ${
                  selectedColor === color
                    ? 'bg-primary text-primary-foreground ring-2 ring-accent'
                    : 'bg-muted text-foreground hover:bg-primary/20'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-foreground mb-3">
            Tamanho
          </label>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 rounded font-bold text-sm transition-all ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground ring-2 ring-accent'
                    : 'bg-muted text-foreground hover:bg-primary/20'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn"
        >
          <MessageCircle className="w-5 h-5" />
          Comprar via WhatsApp
        </button>
      </div>
    </div>
  )
}
