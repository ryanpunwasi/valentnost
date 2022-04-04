import React from 'react';
import { connect  } from 'react-redux';
import './Select.css';

const Select = (props) => {
  return(
    <div className='container' onChange={null}>
      <input readOnly checked={props.group.replace(/\s+/g, '-').toLowerCase() === props.groupBlock} className={`chemical-group-radio`} id={`${props.id}`} type='radio' name='chemicalgroup' value={props.group}/>
      <label className={`chemical-group-radio-container ${props.group.replace(/\s+/g, '-').toLowerCase()}`} htmlFor={`${props.id}`}>
        {props.group}
      </label>  
      
    </div>
    
  );
}

const mapStateToProps = state => {
  return { groupBlock: state.group }
}

export default connect(mapStateToProps)(Select);