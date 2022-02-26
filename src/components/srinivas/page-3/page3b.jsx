import { Link } from "react-router-dom";
import "./indexPage3.css";
export const Page3b = () => {
  return (
    <div id="container">
      {/* .....First Section.... */}
      <div className="first-box">
        <div className="first-box-item1">
          <img alt="" src={require("../images/boy.svg").default} />
        </div>
        <div className="first-box-item2">
          <div>
            <a href="/">
              <button className="first-box-item2-1-btn">
              <img src="https://static.uacdn.net/production/_next/static/images/winter-logo.svg?q=75&w=48" alt="" /> 
                <p>Experience our 2021 recap</p>
              </button>
            </a>
            <h1>
              Crack Programming for Students with India's largest learning
              platform
            </h1>
            <h3>
            Get Plus subscription and access unlimited live and recorded courses from India's best educators
            </h3>
            <Link to="/plans">
              <button className="first-box-item2-2-btn">
                Get subscription
              </button>
            </Link>
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
              Programming for Students subscription starts<br />
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
      <section className="third-section">
        <div>
          <div className="third-section-first-box flex">
            <div className="third-section-first-box-item1">
              <h1>The best way to prepare for Full Stack Development</h1>
            </div>
            <div className="third-section-first-box-item2">
              <video
                loop
                muted
                autoPlay
                playsInline
                className="css-fznx3g-Video eo1zmk14"
              >
                <source
                  data-src="https://static.uacdn.net/web-cms/schedule_055b9bfa23.webm"
                  type="video/webm"
                  src="https://static.uacdn.net/web-cms/schedule_055b9bfa23.webm"
                />
                <source
                  data-src="https://static.uacdn.net/web-cms/schedule_fe9ee5d4e7.mp4"
                  type="video/mp4"
                  src="https://static.uacdn.net/web-cms/schedule_fe9ee5d4e7.mp4"
                />
              </video>
              <h4>Schedule that works for you</h4>
              <p>
                Enroll in unlimited courses, get a personalised schedule and
                never miss a live class with our timely reminders
              </p>
              <video
                loop
                muted
                autoPlay
                playsInline
                className="css-fznx3g-Video eo1zmk14"
              >
                <source
                  data-src="https://static.uacdn.net/web-cms/language_d56e370f78.webm"
                  type="video/webm"
                  src="https://static.uacdn.net/web-cms/language_d56e370f78.webm"
                />
                <source
                  data-src="https://static.uacdn.net/web-cms/language_9bdb488c01.mp4"
                  type="video/mp4"
                  src="https://static.uacdn.net/web-cms/language_9bdb488c01.mp4"
                />
              </video>
              <h4>No Language barrier</h4>
              <p>
                Our educators teach in English, Hindi, Malayalam, Tamil and 12
                other languages, so language is never a barrier
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* .....Fourth Section... */}
      <section className="fourth-section">
        <div>
          <h1>Full Stack Development Subscription</h1>
          <div className="course-fee">
            <p>
              12 months <br /> ₹80,000 Total <br /> (Incl. of all taxes)
              <br />
              <button>Subscription</button>
            </p>
          </div>
          <h4>Have questions? Read our FAQs</h4>
        </div>
      </section>
      {/* .....Fifth Section... */}
      <section className="fifth-section">
        <div>
          <div className="fifth-section-first-box">
            <div className="fifth-section-first-box-item1">
              <div>
                <h1>Get the learning app</h1>
                <h4>
                  Download lessons and learn anytime, anywhere with the
                  Unacademy app
                </h4>
                <div className="block4">
                  <div className="block41">
                    <div className="block411">
                      Get the learning
                      <br /> app
                    </div>
                    <div className="block412">
                      Download lessons and learn anytime,
                      <br /> anywhere with the Unacademy app
                    </div>
                    <div className="block413">
                      <a href="https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526">
                        <img
                          src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920"
                          alt="playstore"
                        />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.unacademyapp&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26">
                        <img
                          src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920"
                          alt="playstore"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="block42">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640"
                      alt="mobile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
