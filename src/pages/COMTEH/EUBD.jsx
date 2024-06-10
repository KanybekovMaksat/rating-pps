import BackButton from "../../components/Back"
import NavBar from "../../components/NavBar"
import { Link } from "react-router-dom"

function Eubd() {
  return (
    <div className="сontents">
      <div className="header">
        <NavBar/>
      </div>
      <div className="main">
        <button className="btn" ><Link to="https://intuit.kg/questionnaire/" className="btn__link" >Инструкция по заполнению анкеты</Link></button>
        <div className="Edu__logo-name">
          <div className="Link__name Edu__text-M">Экономика, управление и банковское дело</div>
        </div>
        <div className="table__link">
          <div className="row">
            <h5>№</h5>
          </div>
          <div className="row">
            <h5>ФИО</h5>
          </div>
          <div className="row">
            <h5>Итого</h5>
          </div>
          <div className="row">
            <h6>1</h6>
          </div>
          <div className="row">
            <h6>Алтыбаева Шааркуль Исаковна</h6>
          </div>
          <div className="row">
            <h6>1442</h6>
          </div>
          <div className="row">
            <h6>2</h6>
          </div>
          <div className="row">
            <h6>Омуркулова Гульзат Мырзабековна</h6>
          </div>
          <div className="row">
            <h6>633</h6>
          </div>
          <div className="row">
            <h6>3</h6>
          </div>
          <div className="row">
            <h6>Шапкулова Айдай Аблабековна</h6>
          </div>
          <div className="row">
            <h6>45</h6>
          </div>
          <div className="row">
            <h6>4</h6>
          </div>
          <div className="row">
            <h6>Нарманбетова Гулбайра Джапаркуловна</h6>
          </div>
          <div className="row">
            <h6>608</h6>
          </div>
        </div>
        <BackButton/>
      </div>
    </div>
  )
}

export default Eubd