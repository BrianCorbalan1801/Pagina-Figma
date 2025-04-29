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
    <div className="min-h-screen bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="bg-white shadow-md">
        <div className="bg-[#f55f5f] text-white p-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">Productos recomendados</h2>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold">i</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onProductClick(product)}
            >
              <div className="relative w-full aspect-square mb-3 border rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-black font-medium text-center">{product.name}</p>
              <p className="text-sm text-black font-bold">{product.price}</p>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  onProductClick(product)
                }}
                className="bg-[#53a939] hover:bg-[#53a939]/80 text-white text-sm mt-3 py-1 px-4 h-auto"
              >
                Comprar
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 text-center">
          <Button onClick={onAboutUs} className="bg-[#6974e6] hover:bg-[#535f9e] text-white rounded-none py-3 text-lg">
            Sobre nosotros
          </Button>
          <Button
            onClick={onContactUs}
            className="bg-[#6974e6] hover:bg-[#535f9e] text-white rounded-none py-3 text-lg"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  )
}
