import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';
import { ContactWrapper, ContactItem } from './contact-styled';

const Contact = ({profile}) => (
    <Card title="Contact">
        <ContactWrapper>
            {
                profile.contact.map(contact => (
                    <ContactItem key={contact.id}>
                        <Image src={contact.icon} width="16" height="16" alt="email"/>
                        <Link href={contact.id === 'email' ? `mailto:${contact.value}` : contact.value} passHref><a target="_blank">{contact.value}</a></Link>
                    </ContactItem>
                ))
            }
        </ContactWrapper>
    </Card>
);

export default Contact;