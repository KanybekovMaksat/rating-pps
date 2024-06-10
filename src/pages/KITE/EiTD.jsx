import BackButton from "../../components/Back"
import NavBar from "../../components/NavBar"
import { Link } from "react-router-dom"

function GiED() {
  return (
    <div className="сontents">
      <div className="header">
        <NavBar/>
      </div>
      <div className="main">
        <button className="btn" ><Link to="https://intuit.kg/questionnaire/" className="btn__link" >Инструкция по заполнению анкеты</Link></button>
        <div className="Edu__logo-name">
          <div className="Link__name Edu__text-M">ЕиТД</div>
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
            <h6>Муслимов Шухрат Рахимович</h6>
          </div>
          <div className="row">
            <h6>0</h6>
          </div>
          <div className="row">
            <h6>2</h6>
          </div>
          <div className="row">
            <h6>Жолдошбаев Курсанали Мурзакозуевич</h6>
          </div>
          <div className="row">
            <h6>582</h6>
          </div>
          <div className="row">
            <h6>3</h6>
          </div>
          <div className="row">
            <h6>Мелибаев Содикжан Журабаевич</h6>
          </div>
          <div className="row">
            <h6>0</h6>
          </div>
          <div className="row">
            <h6>4</h6>
          </div>
          <div className="row">
            <h6>Оморов Нурзатбек Абдишарипович</h6>
          </div>
          <div className="row">
            <h6>937</h6>
          </div>
        </div>
        <BackButton/>
      </div>
    </div>
  )
}

export default GiED