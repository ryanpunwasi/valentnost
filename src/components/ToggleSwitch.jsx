import "./ToggleSwitch.css";
import { connect } from "react-redux";
import { changeMode } from "../actions";

const ToggleSwitch = props => {
  const handleChange = currentMode => {
    const mode = currentMode === "name" ? "symbol" : "name";
    props.changeMode(mode);
  };

  const renderChecked = currentMode => {
    const checked = currentMode === "name" ? false : true;
    return checked;
  };

  const renderNameSelectedClass = mode =>
    mode === "name" ? "name-selected" : "";

  const renderSymbolSelectedClass = mode =>
    mode === "symbol" ? "symbol-selected" : "";

  return (
    <div className="toggle-container">
      <p className={`toggle-text ${renderNameSelectedClass(props.mode)}`}>
        Name
      </p>
      <label className="toggle-switch-label">
        <input
          type="checkbox"
          onChange={() => handleChange(props.mode)}
          checked={renderChecked(props.mode)}
        />
        <span className="toggle-switch"></span>
      </label>
      <p className={`toggle-text ${renderSymbolSelectedClass(props.mode)}`}>
        Symbol
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { mode: state.mode };
};

export default connect(mapStateToProps, { changeMode })(ToggleSwitch);
