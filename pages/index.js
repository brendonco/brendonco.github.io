import Resume from '../components/Resume';
import profile from '../data/profile';

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=2592000, stale-while-revalidate=59');

    return {
        props: {}
    };
}

export default function Index({ time }) {
    return <Resume profile={profile} />;
}
