import React from 'react';
import { clearForm, showAlert, hideAlert, startPractice } from '../actions';
import { connect } from 'react-redux';
import './ButtonBar.css';

const SubmitButton  = (props) => {

  const handleStartClick = () => {
    if(!props.group) {
      props.showAlert();
    } else {
      props.startPractice(props.group, props.table);
    }
  }

  const handleResetClick = () => {
    props.clearForm();
    props.hideAlert();
  }

  return(
    <div className='button-container'>
      <button onClick={ handleStartClick } className='submit-button'>START</button>
      <button onClick={ handleResetClick } className='reset-button'>RESET</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { group: state.group, table: state.table };
}


export default connect(mapStateToProps, { clearForm, showAlert, hideAlert, startPractice })(SubmitButton);