import React from 'react';
import { connect } from 'react-redux';
import { checkAnswer, nextQuestion } from '../actions';
import './Banner.css';

const Banner = (props) => {

  const handleClickCheck = () => {

    let text = props.input;
    if (text.trim() && !(props.practice.hasAnswered)) {
      if (text.toLowerCase().trim() === props.practice.currentElement.name.toLowerCase()) {
        props.checkAnswer(true, props.practice.currentElement);
      } else {
        props.checkAnswer(false, props.practice.currentElement);
      }

    } else if (text && props.practice.hasAnswered) {
      props.resetText();
      props.nextQuestion(props.practice.answeredCorrect, props.practice.currentElement);
    }
  }

  if (!props.practice.hasAnswered) {
    return (
      <div className={`banner banner-${props.group}`}>
        <div className={`banner-text banner-${props.group}`}></div>
        <button onClick={handleClickCheck} className={`banner-button banner-${props.group}`}>CHECK</button>
      </div>
    );
  } else {
    if (props.practice.answeredCorrect) {
      return (
        <div className='banner banner-correct'>
          <div className='banner-text'>Awesome!</div>
          <button id='next' onClick={handleClickCheck} className='banner-button'><i className="fa-solid fa-angle-right"></i></button>
        </div>
      );
    } else {
      return (
        <div className='banner banner-incorrect'>
          <div className='banner-text'>The correct answer is {props.practice.currentElement.name}.</div>
          <button id='next' onClick={handleClickCheck} className='banner-button'><i className="fa-solid fa-angle-right"></i></button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { practice: state.practice, group: state.group };
}

export default connect(mapStateToProps, { checkAnswer, nextQuestion })(Banner);