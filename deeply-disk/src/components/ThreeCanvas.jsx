import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("ThreeCanvas component mounted");
    const canvasContainer = canvasRef.current;
    if (!canvasContainer) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    canvasContainer.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00d4ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div ref={canvasRef} className="canvas-container"></div>
  );
};

export default ThreeCanvas;
