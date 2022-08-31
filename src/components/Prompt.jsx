const Prompt = props => {
  return (
    <div className="practice-element-container">
      {props.mode === "name" && (
        <div className={`practice-element practice-element-${props.group}`}>
          <span
            className={`practice-element-number practice-element-symbol-${props.group}`}
          >
            {props.element.number}
          </span>
          <div
            className={`practice-element-symbol practice-element-symbol-${props.group}`}
          >
            {props.element.symbol}
          </div>
        </div>
      )}
      {props.mode === "symbol" && (
        <p
          className={`practice-element-symbol practice-element-symbol-${props.group}`}
        >
          {props.element.name}
        </p>
      )}
    </div>
  );
};

export default Prompt;
