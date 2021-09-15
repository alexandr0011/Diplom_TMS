import PropTypes from 'prop-types';

export const RemoveTaskNotification = ({ name }) => {
  return (
    <div>
      Remove <strong>{name}</strong> task
    </div>
  );
};

RemoveTaskNotification.propTypes = {
  name: PropTypes.string.isRequired,
};
