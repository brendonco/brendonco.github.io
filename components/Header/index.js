import Image from 'next/image';
import PropTypes from 'prop-types';

import { Column, HeaderWrapper, ImgCrop, Row, Title } from './header-styled';

const Header = ({ profile }) => (
    <HeaderWrapper>
        <Row>
            <Column>
                <Title>
                    <strong>{profile.lastname}</strong> {profile.firstname}
                </Title>
                <div>{profile.title}</div>
            </Column>
            <Column direction="rtl">
                <ImgCrop>
                    <Image src="/me.jpg" width="100" height="auto" />
                </ImgCrop>
            </Column>
        </Row>
    </HeaderWrapper>
);

Header.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Header;
