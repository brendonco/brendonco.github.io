import PropTypes from 'prop-types';

import Canvas from './Canvas';

const ProgressBar = ({ completed, bgcolor }) => (
    <Canvas completed={completed} bgColor={bgcolor} innerWidth="250" innerHeight="250" />
);

ProgressBar.propTypes = {
    completed: PropTypes.number.isRequired,
    bgcolor: PropTypes.string.isRequired
};

export default ProgressBar;
