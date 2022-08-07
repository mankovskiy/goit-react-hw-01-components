import PropTypes from 'prop-types';

export function Statistics({ label, percentage }) {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
