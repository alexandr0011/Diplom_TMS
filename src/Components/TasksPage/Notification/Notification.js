import './Notification.scss';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { useEffect } from 'react';

export const Notification = (props) => {
  const onCloseHandler = () => {
    props.onClose();
  };

  const listener = (event) => {
    if (event.code === 'Escape') {
      props.onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', listener);

    return () => {
      window.addEventListener('keydown', listener);
    };
  });

  useEffect(() => {
    setTimeout(onCloseHandler, 3000);

    return () => {
      clearTimeout(onCloseHandler);
    };
  });

  return ReactDom.createPortal(
    <div className="notificationWrapper">
      {props.children}
      <div onClick={onCloseHandler}>X</div>
    </div>,
    document.body,
  );
};

Notification.propTypes = {
  onClose: PropTypes.func.isRequired,
};
