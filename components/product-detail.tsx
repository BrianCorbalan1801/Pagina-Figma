"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface ProductDetailProps {
  product: any
  onBack: () => void
  onAboutUs: () => void
  onContactUs: () => void
}

export default function ProductDetail({ product, onBack, onAboutUs, onContactUs }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="bg-white shadow-md">
        <div className="bg-[#f55f5f] text-white p-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">Detalle del Producto</h2>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold">i</span>
          </div>
        </div>

        <div className="p-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 p-0 h-auto flex items-center text-black hover:text-black hover:bg-transparent"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-base">Volver a productos</span>
          </Button>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="font-bold text-2xl text-black mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-black mb-3">{product.price}</p>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm text-black mb-4 inline-block">
                {product.size}
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-black mb-2">Descripción del producto</h4>
                <p className="text-sm text-black mb-4">{product.longDescription}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button className="bg-[#53a939] hover:bg-[#53a939]/80 text-white py-3 text-lg">Comprar ahora</Button>
                <Button
                  variant="outline"
                  className="border-[#53a939] text-[#53a939] hover:bg-[#53a939]/10 py-3 text-lg"
                >
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold text-black mb-3">Ingredientes</h4>
              <ul className="text-sm text-black list-disc pl-5">
                <li>Guayaba fresca</li>
                <li>Azúcar de caña</li>
                <li>Jugo de limón natural</li>
                <li>Canela (opcional)</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold text-black mb-3">Beneficios</h4>
              <ul className="text-sm text-black list-disc pl-5">
                <li>100% ingredientes naturales</li>
                <li>Sin conservantes artificiales</li>
                <li>Elaboración artesanal</li>
                <li>Rico en vitamina C</li>
              </ul>
            </div>
          </div>
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
