declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module 'meshline' {
  import * as THREE from 'three';

  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.Material {
    constructor(parameters?: any);
    color: THREE.Color;
    map: THREE.Texture | null;
    lineWidth: number;
    resolution: THREE.Vector2;
    sizeAttenuation: number;
    dashArray: number;
    dashOffset: number;
    dashRatio: number;
    useMap: boolean;
    alphaTest: number;
    repeat: THREE.Vector2;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
    group: any;
    mesh: any;
  }
}
