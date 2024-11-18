import { useEffect } from "react";
import NavBar from "../../../../components/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

function RedactEducationId() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`https://rating.makalabox.com/api/admin/stage/edit/innovative/subtitle/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = resp;
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, token]);

  return (
    <div className="сontents">
      <div className="private-office-contents">
        <div className="header">
          <NavBar />
        </div>
        <div>
          {/* <h2>Details for Title ID: {id}</h2>
          <ul>
            <li className="Edu__text-S">{name}</li>
            <li className="Edu__text-S">Stage: {stage}</li>
            <li className="Edu__text-S">Ссылка: {link}</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default RedactEducationId;