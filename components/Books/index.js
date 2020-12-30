import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '../Card';
import { BooksItem, BooksWrapper } from './books-styled';

const Books = ({ profile }) => (
    <Card title="Books">
        <BooksWrapper>
            {profile.books.map((book) => (
                <BooksItem key={book.id}>
                    <Link href={book.url} passHref>
                        <a target="_blank">
                            <Image src={book.img} width="74" height="115.5" />
                        </a>
                    </Link>
                </BooksItem>
            ))}
        </BooksWrapper>
    </Card>
);

Books.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Books;
