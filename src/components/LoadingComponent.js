import loadingIcon from '../assets/img/reload.png';

export default function LoadingComponent() {
  return (
    <div className="loading-container">
      <img src={loadingIcon} className="loading-logo" alt="" />
      <h2>Loading...</h2>
    </div>
  );
}
