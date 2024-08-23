// import { useCallback, useRef, useState } from 'react';
// import {
//   YMap,
//   YMapComponentsProvider,
//   YMapContainer,
//   YMapControls,
//   YMapCustomClusterer,
//   YMapDefaultFeaturesLayer,
//   YMapDefaultSchemeLayer,
//   YMapGeolocationControl,
//   YMapHint,
//   YMapMarker,
//   YMapZoomControl,
// } from 'ymap3-components';
// // import MyHint from './MyHint';
// import { apiKey, location as LOCATION, points } from './helpers';
// import s from './map.module.scss';
// import { ClusterSign } from './clusterSign.tsx';
// import PlaceMarker from '../../assets/map-marker.svg?react';
// import MapStyles from './map-styles.json';
//
// function Map() {
//   const [location, setLocation] = useState(LOCATION);
//   const ymap3Ref = useRef();
//
//   const getHint = useCallback((object) => object?.properties?.hint, []);
//
//   const marker = useCallback((feature) => {
//     return (
//       <YMapMarker coordinates={feature.geometry.coordinates}>
//         <PlaceMarker className={s.placeMarker} />
//       </YMapMarker>
//     );
//   }, []);
//
//   const cluster = useCallback(
//     (coordinates, features) => (
//       <YMapMarker coordinates={coordinates}>
//         <ClusterSign number={features.length} />
//       </YMapMarker>
//     ),
//     [],
//   );
//
//   return (
//     <div className={s.map}>
//       {/* <MapLocation location={location} /> */}
//       <YMapComponentsProvider apiKey={apiKey} lang='ru_RU'>
//         <YMap key='map' ref={ymap3Ref} location={location} mode='vector'>
//           <YMapCustomClusterer marker={marker} cluster={cluster} gridSize={64} features={points} />
//           <YMapDefaultSchemeLayer customization={MapStyles} />
//           <YMapDefaultFeaturesLayer />
//           {/*<YMapListener onUpdate={onUpdate} />*/}
//           <YMapMarker coordinates={LOCATION.center}>
//             <PlaceMarker className={s.placeMarker} />
//           </YMapMarker>
//           {/*<YMapDefaultMarker coordinates={LOCATION.center} />*/}
//           <YMapControls position='bottom'>
//             <YMapZoomControl />
//           </YMapControls>
//           <YMapControls position='bottom left'>
//             <YMapGeolocationControl />
//           </YMapControls>
//           <YMapHint hint={getHint}>
//             {/*<MyHint />*/}
//             <span>+</span>
//           </YMapHint>
//           <YMapControls position='top left'>
//             <YMapContainer>{/*<MapLocation location={location} />*/}</YMapContainer>
//           </YMapControls>
//         </YMap>
//       </YMapComponentsProvider>
//     </div>
//   );
// }
//
// export default Map;
//
//
//
//
import { useCallback, useRef, useState } from 'react';
import {
  YMap,
  YMapComponentsProvider,
  YMapContainer,
  YMapControls,
  YMapCustomClusterer,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapGeolocationControl,
  YMapHint,
  YMapMarker,
  YMapZoomControl,
} from 'ymap3-components';
// import MyHint from './MyHint';
import { apiKey, location as LOCATION, points } from './helpers';
import s from './map.module.scss';
import { ClusterSign } from './clusterSign.tsx';
import PlaceMarker from '../../assets/map-marker.svg?react';
import MapStyles from './map-styles.json';
import MapCustomization from './map-customization.json';

function Map() {
  const [location, setLocation] = useState(LOCATION);
  const ymap3Ref = useRef();

  const getHint = useCallback((object) => object?.properties?.hint, []);

  const marker = useCallback((feature) => {
    return (
      <YMapMarker coordinates={feature.geometry.coordinates}>
        <PlaceMarker className={s.placeMarker} />
      </YMapMarker>
    );
  }, []);

  const cluster = useCallback(
    (coordinates, features) => (
      <YMapMarker coordinates={coordinates}>
        <ClusterSign number={features.length} />
      </YMapMarker>
    ),
    [],
  );

  return (
    <div className={s.map}>
      {/* <MapLocation location={location} /> */}
      <YMapComponentsProvider apiKey={apiKey} lang='ru_RU'>
        <YMap key='map' ref={ymap3Ref} location={location} mode='vector'>
          <YMapCustomClusterer marker={marker} cluster={cluster} gridSize={64} features={points} />
          {/*<YMapDefaultSchemeLayer />*/}
          <YMapDefaultSchemeLayer customization={MapCustomization} />
          <YMapDefaultFeaturesLayer />
          {/*<YMapListener onUpdate={onUpdate} />*/}
          <YMapMarker coordinates={LOCATION.center}>
            <PlaceMarker className={s.placeMarker} />
          </YMapMarker>
          {/*<YMapDefaultMarker coordinates={LOCATION.center} />*/}
          <YMapControls position='bottom'>
            <YMapZoomControl />
          </YMapControls>
          <YMapControls position='bottom left'>
            <YMapGeolocationControl />
          </YMapControls>
          <YMapHint hint={getHint}>
            {/*<MyHint />*/}
            <span>+</span>
          </YMapHint>
          <YMapControls position='top left'>
            <YMapContainer>{/*<MapLocation location={location} />*/}</YMapContainer>
          </YMapControls>
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
}

export default Map;
