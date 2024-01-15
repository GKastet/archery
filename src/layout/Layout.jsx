import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({lang, funcChangeLanguage}) => {
  return (
    <>
      <Header lang={lang} funcChangeLanguage={funcChangeLanguage}/>
      <Outlet />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  lang: PropTypes.string,
  funcChangeLanguage: PropTypes.func,
};

export default Layout;
