import Image from 'next/image';
import Card from '../Card';
import { ContactWrapper, ContactItem } from './contact-styled';

const Contact = ({profile}) => (
    <Card title="Contact">
        <ContactWrapper>
            {
                profile.contact.map(contact => (
                    <ContactItem key={contact.id}>
                        <Image src={contact.icon} width="16" height="16" alt="email"/>
                        <span>{contact.value}</span>
                    </ContactItem>
                ))
            }
        </ContactWrapper>
    </Card>
);

export default Contact;