import loader from 'assets/img/loader.svg';
import './loader.scss';

export const Loader = () => {
  return (
    <div className="loaderBackDrop">
      <div className="loaderWrapper">
        <img src={loader} alt="#" />
      </div>
    </div>
  );
};
