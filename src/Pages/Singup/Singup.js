import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import app from "../../firebase/firebase.confiq";

const auth = getAuth(app);
const Singup = () => {
  let { createuser } = useContext(AuthContext);
  // console.log("user", createUser);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let name = form.name.value;
    // let photourl = form.photourl.value;
    let email = form.email.value;
    let password = form.password.value;
    // console.log(email, password, name, photourl);

    createuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);

        updateProfile(auth.currentUser, {
          displayName: name,
          // photoURL: photourl,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error);
          });

        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card lg:w-80 sm:w-100 md:w-80  bg-base-100 shadow-xl login-form">
      <form onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Register here!</h2>
        </div>
        <div>
          <div className="inptfield">
            <label>Your Name</label>
            <input type="text" placeholder="enter your name" name="name" />
          </div>

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
        </div>

        <button className="btn btn-block mt-10" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Singup;
