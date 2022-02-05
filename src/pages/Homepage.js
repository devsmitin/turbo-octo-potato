import Layout from "../components/Layout";
import Hero from "../components/Hero1";
import CollectionListSection from "../components/CollectionListSection";
import ProductListSection from "../components/ProductListSection";
import Newsletter from "../components/Newsletter1";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <CollectionListSection />
      <ProductListSection />
      <Newsletter />
    </Layout>
  );
};

export default Homepage;
