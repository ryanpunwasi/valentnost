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
import { capitalize } from "../utils/capitalize";

import Prompt from "./Prompt";
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
    if (props.mode === "name") {
      return setText(inputEl.current.value);
    }
    return setText(capitalize(inputEl.current.value));
  };

  const onFormSubmit = e => {
    const correctAnswer =
      props.mode === "name"
        ? props.practice.currentElement.name.toLowerCase()
        : props.practice.currentElement.symbol.toLowerCase();
    e.preventDefault();
    if (text.trim() && !props.practice.hasAnswered) {
      if (text.toLowerCase().trim() === correctAnswer) {
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

  const endSession = () => {
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
          <button onClick={endSession} className="exit-button">
            END SESSION
          </button>
        </Link>
        <Seen practice={props.practice} />
      </div>
      <div className="centered-practice-container">
        <Prompt
          group={props.group}
          element={props.practice.currentElement}
          mode={props.mode}
        />
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
              maxLength={props.mode === "name" ? "20" : "2"}
              placeholder={props.mode === "name" ? "Name" : "Symbol"}
            />
          </form>
        </div>
      </div>
      <Banner input={text} resetText={resetText} />
    </div>
  );
};

const mapStateToProps = state => {
  const { table, group, practice, mode } = state;
  return {
    table,
    group,
    practice,
    mode,
  };
};

export default connect(mapStateToProps, {
  clearForm,
  hideAlert,
  endPractice,
  checkAnswer,
  updateProgress,
  nextQuestion,
})(PracticeRoute);
