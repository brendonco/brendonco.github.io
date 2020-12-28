import Link from 'next/link';
import Card from '../Card';
import { Wrapper, Item } from './articles-styled';

const Contact = ({profile}) => (
    <Card title="Articles">
        <Wrapper>
            {
                profile.articles.map(article => (
                    <Item key={article.id}>
                        <Link href={article.value} passHref><a target="_blank">{article.title}</a></Link>
                    </Item>
                ))
            }
        </Wrapper>
    </Card>
);

export default Contact;