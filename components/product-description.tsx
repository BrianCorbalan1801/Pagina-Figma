"use client"

import { Button } from "@/components/ui/button"

interface ProductDescriptionProps {
  onAccept: () => void
}

export default function ProductDescription({ onAccept }: ProductDescriptionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-4 text-black">Dulce de Guayaba - Sabor artesanal</h2>

        <p className="text-sm text-black mb-6">
          Deléitate con nuestros dulces de guayaba 100% artesanales, elaborados con ingredientes naturales y recetas
          tradicionales. Un sabor auténtico, tropical y lleno de tradición en cada bocado.
        </p>

        <Button onClick={onAccept} className="bg-[#d9d9d9] hover:bg-[#ffffff] text-black rounded-full px-8 py-2 mt-4">
          Aceptar
        </Button>
      </div>
    </div>
  )
}
