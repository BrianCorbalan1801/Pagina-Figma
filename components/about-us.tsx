"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface AboutUsProps {
  onAboutUs: () => void
  onContactUs: () => void
  onBack: () => void
}

export default function AboutUs({ onAboutUs, onContactUs, onBack }: AboutUsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#f55f5f] text-white p-2 flex justify-between items-center">
        <h2 className="font-bold">Sobre nosotros</h2>
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <span className="text-black font-bold">i</span>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/placeholder.svg?height=128&width=128"
            alt="Dulce de Guayaba Logo"
            width={128}
            height={128}
            className="object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="rounded-full border-2 border-black p-8 w-32 h-32 flex flex-col items-center justify-center">
              <p className="text-black font-bold text-xs text-center">DULCE DE GUAYABA</p>
              <div className="w-8 h-[1px] bg-black my-1"></div>
              <p className="text-black text-[10px] text-center">HECHO ARTESANAL</p>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-black mb-1">Artesanías PY</h3>
        <p className="text-xs text-black mb-1">14/04/2014</p>

        <p className="text-xs text-black text-center mb-4">
          Fundados en el año 2014, somos una empresa dedicada a la elaboración de dulces de guayaba tradicional,
          utilizando los mejores ingredientes naturales y recetas transmitidas por generaciones. Ofrecemos un producto
          de alta calidad con sabor y aroma que evoca la tradición de nuestras tierras. Nuestros dulces de guayaba
          mantienen el sabor tradicional, utilizando técnicas artesanales para garantizar la mejor experiencia de sabor.
        </p>

        <Button onClick={onBack} className="bg-[#53a939] hover:bg-[#53a939]/80 text-white px-6 py-1 rounded-md mb-2">
          Volver
        </Button>
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
