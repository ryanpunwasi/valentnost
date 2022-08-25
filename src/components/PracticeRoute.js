import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  clearForm,
  hideAlert,
  endPractice,
  checkAnswer,
  updateProgress,
  nextQuestion,
} from "../actions";
import "./PracticeRoute.css";

import Banner from "./Banner";
import Progress from "./Progress";
import Seen from "./Seen";

const PracticeRoute = props => {
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  const resetText = () => {
    setText("");
  };

  useEffect(() => {
    inputEl.current.focus();
  });

  const handleChange = () => {
    setText(inputEl.current.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (text.trim() && !props.practice.hasAnswered) {
      if (
        text.toLowerCase().trim() ===
        props.practice.currentElement.name.toLowerCase()
      ) {
        props.checkAnswer(true, props.practice.currentElement);
      } else {
        props.checkAnswer(false, props.practice.currentElement);
      }
    } else if (text && props.practice.hasAnswered) {
      setText("");
      inputEl.current.value = "";
      props.nextQuestion(
        props.practice.answeredCorrect,
        props.practice.currentElement
      );
      props.updateProgress(props.practice);
    }
  };

  const handleClick = () => {
    props.clearForm();
    props.hideAlert();
    props.endPractice();
  };

  return (
    <div className="practice-route-container">
      <div>
        <Progress group={props.group} />
      </div>
      <div className="info-bar">
        <Link to="/">
          <button onClick={handleClick} className="exit-button">
            END SESSION
          </button>
        </Link>
        <Seen practice={props.practice} />
      </div>
      <div className="centered-practice-container">
        <div className="practice-element-container">
          <div className={`practice-element practice-element-${props.group}`}>
            <span
              className={`practice-element-number practice-element-symbol-${props.group}`}
            >
              {props.practice.currentElement.number}
            </span>
            <div
              className={`practice-element-symbol practice-element-symbol-${props.group}`}
            >
              {props.practice.currentElement.symbol}
            </div>
          </div>
        </div>
        <div className={`text-input-container`}>
          <form id="form" onSubmit={onFormSubmit} autoComplete="off">
            <input
              ref={inputEl}
              id="elementTextBox"
              onChange={handleChange}
              name="element"
              className={`text-input text-input-${props.group}`}
              type="text"
              value={text}
              maxLength="20"
              placeholder="Element Name"
            />
          </form>
        </div>
      </div>
      <Banner input={text} resetText={resetText} />
    </div>
  );
};

const mapStateToProps = state => {
  return { table: state.table, group: state.group, practice: state.practice };
};

export default connect(mapStateToProps, {
  clearForm,
  hideAlert,
  endPractice,
  checkAnswer,
  updateProgress,
  nextQuestion,
})(PracticeRoute);
