import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import {
 FaceBufferGeometry, FaceTracker, ZapparCamera, ZapparCanvas,BrowserCompatibility
} from '@zappar/zappar-react-three-fiber';

function FaceMeshMaterial() {
  const faceMapTexture = useLoader(TextureLoader, new URL('./assets/faceMeshTemplate.png', import.meta.url).href);
  return <meshStandardMaterial transparent map={faceMapTexture} color="red" />;
};

function App(){
  const faceTrackerGroup = useRef();
  return (
    <>
      <BrowserCompatibility fallback={<div>Sorry!</div>} />
      <ZapparCanvas>
        <ZapparCamera/>
        <FaceTracker ref={faceTrackerGroup}>
          <mesh>
            <FaceBufferGeometry attach="geometry" trackerGroup={faceTrackerGroup} />
            <FaceMeshMaterial />
          </mesh>
        </FaceTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    </>
  );
};


export default App;
