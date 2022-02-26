import unacademy from "../../Icons/unacademy.svg";
// import downarrow from '../../Icons/downarrow.svg'
// import search from '../../Images/search.png'
// import { Hompage } from '../HomePage/HomePage'
import "./navbar.Style.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../ContextApi/UserContextApi";
import { useContext } from "react";
export const Navbar = () => {
  const navigate = useNavigate();
  const { login, statusHandler } = useContext(UserContext);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
    alert("Logout");
  };

  let keyName = localStorage.getItem("userName");
  keyName = JSON.parse(keyName);

  return (
    <>
      <div className="navbar_container">
        <div className="navbar_container_img">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={unacademy}
            alt="img"
          />
          <div className="nvbr_vertical_line"></div>
          {/* <button className="navbar_btn">CBSE Class 12
                        <img src={downarrow} alt="img" width={30} />
                    </button> */}
        </div>
        <div>
          {/* <img src={search} width={300} alt="img" /> */}

          <Link to={login ? "/" : "/login"}>
            <button
              onClick={() => {
                if (login) {
                  statusHandler(false);
                  alert("Logout Successfully");
                }
              }}
              className="nvbr_user_nm"
            >
              {login ? "LOGOUT" : "LOGIN"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
