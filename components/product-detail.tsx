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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#f55f5f] text-white p-2 flex justify-between items-center">
        <h2 className="font-bold">Detalle del Producto</h2>
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <span className="text-black font-bold">i</span>
        </div>
      </div>

      <div className="p-4">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-4 p-0 h-auto flex items-center text-black hover:text-black hover:bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm">Volver a productos</span>
        </Button>

        <div className="flex flex-col items-center mb-4">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt={product.name}
            width={200}
            height={200}
            className="object-cover mb-4"
          />
          <h3 className="font-bold text-xl text-black">{product.name}</h3>
          <p className="text-lg font-bold text-black mb-2">{product.price}</p>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-black mb-4">{product.size}</div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-black mb-2">Descripción del producto</h4>
          <p className="text-sm text-black mb-4">{product.longDescription}</p>

          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <h4 className="font-bold text-black mb-2">Ingredientes</h4>
            <ul className="text-sm text-black list-disc pl-5">
              <li>Guayaba fresca</li>
              <li>Azúcar de caña</li>
              <li>Jugo de limón natural</li>
              <li>Canela (opcional)</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <h4 className="font-bold text-black mb-2">Beneficios</h4>
            <ul className="text-sm text-black list-disc pl-5">
              <li>100% ingredientes naturales</li>
              <li>Sin conservantes artificiales</li>
              <li>Elaboración artesanal</li>
              <li>Rico en vitamina C</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="bg-[#53a939] hover:bg-[#53a939]/80 text-white py-2">Comprar ahora</Button>
          <Button variant="outline" className="border-[#53a939] text-[#53a939] hover:bg-[#53a939]/10 py-2">
            Agregar al carrito
          </Button>
        </div>
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
