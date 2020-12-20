import { CardWrapper, LeftCard, RightCard } from './card-styled';

const Card = ({title, children}) => (
    <CardWrapper>
        <LeftCard><strong>{title}</strong></LeftCard>
        <RightCard>{children}</RightCard>
    </CardWrapper>
);

export default Card;