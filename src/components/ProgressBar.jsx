const ProgressBar = props => {
  const updateProgress = updated => {
    if (updated >= 100) {
      props.setMastered(true);
      return props.setProgress(100);
    }

    return props.setProgress(updated);
  };

  return (
    <div
      className={`progress-bar progress-bar-${props.group}`}
      onClick={() => updateProgress(props.progress + 5)}
      style={{ "--width": props.progress }}
    ></div>
  );
};

export default ProgressBar;
