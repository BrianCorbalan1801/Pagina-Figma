"use client"

import { useState } from "react"
import WelcomeScreen from "@/components/welcome-screen"
import ProductDescription from "@/components/product-description"
import RecommendedProducts from "@/components/recommended-products"
import AboutUs from "@/components/about-us"
import ContactUs from "@/components/contact-us"
import ProductDetail from "@/components/product-detail"

// Product data
const products = [
  {
    id: 1,
    name: "Dulce de Guayaba 250gr",
    price: "5.000gs",
    description: "Dulce de guayaba artesanal a base de ingredientes naturales",
    longDescription:
      "Nuestro dulce de guayaba tradicional de 250g, elaborado con guayabas frescas seleccionadas a mano y azúcar de caña. Perfecto para acompañar quesos, galletas o disfrutar solo como postre. Un sabor auténtico que evoca la tradición de nuestras recetas familiares.",
    size: "250g",
  },
  {
    id: 2,
    name: "Dulce de Guayaba 500gr",
    price: "10.000gs",
    description: "Dulce de guayaba artesanal a base de ingredientes naturales",
    longDescription:
      "Pack familiar de dulce de guayaba de 500g, ideal para compartir en reuniones o tener siempre en casa. Elaborado con guayabas maduras y azúcar de caña, siguiendo nuestra receta tradicional que conserva todo el sabor y aroma de la fruta fresca.",
    size: "500g",
  },
  {
    id: 3,
    name: "Dulce de Guayaba 1kg",
    price: "20.000gs",
    description: "Dulce de guayaba artesanal a base de ingredientes naturales",
    longDescription:
      "Presentación mediana de 1kg de nuestro dulce de guayaba premium. Elaborado con ingredientes 100% naturales, sin conservantes ni colorantes artificiales. Su textura suave y sabor intenso lo convierten en el acompañamiento perfecto para quesos, panes y postres.",
    size: "1kg",
  },
  {
    id: 4,
    name: "Dulce de Guayaba 10kg",
    price: "180.000gs",
    description: "Dulce de guayaba artesanal a base de ingredientes naturales",
    longDescription:
      "Nuestra presentación especial de 10kg de dulce de guayaba premium. Elaborado artesanalmente con guayabas seleccionadas en su punto óptimo de maduración y azúcar de caña. Ideal para negocios de repostería, hoteles o para quienes disfrutan de este tradicional dulce con frecuencia.",
    size: "10kg",
  },
]

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<string>("welcome")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setCurrentScreen("product-detail")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#c7beb7] to-[#d9d9d9]">
      <div className="max-w-md w-full mx-auto">
        {currentScreen === "welcome" && <WelcomeScreen onEnter={() => setCurrentScreen("description")} />}

        {currentScreen === "description" && <ProductDescription onAccept={() => setCurrentScreen("products")} />}

        {currentScreen === "products" && (
          <RecommendedProducts
            products={products}
            onProductClick={handleProductClick}
            onAboutUs={() => setCurrentScreen("about")}
            onContactUs={() => setCurrentScreen("contact")}
          />
        )}

        {currentScreen === "product-detail" && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentScreen("products")}
            onAboutUs={() => setCurrentScreen("about")}
            onContactUs={() => setCurrentScreen("contact")}
          />
        )}

        {currentScreen === "about" && (
          <AboutUs
            onAboutUs={() => setCurrentScreen("about")}
            onContactUs={() => setCurrentScreen("contact")}
            onBack={() => setCurrentScreen("products")}
          />
        )}

        {currentScreen === "contact" && (
          <ContactUs
            onAboutUs={() => setCurrentScreen("about")}
            onContactUs={() => setCurrentScreen("contact")}
            onBack={() => setCurrentScreen("products")}
          />
        )}
      </div>
    </main>
  )
}
