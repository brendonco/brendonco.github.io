import Image from 'next/image';
import PropTypes from 'prop-types';

import author from '../../public/me.jpg';
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
                    <Image
                        src={author}
                        width="100"
                        height="150"
                        placeholder="blur"
                        alt="Picture of the author"
                    />
                </ImgCrop>
            </Column>
        </Row>
    </HeaderWrapper>
);

Header.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Header;
