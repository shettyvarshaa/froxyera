import NavBar from "@/components/NavBar";
import HomeBanner from "./HomeBanner";
import ProductShowcase from "./ProductShowcase";
function HomePage() {
  return (
    <>
      <NavBar />
      <div id="homepage-container">
        <HomeBanner />
        <ProductShowcase />
      </div>
    </>
  );
}

export default HomePage;
