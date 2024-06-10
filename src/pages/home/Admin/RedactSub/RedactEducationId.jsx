import { useEffect, useState } from "react";
import NavBar from "../../../../components/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

function RedactEducationId() {
  const { id } = useParams();
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`http://api.pps.makalabox.com/api/user/account/award/get/${id}`);
        const data = resp.data.titles;
        setTitles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="сontents">
      <div className="private-office-contents">
        <div className="header">
          <NavBar />
        </div>
        <div>
          <h2>Details for Title ID: {id}</h2>
          <ul>
            {titles.map((title, index) => (
              <li key={index}>{title.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RedactEducationId;
