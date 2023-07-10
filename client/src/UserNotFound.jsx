import { useNavigate } from 'react-router-dom'
import userNotFound from './img/userNotFound.png'
const UserNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="contianer-02"> 
      <div className="img-box">
        <img src={userNotFound} alt="user not found" />
      </div>
      <div className="text-box">
        <h1>User Not Found!</h1>
        <div className="btn-group">
        <button className='login' onClick={()=>{navigate('/login')}}>Try Again</button>
        <button className='register' onClick={()=>{navigate('/register')}}>New Register</button>
        </div>
        
      </div>
    </div>
  )
}

export default UserNotFound
