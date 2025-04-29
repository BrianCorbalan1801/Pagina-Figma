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
    <div className="min-h-screen bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="bg-white shadow-md">
        <div className="bg-[#f55f5f] text-white p-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">Contáctanos</h2>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold">i</span>
          </div>
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#f55f5f] flex items-center justify-center mr-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg text-black font-medium">art@gmail.com</p>
            <p className="ml-auto text-base text-black">¡Gracias por elegirnos!</p>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg text-black font-medium">11 3489-2038</p>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">f</span>
            </div>
            <p className="text-lg text-black font-medium">arte.sitio</p>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <p className="text-lg text-black font-medium">arte.sitio</p>
          </div>

          <p className="text-base text-black text-center mb-6">
            Para más info sobre la página u otros productos consultanos ingresando en los links de acá
          </p>

          <div className="flex justify-center">
            <Button
              onClick={onBack}
              className="bg-[#53a939] hover:bg-[#53a939]/80 text-white px-8 py-2 rounded-md text-lg"
            >
              Volver
            </Button>
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
