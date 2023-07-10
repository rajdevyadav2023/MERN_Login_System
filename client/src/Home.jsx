import homeImg from './img/home.png'
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome Back!</h1>
      <div className="home-image">
        <img src={homeImg} alt="home page " />
      </div>
    </div>
  )
}

export default Home
