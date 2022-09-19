import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <h1>React forum</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
