"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface RecommendedProductsProps {
  products: any[]
  onProductClick: (product: any) => void
  onAboutUs: () => void
  onContactUs: () => void
}

export default function RecommendedProducts({
  products,
  onProductClick,
  onAboutUs,
  onContactUs,
}: RecommendedProductsProps) {
  return (
    <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#f55f5f] text-white p-2 flex justify-between items-center">
        <h2 className="font-bold">Productos recomendados</h2>
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <span className="text-black font-bold">i</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onProductClick(product)}
          >
            <div className="relative w-full aspect-square mb-2 border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt={product.name}
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs text-black font-medium text-center">{product.name}</p>
            <p className="text-xs text-black font-bold">{product.price}</p>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                onProductClick(product)
              }}
              className="bg-[#53a939] hover:bg-[#53a939]/80 text-white text-xs mt-2 py-1 px-3 h-auto"
            >
              Comprar
            </Button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 text-center">
        <Button onClick={onAboutUs} className="bg-[#6974e6] hover:bg-[#535f9e] text-white rounded-none py-1">
          Sobre nosotros
        </Button>
        <Button onClick={onContactUs} className="bg-[#6974e6] hover:bg-[#535f9e] text-white rounded-none py-1">
          Contáctanos
        </Button>
      </div>
    </div>
  )
}
