import { useState } from "react";
import ProgressBar from "./ProgressBar";

import "./Progress.css";

const Progress = props => {
  const [mastered, setMastered] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="progress">
      {!mastered && (
        <ProgressBar
          progress={progress}
          setProgress={setProgress}
          setMastered={setMastered}
          group={props.group}
        />
      )}
      {mastered && <ProgressBar progress="MASTERED" group={props.group} />}
    </div>
  );
};

export default Progress;
