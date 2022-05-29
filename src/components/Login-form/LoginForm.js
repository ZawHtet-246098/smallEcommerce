import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { FaFacebookSquare } from "react-icons/fa";
import { loginSliceActinos } from "../../store/loginSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const show = useSelector((state) => state.login.show);
  const more = useSelector((state) => state.login.more);
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginSliceActinos.login());
  };
  const openMoreInForm = () => {
    dispatch(loginSliceActinos.openMoreInForm());
  };
  const closeMoreInForm = () => {
    dispatch(loginSliceActinos.closeMoreInForm());
  };
  console.log(more);
  return (
    <div className="loginpage">
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          padding: "0 1.8rem",
          paddingBottom: "2rem",
          // marginTop: "2rem",
        }}
        className="signin-form"
      >
        <h1 style={{ paddingLeft: "0" }}>Sign in</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Email or phone number"
          />
          <input
            type="text"
            name="password"
            id="password"
            required
            value={value}
            onChange={handleChange}
            placeholder="Password"
          />

          {value === "" ? (
            <button type="submit" className="form-btn">
              Sign in
            </button>
          ) : (
            // <Link to="/video">
            <button type="submit" className="form-btn">
              Sign in
            </button>
            // </Link>
          )}
        </form>
        <div className="form-footer">
          <div className="loginwithfacebook">
            <div className="icon">
              <FaFacebookSquare />
            </div>
            <p>Login with Facebook</p>
          </div>
          <div className="third-footer">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              {/* <button onClick={() => openmoreinform}>
              {more ? "Show less" : "Learn more"}
            </button> */}
            </p>
            {more && (
              <p>
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms">Terms of Service</a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
