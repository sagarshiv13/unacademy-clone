import { Navbar } from "../NavBar/navbar";
import { Footer } from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";
import "../mayur/style/page2.css";
import { Page2Top } from "./style/page2top";
import {useNavigate} from "react-router-dom"

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const PageTwo = () => {
  const [visibility, setVisibility] = useState();
  const navigate= useNavigate()

  const headRef = useRef(null);
  const oneref = useRef(null);
  const tworef = useRef(null);
  const threeref = useRef(null);
  const fourref = useRef(null);
  const fiveref = useRef(null);
  const sixref = useRef(null);
  const sevenref = useRef(null);
  const eightref = useRef(null);
  const nineref = useRef(null);
  const tenref = useRef(null);
  const elevenref = useRef(null);
  const tewelref = useRef(null);
  const thirtenref = useRef(null);
  const fourtenref = useRef(null);
  const fiftenref = useRef(null);
  const sixtenref = useRef(null);
  const seventeenref = useRef(null);
  const eightenref = useRef(null);
  const nineteenref = useRef(null);
  const tweentyref = useRef(null);
  const twentyoneref = useRef(null);
  const twentytworef = useRef(null);
  const twentythreeref = useRef(null);
  const twentyfourref = useRef(null);
  const twentyfiveref = useRef(null);
  const twentysixref = useRef(null);
  const twentysevenref = useRef(null);
  const twentyeightref = useRef(null);
  const twentynineref = useRef(null);
  const thirtyref = useRef(null);
  const thirtoneref = useRef(null);

  const sectioRef = [
    { section: "1", ref: oneref },
    { section: "2", ref: tworef },
    { section: "3", ref: threeref },
    { section: "4", ref: fourref },
    { section: "5", ref: fiveref },
    { section: "6", ref: sixref },
    { section: "7", ref: sevenref },
    { section: "8", ref: eightref },
    { section: "9", ref: nineref },
    { section: "10", ref: tenref },
    { section: "11", ref: elevenref },
    { section: "12", ref: tewelref },
    { section: "13", ref: thirtenref },
    { section: "14", ref: fourtenref },
    { section: "15", ref: fiftenref },
    { section: "16", ref: sixtenref },
    { section: "17", ref: seventeenref },
    { section: "18", ref: eightenref },
    { section: "19", ref: nineteenref },
    { section: "20", ref: tweentyref },
    { section: "21", ref: twentyoneref },
    { section: "22", ref: twentytworef },
    { section: "23", ref: twentythreeref },
    { section: "24", ref: twentyfourref },
    { section: "25", ref: twentyfiveref },
    { section: "26", ref: twentysixref },
    { section: "27", ref: twentysevenref },
    { section: "28", ref: twentyeightref },
    { section: "29", ref: twentynineref },
    { section: "30", ref: thirtyref },
    { section: "31", ref: thirtoneref },

    // {section:"18", ref:eightenref},
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headRef.current);
      const scrollPosition = window.scrollX + headerHeight;

      const selected = sectioRef.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== visibility) {
        setVisibility(selected.section);
      } else if (!selected && visibility) {
        setVisibility(undefined);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibility]);

  return (
    <div id="page2">
      <Navbar />
      <Page2Top />
      <div id="pagetwoCont">
        <div id="leftside">
          <div id="page2list" ref={headRef}>
            <ul>
              <li
              
                className="leftbar"
                className={`header_link ${
                  visibility === "oneref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(oneref.current);
                }}
              >
                Full Stack Development
              </li>

              <li
                 
                className="leftbar"
                className={`header_link ${
                  visibility === "tworef" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(tworef.current);
                }}
              >
                Campus Placement - IT Jobs
              </li>

              <li
                 
                className="leftbar"
                className={`header_link ${
                  visibility === "threeref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(threeref.current);
                }}
              >
                Programming for Students
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "fourref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(fourref.current);
                }}
              >
                UPSC CSE
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "fiveref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(fiveref.current);
                }}
              >
                Govt Exams
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "sixref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(sixref.current);
                }}
              >
                Defence Exams
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "sevenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(sevenref.current);
                }}
              >
                JEE and NEET Preparation
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "eightref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(eightref.current);
                }}
              >
                State PSC
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "nineref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(nineref.current);
                }}
              >
                NET Exams
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "tenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(tenref.current);
                }}
              >
                GATE, ESE and IIT-JAM
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "elevenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(elevenref.current);
                }}
              >
                NEET PG
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "tewelref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(tewelref.current);
                }}
              >
                Teaching Exams(TET){" "}
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "thirtenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(thirtenref.current);
                }}
              >
                CAT & Other MBA Entrance Tests{" "}
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "thirtenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(thirtenref.current);
                }}
              >
                CA{" "}
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "fourtenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(fourtenref.current);
                }}
              >
                State CET{" "}
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "fiftenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(fiftenref.current);
                }}
              >
                CLAT & Other Law Entrance Exams{" "}
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "seventeenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(seventeenref.current);
                }}
              >
                Judiciary Exams
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "eightenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(eightenref.current);
                }}
              >
                CS
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "nineteenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(nineteenref.current);
                }}
              >
                Foreign Studies
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "tweentyref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(tweentyref.current);
                }}
              >
                IPMAT/BBA and Hotel Management
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentyoneref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentyoneref.current);
                }}
              >
                IITJEE/NEET Foundation & NTSE
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentytworef" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentytworef.current);
                }}
              >
                CMA
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentythreeref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentythreeref.current);
                }}
              >
                CUCET
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentyfourref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentyfourref.current);
                }}
              >
                CBSE
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentyfiveref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentyfiveref.current);
                }}
              >
                Maharashtra State Board
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentysixref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentysixref.current);
                }}
              >
                ICSE
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentysevenref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentysevenref.current);
                }}
              >
                Tamil Nadu Board
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentyeightref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentyeightref.current);
                }}
              >
                JEE and NEET Preparation
              </li>

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "twentynineref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(twentynineref.current);
                }}
              >
                IITJEE/NEET Foundation & NTSE
              </li>
              {/* <li className="leftbar"> <a href="#30">INTERNATIONAL</a></li> */}

              <li
                className="leftbar"
                className={`header_link ${
                  visibility === "thirtyref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(thirtyref.current);
                }}
              >
                USMLE
              </li>

              <li
                className="leftbar"
                typeof="button"
                className={`header_link ${
                  visibility === "thirtoneref" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(thirtoneref.current);
                }}
              >
                NCLEX®
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------end of left side-------------------------------------------------------------------------- */}

        <div id="rightside">
          {/* -----------------------------------------------Full Stack Development-------------------------------------------------- 1*/}
          <p id="1" className="section" ref={oneref} className="pcorse">
            Full Stack Development
          </p>
          <div className="crosetabss">
            <div
            onClick={()=>{
              navigate("/fullStack")
            }}
            
            className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">Full Stack Development</h5>
              </div>
            </div>
          </div>

          {/* 19 ---------------------------------------------Campus Placement - IT Jobs--------------------------------------------------  1*/}
          <p id="2" ref={tworef} className="pcorse">
            {" "}
            Campus Placement - IT Jobs
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div
              onClick={()=>{
                navigate("/campus")
              }}
              
              >
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/LEARNCP/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Campus Placement- IT Jobs</h5>
              </div>
            </div>
          </div>

          {/* 20 ---------------------------------------------Programming for Students-------------------------------------------------  1*/}
          <p id="3" ref={threeref} className="pcorse">
            {" "}
            Programming for Students
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div
               onClick={()=>{
                navigate("/programming")
              }}
              
              
              
              >
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">Programming for Students</h5>
              </div>
            </div>
          </div>
          {/* -----------------------------------------------UPSC CSE-------------------------------------------------- ----------------2*/}
          <p id="4" ref={fourref} className="pcorse">
            UPSC CSE
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">UPSC CSE - Optional</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/KSCGY/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">UPSC CSE - Optional</h5>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------Govt Exams--------------------------------------------------  4*/}
          <p id="5" ref={fiveref} className="pcorse">
            Govt Exams
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/RTPSX/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Bank Exams</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/QJEJG/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Railway Exams</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/KSCGY/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Bank Regulatory Body Exams</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/VLEMN/icon/origin_nYdCk3H.png"
                  alt=""
                />
                <h5 className="corsetitle">SSC Exams (Non Technical)</h5>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------Defence Exams--------------------------------------------------  4*/}
          <p id="6" ref={sixref} className="pcorse">
            Defence Exams
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/TUNWK/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CDS/AFCAT/CAPF</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/QJEJG/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Services Selection Board (SSB)</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/KSCGY/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Airforce/Navy/Coast Guard</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/DANNJ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">NDA</h5>
              </div>
            </div>
          </div>

          {/* 4 -----------------------------------------------JEE and NEET Preparation--------------------------------------------------  2*/}
          <p id="7" ref={sevenref} className="pcorse">
            JEE and NEET Preparation
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/TMUVD/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">IIT JEE</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/YOTUH/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">NEET UG</h5>
              </div>
            </div>
          </div>

          {/* 5-----------------------------------------------State PSC--------------------------------------------------  32*/}
          <p id="8" ref={eightref} className="pcorse">
            State PSC
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/QOIVT/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">BPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/AELON/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CGPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/UQCMN/icon/origin_aSPvTL4.png"
                  alt=""
                />
                <h5 className="corsetitle">WBPSC</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GNFFE/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">MPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/ZISFF/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">TNPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/ZIUBD/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Kerala PSC</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/RJVOD/icon/origin_ICSOdMb.png"
                  alt=""
                />
                <h5 className="corsetitle">GPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XTKHH/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">OPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/AELON/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle"> JPSC</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/LVECA/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Karnataka PSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XCTVJ/icon/origin_eigNPeT.png"
                  alt=""
                />
                <h5 className="corsetitle">UPPSC & UPSSSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GWDPV/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle"> MPPSC & VYAPAM</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/LVECA/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Karnataka PSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XCTVJ/icon/origin_eigNPeT.png"
                  alt=""
                />
                <h5 className="corsetitle">UPPSC & UPSSSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GWDPV/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle"> MPPSC & VYAPAM</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/QKHZF/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">APPSC & TSPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/SCANJ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">RPSC</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Maharashtra Bharti Exams</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> RPSC Grade I Teacher</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> UPSSSC VDO</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> RPSC Grade II Teacher</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Maharashtra Group C Services</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Gujarat Class 3 Exams</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Karnataka Teaching Exams</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> WBP & Gen Combined Exams </h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Kerala Administrative Services </h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">Odisha Teaching Exams </h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Maharashtra Technical Services</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> TNPSC Group 4 and VAO</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">SSC Exams Kannada </h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> MP Patwar</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> MP SI</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">UPSSSC Lekhpal</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle"> Bihar Police Exams</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">WB SSC & Railways</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">Rajasthan REET</h5>
              </div>
            </div>
          </div>

          {/* 6 -----------------------------------------------NET Exams--------------------------------------------------  2*/}
          <p id="9" ref={nineref} className="pcorse">
            NET Exams Preparation
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/BIZXQ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CSIR-UGC NET</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/TEWDQ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">NTA-UGC-NET & SET Exams</h5>
              </div>
            </div>
          </div>

          {/* 7 -----------------------------------------------GATE, ESE and IIT-JAM--------------------------------------------------  3*/}
          <p id="10" ref={tenref} className="pcorse">
            GATE, ESE and IIT-JAM
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/SIFWL/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle"> IIT-JAM</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/PESHE/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">GATE & ESE </h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">SSC JE & State AE Exams</h5>
              </div>
            </div>
          </div>

          {/* 8 -----------------------------------------------NEET PG--------------------------------------------------  1*/}
          <p id="11" ref={elevenref} className="pcorse">
            NEET PG
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/SDDOC/icon/origin_LfksOR5.png"
                  alt=""
                />
                <h5 className="corsetitle"> NEET PG</h5>
              </div>
            </div>
          </div>

          {/* 8 -----------------------------------------------Teaching Exams (TET)--------------------------------------------------  2*/}
          <p id="12" ref={tewelref} className="pcorse">
            Teaching Exams (TET)
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">DSSSB/KVS/SuperTET/NVS/APS</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GMXMZ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CTET & State TETs</h5>
              </div>
            </div>
          </div>
          {/* 9 -----------------------------------------------CAT & Other MBA Entrance Tests--------------------------------------------------  3*/}
          <p id="13" ref={thirtenref} className="pcorse">
            CAT & Other MBA Entrance Tests
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XNDUS/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CAT & Other MBA Entrance Tests</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">GD, PI & WAT for CAT & OMETs</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GMXMZ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">MAH MBA CET</h5>
              </div>
            </div>
          </div>

          {/* 10 -----------------------------------------------CA--------------------------------------------------  4*/}
          <p id="14" ref={fourtenref} className="pcorse">
            CA
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XNDUS/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CA Final Group 2</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">CA Final Group 1</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GMXMZ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CA Intermediate</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/BBKWG/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CA Foundation</h5>
              </div>
            </div>
          </div>

          {/* 11 -----------------------------------------------State CET--------------------------------------------------  4*/}
          <p id="15" ref={fiftenref} className="pcorse">
            State CET
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XNDUS/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">MHT CET</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">TS EAMCET & AP EAMCET</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GMXMZ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Karnataka CET</h5>
              </div>
            </div>
          </div>

          {/* 12 ----------------------------------------------CLAT & Other Law Entrance Exams--------------------------------------------------  1*/}
          <p id="16" ref={sixtenref} className="pcorse">
            CLAT & Other Law Entrance Exams
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/MRZFY/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CLAT & Other 5-year LLB Exams</h5>
              </div>
            </div>
          </div>

          {/* 13 ----------------------------------------------Judiciary Exams--------------------------------------------------  1*/}
          <p id="17" ref={seventeenref} className="pcorse">
            Judiciary Exams
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/CKTCQ/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Judiciary - PCS (J)</h5>
              </div>
            </div>
          </div>

          {/* 14 ----------------------------------------------CS--------------------------------------------------  1*/}
          <p id="18" ref={eightenref} className="pcorse">
            CS
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/MCRYW/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CSEET</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/MCRYW/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CS Executive - Module 1</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/MCRYW/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CS Executive - Module 2</h5>
              </div>
            </div>
          </div>

          {/* 15 ----------------------------------------------Foreign Studies--------------------------------------------------  2*/}
          <p id="19" ref={nineteenref} className="pcorse">
            Foreign Studies
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/DZVHL/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">IELTS</h5>
              </div>
            </div>

            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/DZVHL/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">SAT</h5>
              </div>
            </div>
          </div>

          {/* 16 ----------------------------------------------IPMAT/BBA and Hotel Management--------------------------------------------------  1*/}
          <p id="20" ref={tweentyref} className="pcorse">
            IPMAT/BBA and Hotel Management
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/XNDUS/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">IPMAT/BBA and Hotel Management</h5>
              </div>
            </div>
          </div>

          {/* 17 ----------------------------------------------IITJEE/NEET Foundation & NTSE--------------------------------------------------  1*/}
          <p id="21" ref={twentyoneref} className="pcorse">
            IITJEE/NEET Foundation & NTSE
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/TPSBK/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">IITJEE, NEET Foundation & NTSE</h5>
              </div>
            </div>
          </div>

          {/* 18 ---------------------------------------------CMA--------------------------------------------------  3*/}
          <p id="22" ref={twentytworef} className="pcorse">
            {" "}
            CMA
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">CMA Foundation</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">CMA Intermediate Group 1</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">CMA Intermediate Group 2</h5>
              </div>
            </div>
          </div>

          {/* 18 ---------------------------------------------CUCET--------------------------------------------------  1*/}
          <p id="23" ref={twentythreeref} className="pcorse">
            {" "}
            CUCET
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/test_default.png"
                  alt=""
                />
                <h5 className="corsetitle">CUCET</h5>
              </div>
            </div>
          </div>

          {/* 21 ---------------------------------------------CBSE--------------------------------------------------  9*/}
          <p id="24" ref={twentyfourref} className="pcorse">
            {" "}
            CBSE
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 6</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 7</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 8</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 9</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 10</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 11</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">CBSE Class 12</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Young Coders</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">Creative Corner</h5>
              </div>
            </div>
          </div>

          {/* 21 ---------------------------------------------Maharashtra State Board--------------------------------------------------  9*/}
          <p id="25" ref={twentyfiveref} className="pcorse">
            {" "}
            Maharashtra State Board
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">SSC Class 9</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">SSC Class 10</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">HSC Class 11 </h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">HSC Class 12</h5>
              </div>
            </div>
          </div>

          {/* 22 ---------------------------------------------ICSE--------------------------------------------------  9*/}
          <p id="26" ref={twentysixref} className="pcorse">
            {" "}
            ICSE
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">ICSE Class 9</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">ICSE Class 10</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">ISC Class 11 </h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">ISC Class 12</h5>
              </div>
            </div>
          </div>

          {/* 23 ---------------------------------------------Tamil Nadu Board--------------------------------------------------  9*/}
          <p id="27" ref={twentysevenref} className="pcorse">
            {" "}
            Tamil Nadu Board
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">TN Board Class 9</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">TN Board 10</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">TN Board 11 </h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/GSZGO/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">TN Board 12</h5>
              </div>
            </div>
          </div>

          {/* 24 -----------------------------------------------JEE and NEET Preparation--------------------------------------------------  2*/}
          <p id="28" ref={twentyeightref} className="pcorse">
            JEE and NEET Preparation
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/TMUVD/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">IIT JEE</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/YOTUH/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">NEET UG</h5>
              </div>
            </div>
          </div>

          {/* 25 ----------------------------------------------IITJEE/NEET Foundation & NTSE--------------------------------------------------  1*/}
          <p id="29" ref={twentynineref} className="pcorse">
            IITJEE/NEET Foundation & NTSE
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/TPSBK/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">IITJEE, NEET Foundation & NTSE</h5>
              </div>
            </div>
          </div>

          {/* 26 ---------------------------------------------USMLE--------------------------------------------------  9*/}
          <p id="30" ref={thirtyref} className="pcorse">
            {" "}
            USMLE
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/topology/IWFRC/icon/origin.png"
                  alt=""
                />
                <h5 className="corsetitle">USMLE 1</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/production/_next/static/images/gtp/USMLE%202.svg?q=75&w=96"
                  alt=""
                />
                <h5 className="corsetitle">USMLE 2</h5>
              </div>
            </div>
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/production/_next/static/images/gtp/USMLE%203.svg?q=75&w=96"
                  alt=""
                />
                <h5 className="corsetitle">USMLE 3 </h5>
              </div>
            </div>
          </div>
          {/* 27 ----------------------------------------------NCLEX®--------------------------------------------------  1*/}
          <p id="31" ref={thirtoneref} className="pcorse">
            NCLEX®
          </p>
          <div className="crosetabss">
            <div className="corsetab">
              <div>
                <img
                  className="corseimg"
                  src="https://static.uacdn.net/production/_next/static/images/gtp/NSLEX%20RN.svg?q=75&w=96"
                  alt=""
                />
                <h5 className="corsetitle">IITJEE, NEET Foundation & NTSE</h5>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================end of rightsid---------------------------------------------------- */}
      </div>

      <Footer />
    </div>
  );
};
//
