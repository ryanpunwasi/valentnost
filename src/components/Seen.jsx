import React from "react";
import "./Seen.css";

const Seen = props => {
  const renderElementsSeen = practice => {
    return `${practice.seen.length}/${practice.elements.length} seen`;
  };

  return <div className="seen-card">{renderElementsSeen(props.practice)}</div>;
};

export default Seen;
