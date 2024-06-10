import { Link } from "react-router-dom";
import NavBar from "../../../../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import addIcon from '../../../../img/add.png';

function RadactProgres() {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`http://localhost:8092/api/admin/stage/edit/award/title`);
        const data = resp.data.titles;
        setTitles(data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="сontents">
      <div className="private-office-contents">
        <div className="header">
          <NavBar />
        </div>
        <>
          <div className="header__menu-m">
            <Link to="/redact_progres" className="head__item_1 Montherat">Личные достижения</Link>
            <Link to="/redact_resaerch" className="head__item Montherat">Научно-исследовательская деятельность</Link>
            <Link to="/redact_education" className="head__item Montherat">Инновационно-образовательная деятельность</Link>
            <Link to="/redact_social" className="head__item Montherat">Воспитательная, общественная деятельность</Link>
          </div>
        </>
        <h2 className='Edu__text-M stage_name'>Личные достижения</h2>
        <div className="admin__links">
          {titles.map((title) => (
            <Link key={title.id} to={`/redact_progres/${title.id}`} className="admin__link">{title.name}</Link>
          ))}
          <button to="/" className="admin__link admin__link--add">
            <img src={addIcon} className="addPng" alt="Добавить" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RadactProgres;