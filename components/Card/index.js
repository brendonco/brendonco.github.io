import { CardWrapper, LeftCard, RightCard } from './card-styled';

const Card = ({title, children}) => (
    <CardWrapper title={title.toUpperCase()}>
        <LeftCard><strong>{title.toUpperCase()}</strong></LeftCard>
        <RightCard>{children}</RightCard>
    </CardWrapper>
);

export default Card;