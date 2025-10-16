export default function Bestsellers() {
  return (
    <>
      <section className="w-full h-[60px] bg-red-600 mb-6 ">
        <div className="max-w-6xl px-6 text-white">
          <h1 className="text-2xl font-bold p-3 mb-4 leading-tight">
            Flash Sales
          </h1>
        </div>
      </section>

       <div
      className="relative max-w-lg h-full overflow-hidden shadow-lg flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://imarket.themejr.net/wp-content/uploads/2023/02/home1-bn1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* camada escura sobre a imagem para contraste */}
      <div className="absolute inset-0"></div>

      {/* conteúdo do card */}
      <div className="relative z-10 text-center px-4">
        <p className="text-sm uppercase tracking-wide text-gray-200">
          Save up to <span className="font-bold text-white">50%</span>
        </p>
        <h2 className="text-2xl font-bold my-3">Summer Collection</h2>
        <span className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-100 transition">
          Shop Now
        </span>
      </div>
    </div>
    </>
  );
}
