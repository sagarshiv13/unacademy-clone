import Hstyle from "./HomePage.module.css";
import { Navbar } from "../NavBar/navbar";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Page3a } from "../srinivas/page-3/page3a";

export const Hompage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={Hstyle.container}>
        <div className={Hstyle.HomePageOut}>
          <div className={Hstyle.div1}>
            <div className={Hstyle.div2}>
              <p className={Hstyle.Hedding}>
                India's largest Learning Platform
              </p>
              <div className={Hstyle.StartLearningbtn}>
                <Link to="/goal">
                  <button className={Hstyle.nvbr_user_nm}>
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={Hstyle.PopulaGoal}>
          <p className={Hstyle.popular}>Popular Goals</p>

          {/* <p>
            <a href="#" className={Hstyle.AnchorTag}>
              UPSC CSE - GS
            </a>
          </p> */}
          <p>
            <Link to="/fullStack" className={Hstyle.AnchorTag}>
              FULL STACK DEVELOPER
            </Link>
          </p>
          <p>
            <Link to="/programming" className={Hstyle.AnchorTag}>
              Programming for Students
            </Link>
          </p>
          <p>
            <Link to="/campus" className={Hstyle.AnchorTag}>
              Campus Placement - IT Jobs
            </Link>
          </p>
          {/* <p>
            <a href="#" className={Hstyle.AnchorTag}>
              GATE & ESE
            </a>
          </p>
          <p>
            <a href="#" className={Hstyle.AnchorTag}>
              IIT-JEE
            </a>
          </p> */}
        </div>
        <div className={Hstyle.cardDiv}>
          <div className={Hstyle.card}>
            <div className={Hstyle.cardimg}>
              <img
                src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=750"
                alt=""
              />
            </div>
            <p className={Hstyle.hedding3}>Daily Live Classes</p>
            <p className={Hstyle.ParaCard}>
              Chat with educators, ask questions, answer live polls, and get
              your doubts cleared - all while the class is going on
            </p>
          </div>
          <div className={Hstyle.card}>
            <div className={Hstyle.cardimg}>
              <img
                src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&w=750"
                alt=""
              />
            </div>
            <p className={Hstyle.hedding3}>Practice and revise</p>
            <p className={Hstyle.ParaCard}>
              Learning isn't just limited to classes with our practice section,
              mock tests and lecture notes shared as PDFs for your revision
            </p>
          </div>
          <div className={Hstyle.card}>
            <div className={Hstyle.cardimg}>
              <img
                src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&w=750"
                alt=""
              />
            </div>
            <p className={Hstyle.hedding3}>Learn anytime, anywhere</p>
            <p className={Hstyle.ParaCard}>
              One subscription gets you access to all our live and recorded
              classes to watch from the comfort of any of your devices
            </p>
          </div>
        </div>
        <div className={Hstyle.flex2}>
          <div className={Hstyle.flix2part1}>
            <div className={Hstyle.flix2part1Of1}>
              <p className={Hstyle.heddingForApp}>Get The Learning App</p>
              <p className={Hstyle.paraForApp}>
                Download lessons and learn anytime, anywhere with the Unacademy
                app
              </p>
              <div className={Hstyle.AppBox}>
                <div className={Hstyle.AppBoximg}>
                  <a href="https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920"
                      alt=""
                    />
                  </a>
                </div>
                <div className={Hstyle.AppBoximg}>
                  <a href="https://play.google.com/store/apps/details?id=com.unacademyapp&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={Hstyle.flix2part2}>
            <img
              src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=1080"
              alt=""
            />
          </div>
        </div>
        <div className={Hstyle.flex21}>
          <div className={Hstyle.flix2Box2}>
            <div className={Hstyle.flix2part1Of1}>
              <p className={Hstyle.heddingForApp}>
                Start learning with Unacademy
              </p>
              <p className={Hstyle.paraForApp}>
                Get unlimited access to structured courses & doubt clearing
                sessions
              </p>
              <div>
                <Link to="/goal">
                  <button className={Hstyle.nvbr_user_nm}>
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={Hstyle.flix2Box2}>
            <img
              src="https://lh3.googleusercontent.com/pw/AM-JKLXIhN3waF9X6CsJXh4RouwNrg6G7VEE_t5Rv38Uw22M35ULzpzqmG_zXqDyABx6mAIChSKAXboDZ90ycBOaqa_yXaCU6n-L73LC3h6G3YsjjEOYr6iUW0xqFN9M4hi_Sf-THu4iFpYS6orRSywto3vm=w757-h762-no?authuser=0"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
