import React from 'react';
import { connect } from 'react-redux';

import { selectElement } from '../actions';
import './Element.css';

const Element = (props) => {

  const updateSelected = () => {
    props.selectElement(props.table[props.number - 1]);
  }

  const isActive = () => {
    if(props.groupBlock === props.group.replace(/\s+/g, '-').toLowerCase()) {
      return 'active';
    }

    return '';
  }
  return(
    <button key={props.key} onClick={updateSelected} className={`element-container ${props.group.replace(/\s+/g, '-').toLowerCase()}-label ${isActive()}`}>
      <span className='element-symbol'>{props.symbol}</span>
      <span className='element-name'>{props.name}</span>
      <span className='element-number'>{props.number}</span>
    </button>
  );
}

const mapStateToProps = state => {
  return { table: state.table, groupBlock: state.group }
}
export default connect(mapStateToProps, { selectElement })(Element);