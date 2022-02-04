import Layout from "./components/Layout";
import Hero from "./components/Hero1";
import CollectionListSection from "./components/CollectionListSection";
import ProductListSection from "./components/ProductListSection";
import Newsletter from "./components/Newsletter1";

function App() {
  return (
    <Layout>
      <Hero />
      <CollectionListSection />
      <ProductListSection />
      <Newsletter />
    </Layout>
  );
}

export default App;
