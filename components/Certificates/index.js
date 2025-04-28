import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '../Card';
import { CertificatesWrapper, CertificateItem } from './certificates-styled';

const Certificates = ({ profile }) => (
    <Card title="Certificates">
        <CertificatesWrapper>
            {profile.certificates.map((cert) => (
                <CertificateItem key={cert.id}>
                    <Link href={cert.url} target="_blank">
                        <Image
                            alt={cert.name}
                            src={cert.img}
                            width={200}
                            height={150}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                </CertificateItem>
            ))}
        </CertificatesWrapper>
    </Card>
);

Certificates.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Certificates;
