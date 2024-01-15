import { Link } from "react-router-dom";
import { FooterStyled } from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <div>Footer</div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/">Main</Link>
          <Link to="prices">Prices</Link>
          <Link to="gallery">Gallery</Link>
          <Link to="competitions">Competitions</Link>
          <Link to="contacts">Contacts</Link>
        </div>
      </FooterStyled>
    </>
  );
};

export default Footer;
