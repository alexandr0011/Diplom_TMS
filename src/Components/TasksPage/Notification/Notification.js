import './Notification.scss';
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import {useEffect} from "react";

export const Notification = ({name, onClose}) => {

    const listener = (event) => {
        if (event.code === 'Escape') {
            onClose(false)
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', listener);

        return () => {
            window.addEventListener('keydown', listener);
        }
    });


    return(
        ReactDom.createPortal((<div className='notificationWrapper'>
            <div>Remove {name} task</div>
            <div onClick={onClose}>X</div>
        </div>), document.body)

    )
};

Notification.propTypes = {
    name: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}