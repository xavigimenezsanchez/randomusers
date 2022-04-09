import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./menu.scss";
import { Toggle } from "./Toggle";
import { useResize } from "../../hooks";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (open: boolean): any => {
    setOpen(open);
  };

  useResize(() => setOpen(false));
  return (
    <div className={`menu${open ? " open" : ""}`}>
      <div className="menu__hamburger-buttom">
        <Toggle callback={toggleMenu} />
      </div>
      <nav className="menu__nav">
        <Link className="menu__nav__link" to="/">
          <div className="menu__nav__link__content">
            <FontAwesomeIcon icon={faHome} />
            Home
          </div>
        </Link>
        <Link className="menu__nav__link" to="/users">
          <div className="menu__nav__link__content">
            <FontAwesomeIcon icon={faUsers} />
            Users
          </div>
        </Link>
        <Link className="menu__nav__link" to="/about">
          <div className="menu__nav__link__content">
            <FontAwesomeIcon icon={faAddressCard} />
            About
          </div>
        </Link>
      </nav>
    </div>
  );
};
