import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
export const LogIn = () => {
  const navigate = useNavigate();
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
        found = true;
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
    <div className="container">
      <h1 className="cros" onClick={goBack}>
        X
      </h1>
      <div className="main">
        <h2>Log in </h2>
        <h5>
          <Link className="green" to="/signUp">
            or create your account
          </Link>
        </h5>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
        />

        <input
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
  );
};
