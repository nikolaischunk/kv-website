import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
