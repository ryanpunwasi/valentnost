import './LoadingIcon.css';

const LoadingIcon = props => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>{ props.message }</p>
    </div>
  );
};

export default LoadingIcon;