import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  let [error, setError] = useState("");

  let { providerlogin, githubLogin, singIn, loading } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  // const githubprovider = new GithubAuthProvider();

  let handlegooglesingin = () => {
    providerlogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    // console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User Not found. Please Create your account.");
        }

        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong Password. Please Try Again.");
        }
      });
  };

  return (
    <div className="card lg:w-80 sm:w-100 md:w-80  bg-base-100 shadow-xl login-form">
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Please Login here!</h2>
        </div>
        <div>
          <div className="inptfield">
            <label>Your Email</label>
            <input type="text" placeholder="enter your email" name="email" />
          </div>

          <div className="inptfield">
            <label>Password</label>
            <input
              type="password"
              placeholder="enter your password"
              name="password"
            />
          </div>
          <small>
            Do you have any account? <Link to="/singup">register</Link>
          </small>
        </div>
        <button className="btn btn-block my-5">login</button>
        <div className="login-icon">
          <p>or, sinup using</p>
          <button className="btn btn-block" onClick={handlegooglesingin}>
            google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
