import PropTypes from 'prop-types';

const Switch = ({ onChange, theme }) => {
    return (
        <div className={theme === 'light' ? 'toggleWrapper' : 'toggleWrapperNight'}>
            <input type="checkbox" className="dn" id="dn" onChange={onChange} />
            <label htmlFor="dn" className="toggle">
                <span className="toggle__handler">
                    <span className="crater crater--1"></span>
                    <span className="crater crater--2"></span>
                    <span className="crater crater--3"></span>
                </span>
                <span className="star star--1"></span>
                <span className="star star--2"></span>
                <span className="star star--3"></span>
                <span className="star star--4"></span>
                <span className="star star--5"></span>
                <span className="star star--6"></span>
            </label>
        </div>
    );
};

Switch.defaultProps = {
    onChange: () => {},
    theme: ''
};

Switch.propTypes = {
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.string
};

export default Switch;
