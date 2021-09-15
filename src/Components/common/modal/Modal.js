import './Modal.scss';

export const Modal = (props) => {
  return (
    <div className="addTaskModalBackdrop">
      <div className="addTaskModalWrapper">{props.children}</div>
    </div>
  );
};
