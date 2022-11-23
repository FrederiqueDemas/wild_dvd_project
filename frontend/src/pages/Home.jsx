import "../styles/_Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>wildvd's</h1>
        <h2>location</h2>
      </div>
      <div className="creator-box">
        <div className="creator">
          <div className="img">
            <img
              src="/src/assets/images/picture1.jpg"
              alt="avatar_fred_demas"
            />
          </div>
          <div className="name">
            <h3>Frédérique Démas</h3>
            <a href="frederique.demas73@gmail.com">
              frederique.demas73@gmail.com
            </a>
          </div>
        </div>
        <div className="creator">
          <div className="img">
            <img
              src="/src/assets/images/picture1.jpg"
              alt="avatar_fred_demas"
            />
          </div>
          <div className="name">
            <h3>Anthony Aubert</h3>
            <a href="anthony.aubert@gmail.com">anthony.aubert@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="button-box">
        <div className="buttons-login">
          <a href="login" title="Login">
            log in
          </a>
          <a href="register" title="Register">
            Register
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
}
