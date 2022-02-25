import Layout from "../components/Layout";
import Hero from "../components/Hero1";
import CollectionListSection from "../components/CollectionListSection";
import ProductListSection from "../components/ProductListSection";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <CollectionListSection classList="bg-gray-100" />
      <ProductListSection />
    </Layout>
  );
};

export default Homepage;
