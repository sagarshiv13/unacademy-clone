import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
export const SignUp = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    dob: ""
  };
  // const [data, setData] = useState([]);
  const [text, setText] = useState(initState);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      text.firstName.length > 0 &&
      text.lastName.length &&
      text.mobile.length === 10 &&
      text.password.length > 5 &&
      text.gender.length > 0 &&
      text.dob.length === 6
    ) {
      console.log("done");
      axios.post("https://uncademy-team-clone.herokuapp.com/users", text);
      navigate("/logIn");
    } else {
      alert("enter valid information");
    }
  };
  const handleChange = (e) => {
    const { name } = e.target;
    setText({
      ...text,
      [name]: e.target.value
    });
  };
  return (
    <div className="container">
      <div className="main">
        <h2 className="link">Join Unacademy</h2>
        <h2>
          {" "}
          <Link className="green" to="/logIn">
            or login to your account
          </Link>
        </h2>
      </div>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          placeholder="FirstName"
        />
        <input
          name="lastName"
          type="text"
          onChange={handleChange}
          placeholder="LastName"
        />
        <input
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          type="text"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          name="mobile"
          type="text"
          onChange={handleChange}
          placeholder="Mobile No"
        />
        <input
          name="gender"
          type="text"
          onChange={handleChange}
          placeholder="Gender"
        />
        <input
          name="dob"
          type="text"
          onChange={handleChange}
          placeholder="Date of Birth"
        />
        <br />
        <input className="btn" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};
