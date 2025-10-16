import Bestsellers from "../components/Bestsellers";
import Categorias from "../components/Categorias";
import FlashSales from "../components/FlashSales";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Categorias/>
      <Bestsellers/>
      <FlashSales/>
     
    </div>
  );
}
