import NavBar from "../components/NavBar"
import BackButton from "../components/Back"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

function Kite() {
  const [inst, setInst] = useState([]);
  const [sortedField, setSortedField] = useState('sum');
  const [filteredInst, setFilteredInst] = useState([]);

  useEffect(() => {
    const getInst = async () => {
      try {
        const response = await axios.get('http://localhost:8092/api/rating/itec/departments');
        const data = response.data.institutions;
        setInst(data);
        setFilteredInst(data);
      } catch (error) {
        console.log(error);
      }
    };

    getInst();
  }, []);

  useEffect(() => {
    sortData(sortedField);
  }, [sortedField]);

  const sortData = (field) => {
    const sortedData = [...filteredInst].sort((a, b) => b[field] - a[field]);
    setFilteredInst(sortedData);
    setSortedField(field);
  };

  return (
    <div className="сontents">
      <div className="header">
        <NavBar />
      </div>
      <div className="main">
        <div className="Edu__logo-name">
          <div className="Kite__logo"></div>
          <div className="Edu__text-M Kite__name">Колледж инновационных технологий и экономики</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="un_l">Бишкекский колледж компьютерных систем и технологий</th>
              <th className="sorter un_l" onClick={() => sortData('middlePoints')}>Средний балл ППС</th>
              <th className="sorter un_l" onClick={() => sortData('sum')}>Итого</th>
            </tr>
          </thead>
          <tbody>
            {filteredInst.map((institution, i) => (
              <tr key={i}>
                <td>{institution.name}</td>
                <td>{institution.middlePoints}</td>
                <td>{institution.sum}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <BackButton />
      </div>
    </div>
  )
}

export default Kite