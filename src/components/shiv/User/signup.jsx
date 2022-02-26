import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
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
    <div><header className="payment-header">
    <div className="cont">
      <a href="/">
        <img
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
          alt=""
        />
      </a>
    </div>
  </header>
    <div className="container1">
      <div className="main1">
        <h2 className="link1">Join Unacademy</h2>
        <h2 className="link1">
          {" "}
          <Link className="red" to="/logIn">
            or login to your account
          </Link>
        </h2>
      </div>
      <br />
      <form className="form1" onSubmit={handleSubmit}>
        <input className="inp2"
          name="firstName"
          onChange={handleChange}
          type="text"
          placeholder="FirstName"
        />
        <br />
        
        <input className="inp2"
          name="lastName"
          type="text"
          onChange={handleChange}
          placeholder="LastName"
        />
        <br />
      
        <input className="inp2"
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        
        <input className="inp2"
          name="password"
          type="text"
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        
        <input className="inp2"
          name="mobile"
          type="text"
          onChange={handleChange}
          placeholder="Mobile No"
        />
        <br />
       
        <input className="inp2"
          name="gender"
          type="text"
          onChange={handleChange}
          placeholder="Gender"
        />
        <br />
        
        <input className="inp2"
          name="dob"
          type="text"
          onChange={handleChange}
          placeholder="Date of Birth"
        />
        <br />
        <input className="btn" type="submit" value="Sign Up" />
      </form>
    </div>
    </div>
  );
};
