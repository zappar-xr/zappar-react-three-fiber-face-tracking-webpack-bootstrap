import React, { Suspense, useRef } from 'react';
import { render } from 'react-dom';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';
import {
 FaceBufferGeometry, FaceTracker, ZapparCamera, ZapparCanvas,
} from '@zappar/zappar-react-three-fiber';

const FaceMeshMaterial = () => {
    const faceMapSrc = require('file-loader!./faceMeshTemplate.png').default;
    const faceMapTexture = useLoader(TextureLoader, faceMapSrc);
    return <meshStandardMaterial transparent map={faceMapTexture} />;
};

export default function App() {
    const zapparCamera = useRef();
    const faceTrackerGroup = useRef();

    return (
      <ZapparCanvas>
        <ZapparCamera rearCameraMirrorMode="css" ref={zapparCamera} />
        <FaceTracker
          camera={zapparCamera}
          ref={faceTrackerGroup}
        >
          <Suspense fallback={null}>
            <mesh>
              <FaceMeshMaterial />
              <FaceBufferGeometry trackerGroup={faceTrackerGroup} />
            </mesh>
          </Suspense>

        </FaceTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    );
}
render(<App />, document.getElementById('root'));
