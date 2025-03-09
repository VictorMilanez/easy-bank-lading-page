import { useState } from "react";
import logo from "../../images/logo.svg";
import { Button } from "../Buttons/Button";
import { Nav, Ul, Li, A, DivBar, ImgLogo, ImgMenu } from "./StyledMenu";
import iconHamburguer from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";

export const Menu = ({ menuItems }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Nav>
      <a href="#">
        <ImgLogo src={logo} alt="Logo" />
      </a>

      <ImgMenu
        src={openMenu ? iconClose : iconHamburguer}
        alt="Menu Hamburguer"
        onClick={toggleMenu}
      />

      <Ul open={openMenu}>
        {menuItems.map((item, index) => {
          return (
            <Li key={index}>
              <A href={item.link}>{item.label}</A>
              <DivBar />
            </Li>
          );
        })}
      </Ul>
      <Button buttonLabel="Request Invite" width="110px" $isMenu />
    </Nav>
  );
};
