"use client";
import { ShoppingCart } from "lucide-react";



export default function Bestsellers(){
    const products = [
    {
      id: 1,
      name: "Tênis Casual Feminino",
      category: "Calçados",
      discount: "-20%",
      rating: 4.5,
      price: "15.000 Kz",
      image: "https://imarket.themejr.net/wp-content/uploads/2023/02/product_1_N22-300x300.jpg",
    },
    {
      id: 2,
      name: "Bolsa de Couro",
      category: "Acessórios",
      discount: "-30%",
      rating: 4.8,
      price: "12.500 Kz",
      image: "https://imarket.themejr.net/wp-content/uploads/2023/02/product_1_rrr-300x300.jpg",
    },
    {
      id: 3,
      name: "Relógio Elegante",
      category: "Relógios",
      discount: "-10%",
      rating: 4.2,
      price: "18.000 Kz",
      image: "https://imarket.themejr.net/wp-content/uploads/2023/02/product_1_111-300x300.jpg",
    },
    {
      id: 4,
      name: "Camisa Social",
      category: "Moda Masculina",
      discount: "-25%",
      rating: 4.6,
      price: "9.000 Kz",
      image: "https://imarket.themejr.net/wp-content/uploads/2023/02/product_1_N22-300x300.jpg",
    },
    {
      id: 5,
      name: "Fone Bluetooth",
      category: "Tecnologia",
      discount: "-15%",
      rating: 4.9,
      price: "22.000 Kz",
      image: "https://imarket.themejr.net/wp-content/uploads/2023/02/product_1_N22-300x300.jpg",
    },
  ];

    return(
        <>
        <section className="container px-2 pb-6 mx-auto">
            <h3 className="text-2xl font-medium text-[#212121] mb-5">Bestsellers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center py-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-white shadow-md rounded-2xl overflow-hidden w-[240px] hover:scale-105 transition-transform duration-300"
        >
          {/* selo de desconto */}
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold z-10">
            {product.discount}
          </span>

          {/* imagem */}
          <div className="relative w-full h-40 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* conteúdo */}
          <div className="p-3 flex flex-col gap-1">
            <p className="text-xs text-gray-400">{product.category}</p>
            <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
              {product.name}
            </h2>

            <div className="flex items-center text-yellow-400 text-sm">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>

            <div className="flex items-center justify-between mt-2">
              <p className="font-bold text-gray-900">{product.price}</p>
              <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </section>

  
        </>
    )
}