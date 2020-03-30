import React from "react";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import featuredProducts from "../utils/featuredProducts";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <section className="home">
      <HeroBlock />
      <FeaturedProducts products={featuredProducts} />
      <Footer />
    </section>
  );
}
