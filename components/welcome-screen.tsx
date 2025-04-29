"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface WelcomeScreenProps {
  onEnter: () => void
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="relative w-64 h-64 mb-4">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Dulce de Guayaba Logo"
          width={256}
          height={256}
          className="object-contain"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="rounded-full border-2 border-black p-12 w-56 h-56 flex flex-col items-center justify-center">
            <p className="text-black font-bold text-lg text-center">DULCE DE GUAYABA</p>
            <div className="w-12 h-[1px] bg-black my-1"></div>
            <p className="text-black text-xs text-center">HECHO ARTESANAL</p>
          </div>
        </div>
      </div>
      <Button onClick={onEnter} className="bg-[#d9d9d9] hover:bg-[#ffffff] text-black rounded-full px-8 py-2 mt-4">
        Ingresar
      </Button>
    </div>
  )
}
