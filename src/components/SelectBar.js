import React from 'react';
import { connect  } from 'react-redux';
import { selectChemicalGroup, hideAlert } from '../actions';
import './SelectBar.css';
import Select from './Select';

const SelectBar = (props) => {
  const renderSelectBar = () => {
    const chemical_groups = [
      'Nonmetals', 'Alkali Metals', 'Alkaline Earth Metals', 'Metalloids',
      'Halogens', 'Transition Metals', 'Post-Transition Metals', 'Noble Gases',
      'Lanthanides', 'Actinides'
    ];

    const renderedSelectBar = chemical_groups.map((group) => {
      return <Select key={group} group={group} id={group.toLowerCase()}/>
    });

    return renderedSelectBar;
  }

  const onChangeValue = event => {
    props.selectChemicalGroup(event.target.value.replace(/\s+/g, '-').toLowerCase());
    props.hideAlert();
  }
  
  return (
    <div className='select-bar-grid' onChange={onChangeValue}>
      {renderSelectBar()}
    </div>
  );
}

export default connect(null, { selectChemicalGroup, hideAlert })(SelectBar);