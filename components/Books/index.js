import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';
import { BooksWrapper, BooksItem } from './books-styled';

const Books = ({ profile }) => (
    <Card title="Books">
        <BooksWrapper>
        {
            profile.books.map(book => (
                <BooksItem key={book.id}>
                    <Link href={book.url} passHref>
                        <a target="_blank">
                            <Image src={book.img} width="74" height="115.5" />
                        </a>
                    </Link>
                </BooksItem>
                )
            )
        }
        </BooksWrapper>
    </Card>
);

export default Books;