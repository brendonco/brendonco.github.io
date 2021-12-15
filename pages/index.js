import Resume from '../components/Resume';

export async function getServerSideProps({ res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=2592000, stale-while-revalidate=59');

    const { default: profile } = await import('../data/profile.js');

    return {
        props: { profile }
    };
}

export default function Index({ profile }) {
    return <Resume profile={profile} />;
}
