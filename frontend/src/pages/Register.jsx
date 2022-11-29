import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import userAPI from "../services/userAPI";

import "../styles/_Form.scss";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [signupFirstName, setSignupFirstName] = useState(null);
  const [signupLastName, setSignupLastName] = useState(null);
  const [signupEmail, setSignupEmail] = useState(null);
  const [signupPhone, setSignupPhone] = useState(null);
  const [signupAddress, setSignupAddress] = useState(null);
  const [signupZipcode, setSignupZipcode] = useState(null);
  const [signupCity, setSignupCity] = useState(null);
  const [signupPassword, setSignupPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      user: {
        lastname: signupLastName,
        firstname: signupFirstName,
        email: signupEmail,
        phone: signupPhone,
        password: signupPassword,
        address: signupAddress,
        city: signupCity,
        zipcode: signupZipcode,
      },
    };

    userAPI
      .post(`/api/user`, { info })
      .then(() => {
        toast.success("Votre compte a bien été crée !");
        navigate("/");
      })
      .catch((error) => {
        toast.warning("Erreur dans le formulaire");
        console.error("Error :", error);
      });
  };

  return (
    <section className="auth-form">
      <div className="form-box">
        <h1>register</h1>
        <div className="form">
          <div className="lastname">
            <label className="form-label" htmlFor="lastName">
              LastName
            </label>
            <input
              className="form-input"
              type="text"
              id="lastName"
              placeholder="LastName"
              value={signupLastName}
              onChange={(e) => setSignupLastName(e.target.value)}
            />
            <div className="firstname">
              <label className="form-label" htmlFor="firstName">
                FirstName
              </label>
              <input
                className="form-input"
                type="text"
                id="firstName"
                placeholder="FirstName"
                value={signupFirstName}
                onChange={(e) => setSignupFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="email">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
          </div>
          <div className="phone">
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="Phone"
              value={signupPhone}
              onChange={(e) => setSignupPhone(e.target.value)}
            />
          </div>
          <div className="password">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </div>
          <label className="form-label" htmlFor="address">
            Address
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Address"
            value={signupAddress}
            onChange={(e) => setSignupAddress(e.target.value)}
          />
          <div className="city">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="City"
              value={signupCity}
              onChange={(e) => setSignupCity(e.target.value)}
            />
          </div>
          <div className="zipcode">
            <label className="form-label" htmlFor="zipcode">
              Zipcode
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="Zipcode"
              value={signupZipcode}
              onChange={(e) => setSignupZipcode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            register
          </button>
          <hr />
        </div>
      </div>
    </section>
  );
}
