import { useNavigate } from 'react-router-dom'
import incorrectPassword from './img/incorrectPassword.png'
const IncorrectPassword = () => {
  const navigate = useNavigate()
  return (
    <div className="contianer-02">
      <div className="img-box">
        <img src={incorrectPassword} alt="incorrect password" />
      </div>
      <div className="text-box">
        <h1>Incorrect Password!</h1>
        <div className="btn-group">
        <button className='login' onClick={()=>{navigate('/login')}}>Try Again</button>
        <button className='register' onClick={()=>{navigate('/register')}}>New Register</button>
        </div>
        
      </div>
    </div>
  )
}

export default IncorrectPassword ;
