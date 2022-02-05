import Footer from "./Footer1";
import Header from "./Header";
import siteData from "../sitedata";

const { meta, header, footer } = siteData;

const Layout = ({ children }) => {
  return (
    <>
      <Header data={header} meta={meta} />
      <main>{children}</main>
      <Footer data={footer} meta={meta} />
    </>
  );
};

export default Layout;
