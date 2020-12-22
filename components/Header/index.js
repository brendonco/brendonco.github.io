import Image from 'next/image';
import { Title, HeaderWrapper, ImgCrop, Row, Column } from './header-styled';

const Header = ({profile}) => (
    <HeaderWrapper>
    <Row>
        <Column>
        <Title><strong>{profile.lastname}</strong> {profile.firstname}</Title>
        <div>{profile.title}</div>
        </Column>
        <Column direction="rtl"><ImgCrop><Image src="/me.jpg" width="100" height="auto"/></ImgCrop></Column>
    </Row>
    </HeaderWrapper>
);

export default Header;