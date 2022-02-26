import { useEffect, useState } from "react";
import { Popular } from "./popularedu";
import "./prod.css";

import { Productleft } from "./productleft";
export const Othercourses = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let request = await fetch(`https://uncademy-team-clone.herokuapp.com/FWD`, {
      method: "GET",
    });

    let response = await request.json();
    setDatas(response);
    console.log(response);
  };

  return (
    <div id="containerprod">
      <div id="details_pages1">
        {/* <Productleft/> */}

        <div className="details_page2">
          {datas.map((e, i) => {
            return (
              <div className="unkown" key={i}>
                <div className="tutuors">
                  <div className="tutorin1">
                    {e.toptut.map((el, j) => {
                      return (
                        <div key={j} className="tutorin1">
                          <div className="tutorin1img">
                            <img className="tutorimg" src={el.img} alt="" />
                          </div>
                          <div className="tutorin1details">
                            <div className="lang"> {el.desc} </div>

                            <div className="tutotr1_title">{el.tech}</div>
                            <div className="prof">{el.name}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Popular />
    </div>
  );
};
