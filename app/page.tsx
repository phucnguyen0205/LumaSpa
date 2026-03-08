import Banner from "@/components/Banner/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";

export default function Home() {

  return (

    <>
      <Header />

      <Banner />

      <section className="about">
        <h2>Welcome to LumaSpa</h2>
        <p>Relaxing luxury spa experience</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
      </section>

      <Footer />
    </>

  )
}