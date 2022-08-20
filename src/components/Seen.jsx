import React from "react";
import "./Seen.css";

const Seen = props => {
  const renderElementsSeen = practice => {
    const totalElements = practice.elements.length;
    const seenElements = practice.seen.length;
    return `${seenElements}/${totalElements} seen`;
  };

  return <div className="seen-card">{renderElementsSeen(props.practice)}</div>;
};

export default Seen;
