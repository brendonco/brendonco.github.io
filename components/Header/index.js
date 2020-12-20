import { Title, HeaderWrapper } from './header-styled';

const Header = ({profile}) => (
    <HeaderWrapper>
    <Title>
        <strong>{profile.lastname}</strong> {profile.firstname}
    </Title>
    <div>{profile.title}</div>
    </HeaderWrapper>
);

export default Header;