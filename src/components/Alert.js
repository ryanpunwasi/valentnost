import React from 'react';
import { connect } from 'react-redux';
import { hideAlert } from '../actions';
import './Alert.css';

const Alert = (props) => {

  return(
    <div className={`alert-container ${ props.alert }`}>
      <div className='alert-message'>{props.message}</div>
      <span onClick={props.hideAlert} className='alert-close-icon'><i className="fa-solid fa-xmark"></i></span>
    </div>
  );
}


const mapStateToProps = state => {
  return { alert: state.alert }
}

export default connect(mapStateToProps, { hideAlert })(Alert);