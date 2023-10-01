import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import Hero from "../components/Hero.tsx";
import Carousel from "../islands/Carousel.tsx";

export default function Index() {
  return (
    <div class="wrapper">
      <Header />
      <main>
        <Hero />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
