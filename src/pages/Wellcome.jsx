import { Link } from 'react-router-dom';

function Wellcome() {

  return (
    <Link to="/home" className='link'>
      <div className='title'>
        <h1>Добро пожаловать в Рейтинг ППС!</h1>
      </div>
    </Link>
  )
}

export default Wellcome