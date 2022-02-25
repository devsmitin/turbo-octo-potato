import Footer from "./Footer1";
import Header from "./Header";
import siteData from "../sitedata";
import Newsletter from "./Newsletter1";

const { meta, header, footer } = siteData;

const Layout = ({ children }) => {
  return (
    <>
      <Header data={header} meta={meta} />
      <main>{children}</main>
      <Newsletter />
      <Footer data={footer} meta={meta} />
    </>
  );
};

export default Layout;
