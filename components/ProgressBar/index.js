import Canvas from './Canvas';

const ProgressBar = ({ completed, bgcolor }) => (
    <Canvas completed={completed} bgColor={bgcolor} innerWidth="250" innerHeight="250"/>
);

export default ProgressBar;