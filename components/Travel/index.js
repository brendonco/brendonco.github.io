import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

import places from './places';
import { TravelWrapper, VectorContainer } from './travel-styled';

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const isLabelVisible = ({ properties: { name } }) => {
    const visible = ['Singapore', 'Taipei', 'Augsburg', 'Cebu City', 'Shenzhen'].some(
        (v) => v === name
    );

    return visible;
};

const World = dynamic(() => import('./World'), { loading: () => 'Loading 3D globe . . .' });

const Travel = ({
    profile: {
        travels: { title, markers }
    }
}) => (
    <TravelWrapper>
        <strong>{title}</strong>
        <VectorContainer>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <g
                            fill="none"
                            stroke="#FF5533"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)">
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                        <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}>
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </VectorContainer>
        <World
            width={800}
            height={400}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            labelsData={places.features}
            labelLat={(d) => d.properties.latitude}
            labelLng={(d) => d.properties.longitude}
            labelText={(d) =>
                `${isLabelVisible(d) ? `${d.properties.name}, ${d.properties.sov0name}` : ''}`
            }
            labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
            labelDotRadius={(d) =>
                `${isLabelVisible(d) ? Math.sqrt(d.properties.pop_max) * 4e-4 : 0}`
            }
            labelColor={() => 'rgba(255, 165, 0, 0.75)'}
            labelResolution={3}
        />
    </TravelWrapper>
);

Travel.propTypes = {
    profile: PropTypes.shape({
        travels: PropTypes.objectOf(PropTypes.any).isRequired
    })
};

export default Travel;
