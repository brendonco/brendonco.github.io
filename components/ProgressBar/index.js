import PropTypes from 'prop-types';

import Canvas from './Canvas';

const ProgressBar = ({ completed, bgcolor, textcolor }) => (
    <Canvas
        completed={completed}
        bgColor={bgcolor}
        textColor={textcolor}
        innerWidth="250"
        innerHeight="250"
    />
);

ProgressBar.propTypes = {
    completed: PropTypes.number.isRequired,
    bgcolor: PropTypes.string.isRequired,
    textcolor: PropTypes.string.isRequired
};

export default ProgressBar;
