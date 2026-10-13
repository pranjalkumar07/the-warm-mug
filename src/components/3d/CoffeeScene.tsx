import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface CoffeeSceneProps {
  interactive?: boolean;
  intensity?: "hero" | "ambient" | "compact";
  className?: string;
  showBeans?: boolean;
}

export const CoffeeScene: React.FC<CoffeeSceneProps> = ({
  interactive = true,
  intensity = "hero",
  className = "",
  showBeans = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 4.2);

    // Warm Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffeedd, 0.6);
    scene.add(ambientLight);

    // Warm Key Light (Golden Amber)
    const keyLight = new THREE.DirectionalLight(0xf4d03f, 2.2);
    keyLight.position.set(3, 4, 3);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Soft Fill Light (Warm Terracotta)
    const fillLight = new THREE.DirectionalLight(0xd49b5c, 1.0);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    // Rim Light (Bright Golden Highlight from rear)
    const rimLight = new THREE.SpotLight(0xfff5d0, 3.5, 12, Math.PI / 4, 0.4);
    rimLight.position.set(0, 3.5, -3);
    rimLight.target.position.set(0, 0, 0);
    scene.add(rimLight);
    scene.add(rimLight.target);

    // Base Group for Cup & Accessories
    const cupGroup = new THREE.Group();
    scene.add(cupGroup);

    // Ceramic Materials
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0x141210, // Sleek warm obsidian ceramic matching cafe vibe
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.7,
    });

    const saucerMat = new THREE.MeshPhysicalMaterial({
      color: 0x181512,
      roughness: 0.22,
      metalness: 0.08,
      clearcoat: 0.6,
    });

    const goldBandMat = new THREE.MeshStandardMaterial({
      color: 0xf4d03f,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x47380a,
      emissiveIntensity: 0.3,
    });

    const coffeeLiquidMat = new THREE.MeshPhysicalMaterial({
      color: 0x221008, // Rich dark espresso
      roughness: 0.12,
      metalness: 0.0,
      clearcoat: 1.0,
      transmission: 0.2,
      ior: 1.34,
    });

    // 1. Mug Body using LatheGeometry for authentic silhouette
    const cupPoints: THREE.Vector2[] = [];
    cupPoints.push(new THREE.Vector2(0, 0));
    cupPoints.push(new THREE.Vector2(0.65, 0));
    cupPoints.push(new THREE.Vector2(0.72, 0.08));
    cupPoints.push(new THREE.Vector2(0.75, 0.4));
    cupPoints.push(new THREE.Vector2(0.82, 0.95));
    cupPoints.push(new THREE.Vector2(0.84, 1.25));
    cupPoints.push(new THREE.Vector2(0.82, 1.28));
    cupPoints.push(new THREE.Vector2(0.75, 1.25));
    cupPoints.push(new THREE.Vector2(0.73, 0.95));
    cupPoints.push(new THREE.Vector2(0.66, 0.3));
    cupPoints.push(new THREE.Vector2(0.60, 0.08));
    cupPoints.push(new THREE.Vector2(0, 0.08));

    const cupGeom = new THREE.LatheGeometry(cupPoints, 48);
    const cupMesh = new THREE.Mesh(cupGeom, ceramicMat);
    cupMesh.castShadow = true;
    cupMesh.receiveShadow = true;
    cupGroup.add(cupMesh);

    // Decorative Gold Rim on Top Lip
    const rimTorusGeom = new THREE.TorusGeometry(0.83, 0.02, 16, 48);
    const rimMesh = new THREE.Mesh(rimTorusGeom, goldBandMat);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 1.26;
    cupGroup.add(rimMesh);

    // Decorative Gold Band along belly
    const bandTorusGeom = new THREE.TorusGeometry(0.78, 0.015, 16, 48);
    const bandMesh = new THREE.Mesh(bandTorusGeom, goldBandMat);
    bandMesh.rotation.x = Math.PI / 2;
    bandMesh.position.y = 0.65;
    cupGroup.add(bandMesh);

    // 2. Handle
    const handleCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0.78, 1.05, 0),
      new THREE.Vector3(1.35, 1.05, 0),
      new THREE.Vector3(1.35, 0.35, 0),
      new THREE.Vector3(0.68, 0.35, 0)
    );
    const handleGeom = new THREE.TubeGeometry(handleCurve, 32, 0.09, 16, false);
    const handleMesh = new THREE.Mesh(handleGeom, ceramicMat);
    handleMesh.castShadow = true;
    cupGroup.add(handleMesh);

    // 3. Liquid Coffee Surface
    const liquidGeom = new THREE.CylinderGeometry(0.74, 0.74, 0.05, 36);
    const liquidMesh = new THREE.Mesh(liquidGeom, coffeeLiquidMat);
    liquidMesh.position.y = 1.12;
    liquidMesh.receiveShadow = true;
    cupGroup.add(liquidMesh);

    // Crema Swirl Ring
    const cremaGeom = new THREE.RingGeometry(0.2, 0.7, 32);
    const cremaMat = new THREE.MeshBasicMaterial({
      color: 0xc8922e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const cremaMesh = new THREE.Mesh(cremaGeom, cremaMat);
    cremaMesh.rotation.x = -Math.PI / 2;
    cremaMesh.position.y = 1.146;
    cupGroup.add(cremaMesh);

    // 4. Saucer
    const saucerPoints: THREE.Vector2[] = [];
    saucerPoints.push(new THREE.Vector2(0, -0.05));
    saucerPoints.push(new THREE.Vector2(0.65, -0.05));
    saucerPoints.push(new THREE.Vector2(1.25, 0.02));
    saucerPoints.push(new THREE.Vector2(1.4, 0.12));
    saucerPoints.push(new THREE.Vector2(1.35, 0.12));
    saucerPoints.push(new THREE.Vector2(1.2, 0.04));
    saucerPoints.push(new THREE.Vector2(0.6, -0.02));
    saucerPoints.push(new THREE.Vector2(0, -0.02));

    const saucerGeom = new THREE.LatheGeometry(saucerPoints, 48);
    const saucerMesh = new THREE.Mesh(saucerGeom, saucerMat);
    saucerMesh.castShadow = true;
    saucerMesh.receiveShadow = true;
    saucerMesh.position.y = -0.02;
    cupGroup.add(saucerMesh);

    // Gold Saucer Ring
    const saucerRimGeom = new THREE.TorusGeometry(1.36, 0.015, 16, 48);
    const saucerRimMesh = new THREE.Mesh(saucerRimGeom, goldBandMat);
    saucerRimMesh.rotation.x = Math.PI / 2;
    saucerRimMesh.position.y = 0.11;
    cupGroup.add(saucerRimMesh);

    // 5. Contact Shadow Surface
    const shadowPlaneGeom = new THREE.PlaneGeometry(6, 6);
    const shadowPlaneMat = new THREE.ShadowMaterial({
      opacity: 0.55,
    });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeom, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.08;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Floating Coffee Beans
    const beansGroup = new THREE.Group();
    scene.add(beansGroup);

    const beanGeom = new THREE.SphereGeometry(0.09, 14, 14);
    beanGeom.scale(1.4, 0.9, 0.7); // oval bean shape

    const beanMat = new THREE.MeshStandardMaterial({
      color: 0x3d2012,
      roughness: 0.5,
      metalness: 0.1,
    });

    const beanMeshes: { mesh: THREE.Mesh; rotSpeed: THREE.Vector3; floatSpeed: number; basePos: THREE.Vector3 }[] = [];
    const beanCount = showBeans ? (isMobile ? 6 : 14) : 0;

    for (let i = 0; i < beanCount; i++) {
      const bMesh = new THREE.Mesh(beanGeom, beanMat);
      const angle = (i / beanCount) * Math.PI * 2;
      const radius = 1.6 + Math.random() * 1.4;
      const height = (Math.random() - 0.2) * 2.2;
      bMesh.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      bMesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      bMesh.castShadow = true;
      beansGroup.add(bMesh);

      beanMeshes.push({
        mesh: bMesh,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
        floatSpeed: 0.5 + Math.random() * 0.8,
        basePos: bMesh.position.clone(),
      });
    }

    // 7. Rising Steam Particles
    const steamParticleCount = isMobile ? 25 : 55;
    const steamGeom = new THREE.BufferGeometry();
    const steamPositions = new Float32Array(steamParticleCount * 3);
    const steamSpeeds = new Float32Array(steamParticleCount);
    const steamAlphas = new Float32Array(steamParticleCount);

    for (let i = 0; i < steamParticleCount; i++) {
      steamPositions[i * 3] = (Math.random() - 0.5) * 0.45;
      steamPositions[i * 3 + 1] = 1.2 + Math.random() * 1.2;
      steamPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.45;
      steamSpeeds[i] = 0.004 + Math.random() * 0.007;
      steamAlphas[i] = Math.random();
    }

    steamGeom.setAttribute("position", new THREE.BufferAttribute(steamPositions, 3));

    // Create steam texture canvas
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 248, 234, 0.45)");
      grad.addColorStop(0.4, "rgba(244, 208, 63, 0.2)");
      grad.addColorStop(1, "rgba(244, 208, 63, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const steamTexture = new THREE.CanvasTexture(pCanvas);

    const steamMat = new THREE.PointsMaterial({
      size: 0.35,
      map: steamTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.45,
    });

    const steamParticles = new THREE.Points(steamGeom, steamMat);
    cupGroup.add(steamParticles);

    // Initial position & tilt
    cupGroup.position.set(0, -0.4, 0);
    cupGroup.rotation.y = -Math.PI / 5;

    // Mouse Tracking for subtle parallax
    let targetRotationX = 0;
    let targetRotationY = -Math.PI / 5;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = -Math.PI / 5 + mouseX * 0.35;
      targetRotationX = mouseY * 0.2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      targetRotationY = -Math.PI / 5 + mouseX * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // WebGL Context Recovery
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasWebGL(false);
    };
    const handleContextRestored = () => {
      setHasWebGL(true);
    };
    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    canvas.addEventListener("webglcontextrestored", handleContextRestored, false);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth damped rotation to mouse
      cupGroup.rotation.y += (targetRotationY - cupGroup.rotation.y) * 0.05;
      cupGroup.rotation.x += (targetRotationX - cupGroup.rotation.x) * 0.05;

      // Gentle floating bob
      cupGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.2) * 0.04;

      // Slowly rotate rim lighting
      rimLight.position.x = Math.sin(elapsedTime * 0.5) * 2;

      // Animate Coffee Beans
      beanMeshes.forEach((item, idx) => {
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
        item.mesh.rotation.z += item.rotSpeed.z;
        item.mesh.position.y =
          item.basePos.y + Math.sin(elapsedTime * item.floatSpeed + idx) * 0.12;
      });

      // Animate Steam
      const positions = steamGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < steamParticleCount; i++) {
        positions[i * 3 + 1] += steamSpeeds[i];
        // Swirl gently
        positions[i * 3] += Math.sin(elapsedTime * 2 + i) * 0.001;
        // Reset if too high
        if (positions[i * 3 + 1] > 2.6) {
          positions[i * 3 + 1] = 1.18;
          positions[i * 3] = (Math.random() - 0.5) * 0.4;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
        }
      }
      steamGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);

      // Clean up resources
      renderer.dispose();
      cupGeom.dispose();
      handleGeom.dispose();
      liquidGeom.dispose();
      saucerGeom.dispose();
      steamGeom.dispose();
      beanGeom.dispose();
      ceramicMat.dispose();
      goldBandMat.dispose();
      coffeeLiquidMat.dispose();
      steamMat.dispose();
      beanMat.dispose();
    };
  }, [interactive, intensity, showBeans]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Interactive 3D Ceramic Mug with Rising Steam"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing transition-opacity duration-700"
      />

      {!hasWebGL && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070706]/90 p-6 text-center">
          <div className="w-16 h-16 rounded-full border border-[#F4D03F]/30 bg-[#12100E] flex items-center justify-center text-[#F4D03F] mb-4">
            ☕
          </div>
          <p className="text-sm font-medium text-[#FFF8EA]">The Warm Mug Experience</p>
          <p className="text-xs text-[#E7B93C]/80 mt-1">Brewing Comfort in Greater Noida</p>
        </div>
      )}
    </div>
  );
};
