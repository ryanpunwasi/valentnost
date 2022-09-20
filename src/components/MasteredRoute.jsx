import React from "react";
import { connect } from "react-redux";
import { hideAlert, clearForm, endPractice } from "../actions";
import { Link } from "react-router-dom";

import "./MasteredRoute.css";

const MasteredRoute = props => {
  const endSession = () => {
    props.clearForm();
    props.hideAlert();
    props.endPractice();
  };

  const renderGroup = group => group.replaceAll("-", " ");

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
            <span className="capitalize"> {renderGroup(props.group)}</span>!
          </p>
          <Link to="/">
            <button onClick={endSession} className="home-button">
              PRACTICE ANOTHER GROUP
            </button>
          </Link>
        </div>
      )}
      {!props.practice && (
        <div className="mastered-container">
          <i className="fa-solid fa-circle-radiation"></i>
          <p>Whoops, there's nothing here!</p>
          <Link to="/">
            <button onClick={endSession} className="home-button">
              TAKE ME HOME
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { practice: state.practice, group: state.group };
};

export default connect(mapStateToProps, {
  clearForm,
  hideAlert,
  endPractice,
})(MasteredRoute);
