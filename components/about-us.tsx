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
    <div className="min-h-screen bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="bg-white shadow-md">
        <div className="bg-[#f55f5f] text-white p-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">Sobre nosotros</h2>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold">i</span>
          </div>
        </div>

        <div className="p-6 flex flex-col items-center">
          <div className="relative w-40 h-40 mb-6">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Dulce de Guayaba Logo"
              width={160}
              height={160}
              className="object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="rounded-full border-2 border-black p-10 w-40 h-40 flex flex-col items-center justify-center">
                <p className="text-black font-bold text-sm text-center">DULCE DE GUAYABA</p>
                <div className="w-10 h-[1px] bg-black my-1"></div>
                <p className="text-black text-xs text-center">HECHO ARTESANAL</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-xl text-black mb-2">Artesanías PY</h3>
          <p className="text-sm text-black mb-2">14/04/2014</p>

          <div className="max-w-2xl mx-auto">
            <p className="text-base text-black text-center mb-6">
              Fundados en el año 2014, somos una empresa dedicada a la elaboración de dulces de guayaba tradicional,
              utilizando los mejores ingredientes naturales y recetas transmitidas por generaciones. Ofrecemos un
              producto de alta calidad con sabor y aroma que evoca la tradición de nuestras tierras. Nuestros dulces de
              guayaba mantienen el sabor tradicional, utilizando técnicas artesanales para garantizar la mejor
              experiencia de sabor.
            </p>
          </div>

          <Button
            onClick={onBack}
            className="bg-[#53a939] hover:bg-[#53a939]/80 text-white px-8 py-2 rounded-md mb-4 text-lg"
          >
            Volver
          </Button>
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
