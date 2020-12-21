import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';
import { BooksWrapper, BooksItem, NoBorderLink } from './books-styled';

const Books = ({ profile }) => (
    <Card title="Books">
        <BooksWrapper>
        {
            profile.books.map(book => (
                <BooksItem key={book.id}>
                    <Link href={book.url} passHref>
                        <NoBorderLink target="_blank">
                            <Image src={book.img} width="148" height="223" />
                        </NoBorderLink>
                    </Link>
                </BooksItem>
                )
            )
        }
        </BooksWrapper>
    </Card>
);

export default Books;