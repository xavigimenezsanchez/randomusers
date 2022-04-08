import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export const Menu = () => (
  <div>
    <nav>
      <Link className="patata" to="/">
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/users">
        {" "}
        <FontAwesomeIcon icon={faUsers} />
        Users
      </Link>
      <Link to="/about">
        {" "}
        <FontAwesomeIcon icon={faAddressCard} />
        About
      </Link>
    </nav>
  </div>
);
