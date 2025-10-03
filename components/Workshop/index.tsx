import Link from 'next/link';
import Card from '../Card';
import { Wrapper } from './workshop-styled';

type DataProps = {
    id: string;
    url: string;
    title: string;
};

type ProfileProps = {
    profile: {
        workshop: {
            title: string;
            data: DataProps[];
        };
    };
};

const Workshop = ({ profile }: ProfileProps) => {
    const {
        workshop: { title, data }
    } = profile;
    return (
        <Card title={title}>
            <Wrapper>
                {data?.map((value) => {
                    return (
                        <div key={value?.id}>
                            <Link href={value?.url} target="_blank">
                                {value?.title}
                            </Link>
                        </div>
                    );
                })}
            </Wrapper>
        </Card>
    );
};

export default Workshop;
