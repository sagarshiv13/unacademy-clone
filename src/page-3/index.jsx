import "./index.css";
import boy from "../images/boy.svg";
import girl from "../images/girl.svg";

export const Page3 = () => {
  return (
    <div className="container-fluid main-box">
      <div className="row">
        <div className="col-3">
          <img className="boy-img" src={boy} alt="" />
        </div>
        <div className="col-6">
          <button>
            <img
              src="https://static.uacdn.net/production/_next/static/images/winter-logo.svg?q=75&w=48"
              alt=""
            />
            <p>Experience our 2021 recap</p>
          </button>
          <h1>
            Learn Full Stack Development To Get Placed in Top Product Companies{" "}
          </h1>
        </div>
        <div className="col-3">
          <img className="girl-img" src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};
