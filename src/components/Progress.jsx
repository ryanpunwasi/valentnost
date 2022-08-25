import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { connect } from "react-redux";
import { hideAlert, clearForm, endPractice } from "../actions";

import "./Progress.css";

const Progress = props => {
  const [mastered, setMastered] = useState(false);

  const renderProgress = progress => {
    let rendered = progress === 100 ? "MASTERED" : progress + "%";
    return rendered;
  };

  return (
    <div className="progress">
      {
        <ProgressBar
          progress={props.practice.progress}
          setMastered={setMastered}
          group={props.group}
        />
      }
      {!mastered && (
        <div className={`progress-status progress-status-${props.group}`}>
          {renderProgress(props.practice.progress)}
        </div>
      )}
      {mastered && (
        <Link to="/">
          <div
            className={`progress-status progress-status-${props.group}`}
            onClick={() => {
              props.clearForm();
              props.hideAlert();
              props.endPractice();
            }}
          >
            Mastered!
          </div>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { table: state.table, group: state.group, practice: state.practice };
};

export default connect(mapStateToProps, {
  hideAlert,
  clearForm,
  endPractice,
})(Progress);
