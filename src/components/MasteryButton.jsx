import "./MasteryButton.css";
import { connect } from "react-redux";

const MasteryButton = ({ group }) => {
  return (
    <button className={`mastery-button mastery-button-${group}`}>
      MASTERED
    </button>
  );
};

const mapStateToProps = state => {
  return { group: state.group };
};

export default connect(mapStateToProps)(MasteryButton);
