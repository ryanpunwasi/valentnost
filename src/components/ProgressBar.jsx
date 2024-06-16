const ProgressBar = props => {
  return (
    <div
      className={`progress-bar progress-bar-${props.group} saturate-medium`}
      style={{ "--width": props.progress }}
    ></div>
  );
};

export default ProgressBar;
