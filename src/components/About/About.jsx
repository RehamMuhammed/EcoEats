import React from "react";
import "./About.css";
import img from "../../images/charityy.png";
import img2 from "../../images/someoneee.png";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div id="HR">
      <div className="charitydon-container">
        <Link to="/charities" className="hrr">
          <div className="textt2">
            <div className="imgg">
              <img src={img} />
            </div>
            <div className="texxtonly">
              <h1 className="text1">
                Donation Through Charity
              </h1>
              <br></br>
              <p className="text2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                architecto quisquam delectus minima perferendis nulla quia nisi
                laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
                molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
                laboriosam temporibus delectus, aut a? Quasi?
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="someonedon-container">
        <div className="textt22">
          <Link to="/donation-form" className="hrr">
            <div className="textonly">
              <h1 className="text11">
                Donation Through Someone You Know
              </h1>
              <br></br>
              <p className="text22">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                architecto quisquam delectus minima perferendis nulla quia nisi
                laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
                molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
                laboriosam temporibus delectus, aut a? Quasi?
              </p>
            </div>
            <div className="imgg2">
              <img src={img2} />
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};



export default About;