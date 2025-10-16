

export default function categorias(){
    const produtos = [
    { id: 1, nome: "Phones & Tablets", quantidade: 2, imagem: "https://imarket.themejr.net/wp-content/uploads/2023/02/smartphon.jpg" },
    { id: 2, nome: "Kitchen & Appliances", quantidade: 8, imagem: "https://imarket.themejr.net/wp-content/uploads/2023/02/appliciance1.jpg" },
    { id: 3, nome: "Home & Office", quantidade: 12, imagem: "https://imarket.themejr.net/wp-content/uploads/2023/02/meuble.jpg" },
    { id: 4, nome: "Games & Consoles", quantidade: 2, imagem: "https://imarket.themejr.net/wp-content/uploads/2023/02/gamecat.jpg" },
    { id: 5, nome: "Fashion Apparel", quantidade: 8, imagem: "https://imarket.themejr.net/wp-content/uploads/2023/02/fashion1-1.jpg" },
    { id: 6, nome: "Electronics", quantidade: 12, imagem: "https://imarket.themejr.net/wp-content/uploads/2023/02/electrinicat.jpg" },
  ];
    
    return(
        <>
     <section className="container px-2 pb-6 mx-auto">
            <div className="grid sm:grid-cols-3 gap-5 lg:grid-cols-6">
            {produtos.map((item) => (
              <div key={item.id} className="max-w-sm p-1.5 hover:shadow-lg hover:bg-white">
                <img className=" h-28 sm:mx-0 sm:shrink-0" src={item.imagem} alt={item.nome} />
                <div className="text-center mt-1.5">
                  <h3 className=' font-bold text-black'>
                    <a href="">{item.nome}</a>
                  </h3>
                  <span className='text-sm font-normal text-gray-600'>{item.quantidade} produto</span>
                </div>
              </div>
                ))}
            </div>
     </section>
        </>
    )

    
}

 