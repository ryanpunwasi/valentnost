const ProgressBar = props => {
  const updateProgress = updated => {
    if (updated >= 100) {
      props.setMastered(true);
      return props.setProgress(100);
    }

    return props.setProgress(updated);
  };

  const renderProgress = progress => {
    let rendered = progress === "MASTERED" ? progress : progress + "%";
    return rendered;
  };

  return (
    <div
      className={`progress-bar progress-bar-${props.group}`}
      onClick={() => updateProgress(props.progress + 5)}
      data-progress={props.progress}
    >
      <span>{renderProgress(props.progress)}</span>
    </div>
  );
};

export default ProgressBar;
