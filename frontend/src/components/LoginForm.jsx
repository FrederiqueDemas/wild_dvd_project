import "../styles/_Form.scss";

export default function LoginForm() {
  return (
    <section className="auth-form">
      <div className="form-box">
        <h1>log in</h1>
        <div className="form">
          <div className="email">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn-submit">
            log in
          </button>
          <hr />
          <a href="register" className="create-account">
            Create my account
          </a>
        </div>
      </div>
    </section>
  );
}
