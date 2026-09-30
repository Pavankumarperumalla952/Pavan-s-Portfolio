import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Rotate3d, Sparkles, Zap, Maximize2 } from 'lucide-react';

export default function ThreeScene3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<'quantum' | 'cyber' | 'rings'>('quantum');
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Core Glowing Sphere (Inner Quantum Core)
    const coreGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x9d4edd,
      emissiveIntensity: 0.8,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 2. Outer Wireframe Polyhedron (Cyber Shell)
    const shellGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    rootGroup.add(shellMesh);

    // Shell vertices glow nodes
    const nodeGeo = new THREE.BufferGeometry();
    const posAttr = shellGeo.getAttribute('position');
    nodeGeo.setAttribute('position', posAttr);
    const nodeMat = new THREE.PointsMaterial({
      color: 0xff2a85,
      size: 0.12,
      transparent: true,
      opacity: 0.95
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    shellMesh.add(nodePoints);

    // 3. Three 3D Concentric Orbit Rings
    const ringGroup = new THREE.Group();
    rootGroup.add(ringGroup);

    const createRing = (radius: number, tube: number, color: number, rotX: number, rotY: number) => {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.75
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = rotX;
      mesh.rotation.y = rotY;
      return mesh;
    };

    const ring1 = createRing(2.1, 0.02, 0x00f0ff, Math.PI / 3, 0);
    const ring2 = createRing(2.4, 0.02, 0xff2a85, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(2.7, 0.02, 0xb026ff, Math.PI / 6, -Math.PI / 3);
    ringGroup.add(ring1, ring2, ring3);

    // 4. 400 3D Starfield Energy Particles
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00f0ff);
    const c2 = new THREE.Color(0xff2a85);
    const c3 = new THREE.Color(0xb026ff);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const dist = 2.6 + Math.random() * 3.5;

      particlePos[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = dist * Math.cos(phi);

      const chosenColor = Math.random() < 0.4 ? c1 : Math.random() < 0.7 ? c2 : c3;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f0ff, 4, 15);
    pointLightCyan.position.set(4, 3, 5);
    scene.add(pointLightCyan);

    const pointLightPink = new THREE.PointLight(0xff2a85, 4, 15);
    pointLightPink.position.set(-4, -3, 3);
    scene.add(pointLightPink);

    // Interactive Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let mouseHoverX = 0;
    let mouseHoverY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseHoverX = nx * 0.45;
      mouseHoverY = ny * 0.45;

      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotY += deltaX * 0.008;
      targetRotX += deltaY * 0.008;
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation
      rootGroup.rotation.y += 0.006;
      rootGroup.rotation.x += 0.002;

      // Mouse drag damping
      rootGroup.rotation.y += (targetRotY + mouseHoverX - rootGroup.rotation.y) * 0.06;
      rootGroup.rotation.x += (targetRotX - mouseHoverY - rootGroup.rotation.x) * 0.06;

      // Individual element rotations
      shellMesh.rotation.y -= 0.009;
      shellMesh.rotation.z += 0.005;

      ring1.rotation.z += 0.015;
      ring2.rotation.y += 0.018;
      ring3.rotation.x -= 0.012;

      particles.rotation.y += 0.0015;
      particles.rotation.x -= 0.0008;

      // Pulsing energy core
      const pulse = 1.0 + Math.sin(elapsedTime * 2.8) * 0.08;
      coreMesh.scale.set(pulse, pulse, pulse);
      coreMat.emissiveIntensity = 0.7 + Math.sin(elapsedTime * 3.5) * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[440px] sm:h-[480px] lg:h-[500px] flex items-center justify-center select-none group">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center touch-none"
      />

      {/* Cyber HUD Telemetry Header */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10 font-mono text-[11px]">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 backdrop-blur-md shadow-lg shadow-cyan-500/20">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold tracking-wider">3D QUANTUM CORE // ACTIVE</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-pink-400" />
          <span>60 FPS • WEBGL</span>
        </div>
      </div>

      {/* Interactive Drag Orbit Prompt */}
      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none z-10 font-mono text-[11px]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/75 border border-cyan-500/30 text-slate-300 backdrop-blur-md shadow-xl">
          <Rotate3d className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Drag to Orbit • 3D Hardware Accelerated</span>
        </div>

        <div className="text-pink-400/80 font-bold hidden md:block">
          STATUS: ONLINE
        </div>
      </div>

      {/* Holographic Radial Vignette */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-cyan-500/30 shadow-[inset_0_0_40px_rgba(0,240,255,0.15)]" />
    </div>
  );
}
