import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import MasteryButton from "./MasteryButton";
import { connect } from "react-redux";
import { hideAlert, clearForm, endPractice } from "../actions";

import "./Progress.css";

const Progress = props => {
  const [mastered, setMastered] = useState(false);

  const renderProgress = progress => {
    let rendered =
      progress === 100 ? (
        <Link to="/mastered">
          <MasteryButton />
        </Link>
      ) : (
        progress + "%"
      );
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
        <div
          className={`progress-status progress-status-${props.group} saturate-medium`}
        >
          {renderProgress(props.practice.progress)}
        </div>
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
