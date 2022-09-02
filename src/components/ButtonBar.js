import React from "react";
import { useState, useEffect } from "react";
import {
  clearForm,
  showAlert,
  hideAlert,
  startPractice,
  changeMode,
} from "../actions";
import { connect } from "react-redux";
import "./ButtonBar.css";

const SubmitButton = props => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (props.table) {
      setDisabled(false);
    }
  }, [props.table]);

  const handleStartClick = () => {
    if (disabled) {
      return;
    } else if (!props.group) {
      return props.showAlert();
    }
    return props.startPractice(props.group, props.table);
  };

  const handleResetClick = () => {
    props.clearForm();
    props.hideAlert();
    props.changeMode("name");
  };

  const renderStartButtonClass = disabled => {
    const buttonClass = disabled ? "disabled-button" : "submit-button";
    return buttonClass;
  };

  return (
    <div className="button-container">
      <button
        onClick={handleStartClick}
        className={`form-button ${renderStartButtonClass(disabled)}`}
      >
        START
      </button>
      <button onClick={handleResetClick} className="form-button reset-button">
        RESET
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { group: state.group, table: state.table };
};

export default connect(mapStateToProps, {
  clearForm,
  showAlert,
  hideAlert,
  startPractice,
  changeMode,
})(SubmitButton);
