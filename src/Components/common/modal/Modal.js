import './Modal.scss';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = (props) => {
  const listenerEscape = (event) => {
    if (event.code === 'Escape') {
      props.onModalClose(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', listenerEscape);

    return () => {
      window.addEventListener('keydown', listenerEscape);
    };
  }, []);

  return (
    <div className="addTaskModalBackdrop">
      <div className="addTaskModalWrapper">{props.children}</div>
    </div>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
