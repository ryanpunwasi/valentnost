import { apiGrouptoState } from "./apiGroupToState";

export const buildElementsFromGroup = (group, table) => {
  let elements = [];
  table.forEach(element => {
    if(element.name === 'Lawrencium') {
      if(group === 'actinides') {
        elements.push({ name: element.name, number: element.atomicNumber, symbol: element.symbol });
      }
    } else if(element.name === 'Tennessine') {
        if(group === 'halogens') {
          elements.push({ name: element.name, number: element.atomicNumber, symbol: element.symbol });
        }
      } else if(element.groupBlock === 'metal' && group === 'post-transition-metals') {
          elements.push({ name: element.name, number: element.atomicNumber, symbol: element.symbol });
        } else if(element.groupBlock === apiGrouptoState(group)) {
              elements.push({ name: element.name, number: element.atomicNumber, symbol: element.symbol });
      }
  });
  return elements;
}