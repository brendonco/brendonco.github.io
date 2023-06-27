import Link from 'next/link';
import Card from '../Card';
import { Wrapper } from './talk-styled';

type ProfileProps = {
    profile: {
        talk: {
            title: string;
            data: array;
        };
    };
};

const Talk = ({ profile }: ProfileProps) => {
    const {
        talk: { title, data }
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

export default Talk;
