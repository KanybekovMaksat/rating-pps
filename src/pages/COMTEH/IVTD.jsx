import BackButton from "../../components/Back"
import NavBar from "../../components/NavBar"
import { Link } from "react-router-dom"

function Ivtd() {

  return (
    <div className="сontents">
      <div className="header">
        <NavBar/>
      </div>
      <div className="main">
        <button className="btn" ><Link to="https://intuit.kg/questionnaire/" className="btn__link" >Инструкция по заполнению анкеты</Link></button>
          <div className="Edu__logo-name">
          <div className="Link__name Edu__text-M">Информатика, вычислительная техника и дизайна</div>
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
            <h6></h6>
          </div>
          <div className="row">
            <h6>1508</h6>
          </div>
          <div className="row">
            <h6>2</h6>
          </div>
          <div className="row">
            <h6>Исхакова Гульбахар Ашимжановна</h6>
          </div>
          <div className="row">
            <h6>968</h6>
          </div>
          <div className="row">
            <h6>3</h6>
          </div>
          <div className="row">
            <h6>Абдиев Азамат Шейшенбаевич</h6>
          </div>
          <div className="row">
            <h6>986</h6>
          </div>
          <div className="row">
            <h6>4</h6>
          </div>
          <div className="row">
            <h6>Калыков Алымбек Абдумаликович</h6>
          </div>
          <div className="row">
            <h6>0</h6>
          </div>
        </div>
        <BackButton/>
      </div>
    </div>
  )
}

export default Ivtd