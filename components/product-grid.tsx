'use client'

import ProductCard from './product-card'

interface Product {
  id: number
  name: string
  price: number
  image: string
  colors: string[]
  bestseller?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'SANN\'T Classic',
    price: 89.90,
    image: '/camiseta-preta-masculina-classic.jpg',
    colors: ['Preto', 'Branco', 'Cinza'],
    bestseller: true
  },
  {
    id: 2,
    name: 'SANN\'T Urban',
    price: 99.90,
    image: '/camiseta-branca-urban-style.jpg',
    colors: ['Branco', 'Preto', 'Azul']
  },
  {
    id: 3,
    name: 'SANN\'T Premium',
    price: 129.90,
    image: '/camiseta-premium-tecido-qualidade.jpg',
    colors: ['Preto', 'Cinza', 'Marrom']
  },
  {
    id: 4,
    name: 'SANN\'T Minimal',
    price: 79.90,
    image: '/camiseta-minimalista-design-simples.jpg',
    colors: ['Branco', 'Preto']
  },
  {
    id: 5,
    name: 'SANN\'T Sport',
    price: 109.90,
    image: '/camiseta-esportiva-conforto.jpg',
    colors: ['Preto', 'Azul', 'Branco'],
    bestseller: true
  },
  {
    id: 6,
    name: 'SANN\'T Limited',
    price: 149.90,
    image: '/camiseta-limited-edition-exclusiva.jpg',
    colors: ['Preto', 'Verde']
  }
]

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          Nossas Coleções
        </h2>
        <p className="text-muted-foreground text-lg">
          Camisetas masculinas de qualidade premium para todo estilo
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
