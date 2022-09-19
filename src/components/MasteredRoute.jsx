import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./MasteredRoute.css";

const MasteredRoute = props => {
  return (
    <div className="mastered-page-container">
      {props.practice && (
        <div className="mastered-container">
          <div id="atom">
            <div id="nucleus"></div>
            <div className="orbit">
              <div className="electron"></div>
            </div>
            <div className="orbit">
              <div className="electron"></div>
            </div>
            <div className="orbit">
              <div className="electron"></div>
            </div>
          </div>
          <p>
            Congratulations, you've mastered the
            <span className="capitalize"> {props.group}</span>!
          </p>
          <Link to="/">
            <button className="home-button">PRACTICE ANOTHER GROUP</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { practice: state.practice, group: state.group };
};

export default connect(mapStateToProps)(MasteredRoute);
