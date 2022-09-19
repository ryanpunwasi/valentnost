import React from "react";
import "./MasteredRoute.css";
import { connect } from "react-redux";

const MasteredRoute = props => {
  return (
    <div className="mastered-page-container">
      <div id="atom">
        <div id="nucleus"></div>
        <div className="orbit">
          <div className="electron"></div>
        </div>
        <div className="orbit">
          <div className="electron"></div>
        </div>
      </div>
      <p>Congratulations, you've mastered ${props.practice}!</p>
      <button>Home</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { practice: state.practice };
};

export default connect(mapStateToProps)(MasteredRoute);
