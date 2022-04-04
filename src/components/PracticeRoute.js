import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearForm, hideAlert, endPractice, checkAnswer, nextQuestion } from '../actions';
import './PracticeRoute.css';

import Banner from './Banner';

const PracticeRoute = (props) => {

  const [text, setText] = useState('');
  const inputEl = useRef(null);

  const resetText = () => {
    setText('');
  }

  useEffect(() => {
    inputEl.current.focus();
  });

  const handleChange = () => {
    setText(inputEl.current.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(text.trim() && !(props.practice.hasAnswered)) {
      if(text.toLowerCase().trim() === props.practice.currentElement.name.toLowerCase()) {
        props.checkAnswer(true, props.practice.currentElement);
      } else {
        props.checkAnswer(false, props.practice.currentElement);
      }
      
    } else if(text && props.practice.hasAnswered){
      setText('');
      inputEl.current.value = '';
      props.nextQuestion(props.practice.answeredCorrect, props.practice.currentElement);
    }
  }

  const handleClick = () => {
    props.clearForm();
    props.hideAlert();
    props.endPractice();
  }

  const renderScore = () => {
    if(props.practice.answered > 0) {
      return Math.round((props.practice.correct / props.practice.answered) * 100);
    } else {
      return 0;
    }
  }

  return(
    <div className='practice-route-container'>
      <div className='info-bar'>
        <Link to='/'><button onClick={handleClick} className='exit-button'>END SESSION</button></Link>
        <div className={`score-card score-card-${props.group}`}>
          <div>{renderScore()}</div>
        </div>
      </div>
      <div className='centered-practice-container'>
        <div className='practice-element-container'>
          <div className={`practice-element practice-element-${props.group}`}>
            <div className={`practice-element-symbol practice-element-symbol-${props.group}`}>{props.practice.currentElement.symbol}</div>
          </div>
        </div>
        <div className={`text-input-container`}>
            <form id='form' onSubmit={onFormSubmit} autoComplete='off'>
              <input ref={inputEl} id='elementTextBox' onChange={handleChange} name='element' className={`text-input text-input-${props.group}`} type='text' value={text} maxLength='20' placeholder='Element Name'/>
            </form> 
        </div>
      </div>
      <Banner input={text} resetText={resetText}/>
    </div>
  );
}

const mapStateToProps = state => {
  return { table: state.stable, group: state.group, practice: state.practice };
}

export default connect(mapStateToProps, { clearForm, hideAlert, endPractice, checkAnswer, nextQuestion })(PracticeRoute);