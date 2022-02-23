import "./index.css";
export const Page3 = () => {
  return (
    <div className="container">
      {/* .....First Section.... */}
      <div className="first-box">
        <div className="first-box-item1">
          <img alt="" src={require("../images/boy.svg").default} />
        </div>
        <div className="first-box-item2">
          <div>
            <a href="/">
              <button className="first-box-item2-1-btn">
                <p>Experience our 2021 recap</p>
              </button>
            </a>
            <h1>
              Learn Full Stack Development To Get Placed in Top Product
              Companies{" "}
            </h1>
            <h3>
              Get Access to Live and Interactive Classes by India’s Top
              Developers
            </h3>
            <a href="/">
              <button className="first-box-item2-2-btn">
                Get subscription
              </button>
            </a>
          </div>
        </div>
        <div className="first-box-item3">
          <img alt="" src={require("../images/girl.svg").default} />
        </div>
      </div>
      {/* .....Secons section...... */}
      <div className="second-section">
        <div>
          <h2>What you'll get</h2>
          <div className="second-section-card">
            <div className="second-section-card-item1 flex">
              <div>
                <img
                  src="https://static.uacdn.net/web-cms/benefitchat_1b0a84e281.svg?q=75&w=256&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <h3>Daily Live Classes</h3>
                <h5>
                  Chat with your educator, engage in discussions, ask your
                  doubts, and answer polls - all while the class is going on
                </h5>
              </div>
            </div>
            <div className="second-section-card-item2 flex">
              <div>
                <img
                  src="	https://static.uacdn.net/web-cms/benefitcourses_cceb8214b5.svg?q=75&w=256&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <h3>Capstone Project</h3>
                <h5>
                  Acquire hands-on Full Stack Development experience and get
                  certified with the help of industry-grade guided projects
                  wherein you develop the product from scratch
                </h5>
              </div>
            </div>
            <div className="second-section-card-item3 flex">
              <div>
                <img
                  src="	https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg?q=75&w=256&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <h3>Practice Platform</h3>
                <h5>
                  Enhance your skills with handpicked problems & assignments
                  curated by industry experts from top companies like Google,
                  Linkedin, and Microsoft
                </h5>
              </div>
            </div>
            <div className="second-section-card-item4 flex">
              <div>
                <img
                  src="	https://static.uacdn.net/web-cms/benefitaccess_9a0fb1469f.svg?q=75&w=256&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <h3>Post class doubt support</h3>
                <h5>
                  Get all your doubts resolved by our expert panel of web
                  developers and community members
                </h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="pricing">
            <div className="pricing-item1">
              <h3>
                Full Stack Development subscription starts <br />
                from <span>₹6,667/month</span>
              </h3>
            </div>
            <div className="pricing-item2">
              <a href="/">
                <h4>View Pricing</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* .....Third Section... */}
    </div>
  );
};
