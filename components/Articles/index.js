import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '../Card';
import { Item, Wrapper } from './articles-styled';

const Contact = ({ profile }) => (
    <Card title="Articles">
        <Wrapper>
            {profile.articles.map((article) => (
                <Item key={article.id}>
                    <Link href={article.value} target="_blank">
                        {article.title}
                    </Link>
                </Item>
            ))}
        </Wrapper>
    </Card>
);

Contact.defaultProps = {
    profile: {
        articles: []
    }
};

Contact.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any)
};

export default Contact;
