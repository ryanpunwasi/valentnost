import React from "react";
import { connect } from "react-redux";
import { hideAlert } from "../actions";
import "./Alert.css";

const Alert = ({ alert, message, hideAlert }) => {
  return (
    <div className={`alert-container ${alert}`}>
      <div className="alert-message">{message}</div>
      <span onClick={hideAlert} className="alert-close-icon">
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return { alert: state.alert };
};

export default connect(mapStateToProps, { hideAlert })(Alert);
