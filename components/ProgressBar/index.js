import { Container, Filler, Label } from './progress-bar-styled';

const ProgressBar = ({ completed, bgcolor }) => (
    <Container>
        <Filler completed={completed} bgcolor={bgcolor}>
            <Label>{`${completed}%`}</Label>
        </Filler>
    </Container>
);

export default ProgressBar;