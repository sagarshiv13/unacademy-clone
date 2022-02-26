import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../ContextApi/UserContextApi";
import "./Login.css";
export const LogIn = () => {
  const navigate = useNavigate();
  const{statusHandler}=useContext(UserContext);
  const [user, setUser] = useState([]);
  const [text, setText] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    axios.get("https://uncademy-team-clone.herokuapp.com/users").then((res) => {
      setUser(res.data);
    });
  };

  // let changebtn = useRef()
  // changebtn.current = false
  const handleChange = (e) => {
    // changebtn.current = true
    const { name } = e.target;
    setText({
      ...text,
      [name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let found = false;
    user.map((e) => {
      if (e.email === text.email && e.password === text.password) {
        alert("success");
        statusHandler(true)
        found = true;
        navigate("/")
      }
    });

    if (!found) {
      alert("failed");
      
    }
  };

  const goBack = () => {
    console.log("back");
    navigate("/");
  };

  return (
    <div><header className="payment-header">
    <div className="cont1">
      <a href="/">
        <img
          src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384"
          alt=""
        />
      </a>
      <h1 className="cros" onClick={goBack}>
        X
      </h1>
    </div>
  </header>

    <div className="container">
     
      <div className="main">
        <h2>Log in </h2>
        <h5>
          <Link className="green" to="/signUp">
            or create your account
          </Link>
        </h5>
      </div>
      <form onSubmit={handleSubmit}>
        <input className="inp"
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
        />

        <input className="inp"
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="Enter your password"
        />
        <br />
        <input className="btn" type="submit" value="LOG IN" />
      </form>
      <div className="footer">
        Having trouble Please contact help@unacademy.com for further support.
      </div>
    </div>
    </div>
  );
};
