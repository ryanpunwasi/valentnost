import React from "react";
import "./Selected.css";
import { capitalize } from "../utils/capitalize";
import { apiGrouptoLabel } from "../utils/apiGroupToLabel";
import { apiGroupToClassName } from "../utils/apiGroupToClassName";
import { connect } from "react-redux";

const Selected = props => {
  if (!props.element) {
    return (
      <div className="selected-container">
        <div className="highlighted-element">
          <span>
            <i className="selected-placeholder fa-solid fa-flask"></i>
          </span>
        </div>
      </div>
    );
  } else {
    const renderState = standardState => {
      if (standardState === "" && props.element.atomicNumber === "118") {
        return "Gas";
      } else if (standardState === "") {
        return "Solid";
      }

      return standardState;
    };

    const renderGroup = element => {
      if (element === "Lawrencium") {
        return "Actinides";
      } else if (element === "Tennessine") {
        return "Halogens";
      }

      return apiGrouptoLabel(props.element.groupBlock);
    };
    return (
      <div className="selected-container">
        <div
          className={`highlighted-element highlight-${apiGroupToClassName(
            renderGroup(props.element.name)
          )}`}
        >
          <span className="selected-symbol">{props.element.symbol}</span>
          <span className="selected-name">{props.element.name}</span>
          <span className="selected-atomic-number">
            {props.element.atomicNumber}
          </span>
          <span className="selected-state">
            {capitalize(renderState(props.element.standardState))}
          </span>
          <span className="selected-group">
            {renderGroup(props.element.name)}
          </span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { element: state.element };
};

export default connect(mapStateToProps)(Selected);
