import "./ToggleSwitch.css";

const ToggleSwitch = props => {
  return (
    <div className="toggle-container">
      <p className="toggle-text">Name</p>
      <label class="toggle-switch-label">
        <input type="checkbox" />
        <span class="toggle-switch"></span>
      </label>
      <p className="toggle-text">Symbol</p>
    </div>
  );
};

export default ToggleSwitch;
