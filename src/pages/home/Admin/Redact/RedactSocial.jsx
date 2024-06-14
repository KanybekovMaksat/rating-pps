import { Link } from "react-router-dom";
import NavBar from "../../../../components/NavBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import addIcon from '../../../../img/add.png';

function RedactResaerch() {
  const token = localStorage.getItem('token');
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`https://api.pps.makalabox.com/api/admin/stage/edit/social/title`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = resp.data.titles;
        setTitles(data);
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
        <h2 className='Edu__text-M stage_name'>Воспитательная, общественная деятельность</h2>
        <div className="admin__links" >
          {titles.map((title) => (
            <React.Fragment key={title.id}>
              <Link key={title.id} to={`/redact_social/${title.id}`} className="admin__link">{title.name}</Link>
            </React.Fragment>
          ))}
          <button to="/" className="admin__link admin__link--add">
            <img src={addIcon} className="addPng" alt="Добавить" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RedactResaerch;
