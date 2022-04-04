import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTable } from '../actions';
import { apiGrouptoLabel } from '../utils/apiGroupToLabel';
import { truncateElementName } from '../utils/truncateElementName';
import './Table.css';
import Element from './Element';
import Selected from './Selected';

const Table = (props) => {
  useEffect(() => {
    props.fetchTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTable = () => {
    const table_array = props.table;
    const table_parts = [];
    if(table_array) {
      const table1 = table_array.slice(0, 56).map(element => {
        switch(true) {
          case element.atomicNumber === '1':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={element.name} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='a'className='empty-row-1'></div>
                <div key='b' className='selected'><Selected /></div>
                <div key='c' className='empty-row-1-2'></div>
              </>
            );
          case element.atomicNumber === '4':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={element.name} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='d' className='empty-row-2'></div>
                <div key='e' className='empty-row-2-2'></div>
              </>
            );
            case element.atomicNumber === '12':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={element.name} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='f' className='empty-row-2'></div>
                <div key='g' className='empty-row-2-2'></div>
                
              </>
            );
            case element.atomicNumber === '56':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={element.name} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='h' className='empty-row-6'></div>
              </>
            );
          default:
            return (
              <Element 
                key={element.atomicNumber}
                symbol={element.symbol} 
                name={truncateElementName(element.name)} 
                number={element.atomicNumber} 
                group={apiGrouptoLabel(element.groupBlock)}>
              </Element>
              );
        }
      });

      const table2 = table_array.slice(71, 88).map(element => {
        switch(true) {
          case element.atomicNumber === '88':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={element.name} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='i' className='empty-row-6'></div>
              </>
            );
          default:
            return(
              <Element 
                key={element.atomicNumber}
                symbol={element.symbol} 
                name={element.name} 
                number={element.atomicNumber} 
                group={apiGrouptoLabel(element.groupBlock)}>
              </Element>
            );
        }
      });

      const table3 = table_array.slice(103, 118).map(element => {
        switch(true) {
          case element.atomicNumber === '117':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={element.name} 
                  number={element.atomicNumber} 
                  group='Halogens'>
                </Element>
              </>
            );
          case element.atomicNumber === '118':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={truncateElementName(element.name)} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='j' className='empty-row-8'></div>
                <div key='k' className='empty-row-7'></div>
              </>
            );
          default:
            return(
              <Element 
                key={element.atomicNumber}
                symbol={element.symbol} 
                name={truncateElementName(element.name)} 
                number={element.atomicNumber} 
                group={apiGrouptoLabel(element.groupBlock)}>
              </Element>
            );
        }
      });

      const table4 = table_array.slice(56, 71).map(element => {
        switch(true) {
          case element.atomicNumber === '71':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={truncateElementName(element.name)} 
                  number={element.atomicNumber} 
                  group={apiGrouptoLabel(element.groupBlock)}>
                </Element>
                <div key='l' className='empty-row-8'></div>
                <div key='m'></div>
                <div key='n'></div>
              </>
            );
          default:
            return(
              <Element 
                key={element.atomicNumber}
                symbol={element.symbol} 
                name={truncateElementName(element.name)} 
                number={element.atomicNumber} 
                group={apiGrouptoLabel(element.groupBlock)}>
              </Element>
            );
        }
      });

      const table5 = table_array.slice(88, 103).map(element => {
        switch(true) {
          case element.atomicNumber === '103':
            return(
              <>
                <Element 
                  key={element.atomicNumber}
                  symbol={element.symbol} 
                  name={truncateElementName(element.name)} 
                  number={element.atomicNumber} 
                  group='Actinides'>
                </Element>
                <div key='o' className='empty-row-8'></div>
              </>
            );
          default:
            return(
              <Element 
                key={element.atomicNumber}
                symbol={element.symbol} 
                name={truncateElementName(element.name)} 
                number={element.atomicNumber} 
                group={apiGrouptoLabel(element.groupBlock)}>
              </Element>
            );
        }
      });

      table_parts.push(table1, table2, table3, table4, table5);
      return table_parts;
    }
  }
  
  return(
    <div className='table-container'>
      <div className='table-grid'>
      {renderTable()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { table: state.table }
}

export default connect(mapStateToProps, { fetchTable })(Table);