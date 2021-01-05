import './style.sass';

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';
import {
 FaceBufferGeometry, FaceTracker, ZapparCamera, ZapparCanvas,
} from '@zappar/zappar-react-three-fiber';

import faceMapSrc from './assets/faceMeshTemplate.png'

const FaceMeshMaterial = () => {
    const faceMapTexture = useLoader(TextureLoader, faceMapSrc);
    return <meshStandardMaterial transparent map={faceMapTexture} />;
};

export default function App() {

    return (
      <ZapparCanvas>
        <ZapparCamera rearCameraMirrorMode="css"/>
        <FaceTracker>
          <Suspense fallback={null}>
            <mesh>
              <FaceMeshMaterial />
              <FaceBufferGeometry/>
            </mesh>
          </Suspense>

        </FaceTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    );
}
render(<App />, document.getElementById('root'));
