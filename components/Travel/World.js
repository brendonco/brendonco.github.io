import dynamic from 'next/dynamic';

import { WorldWrapper } from './world-styled';

const World = (props) => {
    const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

    return (
        <WorldWrapper>
            <Globe {...props} />
        </WorldWrapper>
    );
};

export default World;
