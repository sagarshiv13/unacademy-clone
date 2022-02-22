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
        <div className="col-6 top-btn-div">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <button className="top-btn">
              <span>
                {" "}
                <img
                  src="https://static.uacdn.net/production/_next/static/images/winter-logo.svg?q=75&w=48"
                  alt=""
                />
              </span>
              <span className="top-btn-text">Experience our 2021 recap</span>
              <span>▶</span>
            </button>
          </a>
          <h1 className="top-heading-text">
            Learn Full Stack Development To Get Placed in Top Product Companies{" "}
          </h1>
          <h3>
            Get Access to Live and Interactive Classes by India’s Top Developers
          </h3>
          <button
            type="button"
            aria-label="Get subscription"
            color="green"
            class=" eiav8li7 css-1cd5uh1-StyledButton-SubButton es6r9411"
            data-analytics="goal-getSubscription"
          >
            Get subscription
          </button>
        </div>
        <div className="col-3">
          <img className="girl-img" src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};
