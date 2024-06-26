import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar"

function Rating_quest() {

  return (
    <div className="private-office-contents">
      <div className="header">
        <NavBar />
      </div>
      <div className="private-office__main">
        <div className="office">
          <div className="header__menu-s">
            <Link to="/Progress" className="head__item Montherat">Личные достижения</Link>
            <Link to="/Ural" className="head__item Montherat">Научно-исследовательская деятельность</Link>
            <Link to="/Education" className="head__item Montherat">Инновационно-образовательная деятельность</Link>
            <Link to="/Social" className="head__item Montherat">Воспитательная, общественная деятельность</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating_quest;