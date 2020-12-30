import PropTypes from 'prop-types';

import { CardWrapper, LeftCard, RightCard } from './card-styled';

const Card = ({ title, children }) => (
    <CardWrapper title={title.toUpperCase()}>
        <LeftCard>
            <strong>{title.toUpperCase()}</strong>
        </LeftCard>
        <RightCard>{children}</RightCard>
    </CardWrapper>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string]).isRequired
};

export default Card;
