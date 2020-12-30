import dynamic from 'next/dynamic';

import { WorldWrapper } from './world-styled';

const World = (props) => {
    const Globe = dynamic(() => import('react-globe.gl'), {
        ssr: false,
        loading: () => 'Loading 3D globe . . .'
    });

    return (
        <WorldWrapper>
            <Globe {...props} />
        </WorldWrapper>
    );
};

export default World;
