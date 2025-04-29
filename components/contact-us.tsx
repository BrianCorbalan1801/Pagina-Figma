"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

interface ContactUsProps {
  onAboutUs: () => void
  onContactUs: () => void
  onBack: () => void
}

export default function ContactUs({ onAboutUs, onContactUs, onBack }: ContactUsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#f55f5f] text-white p-2 flex justify-between items-center">
        <h2 className="font-bold">Contáctanos</h2>
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <span className="text-black font-bold">i</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-[#f55f5f] flex items-center justify-center mr-2">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm text-black font-medium">art@gmail.com</p>
          <p className="ml-auto text-xs text-black">¡Gracias por elegirnos!</p>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center mr-2">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm text-black font-medium">11 3489-2038</p>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center mr-2">
            <span className="text-white font-bold">f</span>
          </div>
          <p className="text-sm text-black font-medium">arte.sitio</p>
        </div>

        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center mr-2">
            <span className="text-white font-bold">X</span>
          </div>
          <p className="text-sm text-black font-medium">arte.sitio</p>
        </div>

        <p className="text-xs text-black text-center mb-4">
          Para más info sobre la página u otros productos consultanos ingresando en los links de acá
        </p>

        <div className="flex justify-center">
          <Button onClick={onBack} className="bg-[#53a939] hover:bg-[#53a939]/80 text-white px-6 py-1 rounded-md">
            Volver
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
