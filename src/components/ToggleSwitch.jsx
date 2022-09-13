import "./ToggleSwitch.css";
import { connect } from "react-redux";
import { changeMode } from "../actions";

const ToggleSwitch = props => {
  const handleChange = currentMode => {
    const mode = currentMode === "name" ? "symbol" : "name";
    props.changeMode(mode);
  };

  return (
    <div className="toggle-container">
      <p
        className={`toggle-text ${
          props.mode === "name" ? "name-selected" : ""
        }`}
      >
        Name
      </p>
      <label className="toggle-switch-label">
        <input
          type="checkbox"
          onChange={() => handleChange(props.mode)}
          checked={props.mode !== "name"}
        />
        <span className="toggle-switch"></span>
      </label>
      <p
        className={`toggle-text ${
          props.mode === "symbol" ? "symbol-selected" : ""
        }`}
      >
        Symbol
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { mode: state.mode };
};

export default connect(mapStateToProps, { changeMode })(ToggleSwitch);
