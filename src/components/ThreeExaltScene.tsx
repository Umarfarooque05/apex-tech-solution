"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

interface ThreeExaltSceneProps {
  fullScreen?: boolean;
  className?: string;
}

export default function ThreeExaltScene({
  fullScreen = true,
  className = "",
}: ThreeExaltSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Disposables array for robust cleanup
    const disposables: Array<{ dispose: () => void }> = [];
    const registerDisposable = <T extends { dispose: () => void }>(item: T): T => {
      disposables.push(item);
      return item;
    };

    let width = fullScreen ? window.innerWidth : currentMount.clientWidth || 400;
    let height = fullScreen ? window.innerHeight : currentMount.clientHeight || 300;

    // 1. Scene, Fog, Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b19, 0.0032);

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 600);
    camera.position.set(0, 0, 32);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // 3. Post-Processing: UnrealBloomPass
    let composer: EffectComposer | null = null;
    try {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        0.85, // strength
        0.4,  // radius
        0.75  // threshold
      );
      composer.addPass(bloomPass);
    } catch (e) {
      console.warn("Postprocessing bloom fallback to standard renderer:", e);
      composer = null;
    }

    // 4. Lights: Dual-tone highlights
    const ambientLight = new THREE.AmbientLight(0x2d3a6d, 0.95);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x38bdf8, 2.4, 160);
    lightCyan.position.set(12, 14, 25);
    scene.add(lightCyan);

    const lightBlue = new THREE.PointLight(0x3b82f6, 2.0, 150);
    lightBlue.position.set(-14, -10, 20);
    scene.add(lightBlue);

    const lightSoft = new THREE.PointLight(0xe0f2fe, 1.8, 120);
    lightSoft.position.set(0, 8, 30);
    scene.add(lightSoft);

    // Helper for line material
    function createLineMaterial(colorHex: number, opacity = 0.65) {
      return registerDisposable(
        new THREE.LineBasicMaterial({
          color: colorHex,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
        })
      );
    }

    // 5. Starfield & Floating Particles (4500 particles)
    const particleCount = fullScreen ? 4200 : 1500;
    const particleGeo = registerDisposable(new THREE.BufferGeometry());
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0x60a5fa), // Blue
      new THREE.Color(0xc084fc), // Purple
      new THREE.Color(0xffffff), // White
      new THREE.Color(0x93c5fd), // Soft blue
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 2] = Math.random() * -240 + 40;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = registerDisposable(
      new THREE.PointsMaterial({
        size: 0.16,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
    );

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5.5 Central 3D Neural Engine Core (Dual Gyroscopic Rings + Outer Quantum Cage + Glowing Synaptic Nodes + Inner Core + Data Photons)
    const neuralGroup = new THREE.Group();
    const coreRadius = fullScreen ? 4.8 : 2.2;

    // 1. Primary Icosahedron Neural Lattice
    const coreGeo = registerDisposable(new THREE.IcosahedronGeometry(coreRadius, 1));
    const wireCoreGeo = registerDisposable(new THREE.WireframeGeometry(coreGeo));
    const coreLineMat = registerDisposable(
      new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      })
    );
    const coreLines = new THREE.LineSegments(wireCoreGeo, coreLineMat);
    neuralGroup.add(coreLines);

    // 2. Glowing Synaptic Vertex Nodes
    const corePointsMat = registerDisposable(
      new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: fullScreen ? 0.36 : 0.2,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      })
    );
    const corePoints = new THREE.Points(coreGeo, corePointsMat);
    neuralGroup.add(corePoints);

    // 3. Secondary Outer Quantum Cage (Dodecahedron)
    const outerCageGeo = registerDisposable(new THREE.DodecahedronGeometry(coreRadius * 1.14));
    const wireOuterCageGeo = registerDisposable(new THREE.WireframeGeometry(outerCageGeo));
    const outerCageMat = registerDisposable(
      new THREE.LineBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      })
    );
    const outerCageMesh = new THREE.LineSegments(wireOuterCageGeo, outerCageMat);
    neuralGroup.add(outerCageMesh);

    // 4. Inner Radiant Core Energy Sphere
    const innerCoreGeo = registerDisposable(new THREE.SphereGeometry(coreRadius * 0.46, 18, 18));
    const innerCoreMat = registerDisposable(
      new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      })
    );
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    neuralGroup.add(innerCore);

    // 5. Internal Glowing Point Light (illuminates the neural lattice from within)
    const neuralPointLight = new THREE.PointLight(0x06b6d4, 3.8, 45);
    neuralGroup.add(neuralPointLight);

    // 6. Gyroscopic Orbital Halo Rings (Dual Axis)
    const ringGeo1 = registerDisposable(new THREE.RingGeometry(coreRadius * 1.34, coreRadius * 1.38, 80));
    const ringMat1 = registerDisposable(
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      })
    );
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2.7;
    ringMesh1.rotation.y = 0.2;
    neuralGroup.add(ringMesh1);

    const ringGeo2 = registerDisposable(new THREE.RingGeometry(coreRadius * 1.5, coreRadius * 1.54, 80));
    const ringMat2 = registerDisposable(
      new THREE.MeshBasicMaterial({
        color: 0x818cf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      })
    );
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 3.2;
    ringMesh2.rotation.z = 0.3;
    neuralGroup.add(ringMesh2);

    // 7. Orbiting Synaptic Data Photons
    const photonCount = 6;
    const photonGeo = registerDisposable(new THREE.SphereGeometry(0.14, 10, 10));
    const photonMat = registerDisposable(
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        blending: THREE.AdditiveBlending,
      })
    );
    const photons: THREE.Mesh[] = [];
    for (let i = 0; i < photonCount; i++) {
      const p = new THREE.Mesh(photonGeo, photonMat);
      neuralGroup.add(p);
      photons.push(p);
    }

    // Responsive Neural Core Positioning
    const updateNeuralPosition = () => {
      const w = window.innerWidth;
      if (!fullScreen) {
        neuralGroup.position.set(0, 0, 8);
      } else if (w < 1024) {
        neuralGroup.position.set(0, 0.4, 8);
      } else if (w < 1440) {
        neuralGroup.position.set(4.4, 0.4, 10);
      } else {
        neuralGroup.position.set(5.2, 0.4, 10);
      }
    };
    updateNeuralPosition();
    scene.add(neuralGroup);

    // 5.6 Secondary 3D Neural Cluster (Positioned around "Everything You Need to Grow Digitally" z = -34)
    const secondaryNeuralGroup = new THREE.Group();
    const secRadius = 3.6;
    const secGeo = registerDisposable(new THREE.DodecahedronGeometry(secRadius));
    const secWireGeo = registerDisposable(new THREE.WireframeGeometry(secGeo));
    const secLineMat = registerDisposable(
      new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      })
    );
    secondaryNeuralGroup.add(new THREE.LineSegments(secWireGeo, secLineMat));

    const secPointsMat = registerDisposable(
      new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.32,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      })
    );
    secondaryNeuralGroup.add(new THREE.Points(secGeo, secPointsMat));

    const secRingGeo = registerDisposable(new THREE.RingGeometry(secRadius * 1.35, secRadius * 1.4, 64));
    const secRingMesh = new THREE.Mesh(secRingGeo, ringMat1);
    secRingMesh.rotation.x = Math.PI / 2.5;
    secondaryNeuralGroup.add(secRingMesh);

    const secCoreGeo = registerDisposable(new THREE.IcosahedronGeometry(secRadius * 0.45, 1));
    const secCoreMesh = new THREE.Mesh(
      secCoreGeo,
      registerDisposable(
        new THREE.MeshBasicMaterial({
          color: 0xa855f7,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
        })
      )
    );
    secondaryNeuralGroup.add(secCoreMesh);
    secondaryNeuralGroup.position.set(0, 0, -34);
    scene.add(secondaryNeuralGroup);

    // 5.7 Tertiary Quantum Data Core (Positioned at SEO & Software sections z = -90)
    const tertiaryNeuralGroup = new THREE.Group();
    const tertRadius = 3.2;
    const tertGeo = registerDisposable(new THREE.OctahedronGeometry(tertRadius, 2));
    const tertWireGeo = registerDisposable(new THREE.WireframeGeometry(tertGeo));
    const tertLineMat = registerDisposable(
      new THREE.LineBasicMaterial({
        color: 0x818cf8,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      })
    );
    tertiaryNeuralGroup.add(new THREE.LineSegments(tertWireGeo, tertLineMat));
    tertiaryNeuralGroup.add(new THREE.Points(tertGeo, secPointsMat));
    tertiaryNeuralGroup.position.set(2, 1, -90);
    scene.add(tertiaryNeuralGroup);

    // 6. Code Symbols (</>, {}, (), =>)
    function createCodeSymbol(position: THREE.Vector3, scale: number, type: "</>" | "{}" | "()" | "=>") {
      const group = new THREE.Group();
      const matCyan = createLineMaterial(0x38bdf8, 0.7);
      const matViolet = createLineMaterial(0xa855f7, 0.65);

      if (type === "</>") {
        // <
        const geoL = registerDisposable(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-0.6, 1.1, 0),
            new THREE.Vector3(-1.6, 0, 0),
            new THREE.Vector3(-0.6, -1.1, 0),
          ])
        );
        group.add(new THREE.Line(geoL, matCyan));

        // /
        const geoS = registerDisposable(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0.35, 1.1, 0),
            new THREE.Vector3(-0.35, -1.1, 0),
          ])
        );
        group.add(new THREE.Line(geoS, matCyan));

        // >
        const geoR = registerDisposable(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0.6, 1.1, 0),
            new THREE.Vector3(1.6, 0, 0),
            new THREE.Vector3(0.6, -1.1, 0),
          ])
        );
        group.add(new THREE.Line(geoR, matCyan));
      } else if (type === "{}") {
        // {
        const geoL = registerDisposable(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-0.4, 1.1, 0),
            new THREE.Vector3(-0.8, 0.6, 0),
            new THREE.Vector3(-1.1, 0, 0),
            new THREE.Vector3(-0.8, -0.6, 0),
            new THREE.Vector3(-0.4, -1.1, 0),
          ])
        );
        group.add(new THREE.Line(geoL, matViolet));

        // }
        const geoR = registerDisposable(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0.4, 1.1, 0),
            new THREE.Vector3(0.8, 0.6, 0),
            new THREE.Vector3(1.1, 0, 0),
            new THREE.Vector3(0.8, -0.6, 0),
            new THREE.Vector3(0.4, -1.1, 0),
          ])
        );
        group.add(new THREE.Line(geoR, matViolet));
      } else if (type === "()") {
        // (
        const arcLeft: THREE.Vector3[] = [];
        for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.15) {
          arcLeft.push(new THREE.Vector3(-0.7 + Math.cos(a) * 0.45, Math.sin(a) * 1.1, 0));
        }
        const geoL = registerDisposable(new THREE.BufferGeometry().setFromPoints(arcLeft));
        group.add(new THREE.Line(geoL, matCyan));

        // )
        const arcRight: THREE.Vector3[] = [];
        for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.15) {
          arcRight.push(new THREE.Vector3(0.7 - Math.cos(a) * 0.45, Math.sin(a) * 1.1, 0));
        }
        const geoR = registerDisposable(new THREE.BufferGeometry().setFromPoints(arcRight));
        group.add(new THREE.Line(geoR, matCyan));
      } else {
        // =>
        const geoArrow = registerDisposable(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-1.2, 0.3, 0),
            new THREE.Vector3(0.8, 0.3, 0),
            new THREE.Vector3(0.3, 0.9, 0),
            new THREE.Vector3(1.5, 0, 0),
            new THREE.Vector3(0.3, -0.9, 0),
            new THREE.Vector3(0.8, -0.3, 0),
            new THREE.Vector3(-1.2, -0.3, 0),
          ])
        );
        group.add(new THREE.Line(geoArrow, matCyan));
      }

      group.position.copy(position);
      group.scale.setScalar(scale);
      scene.add(group);
      return group;
    }

    const symbols = fullScreen
      ? [
          createCodeSymbol(new THREE.Vector3(17, 5, 10), 3.4, "</>"),
          createCodeSymbol(new THREE.Vector3(-14, -5, 4), 2.8, "{}"),
          createCodeSymbol(new THREE.Vector3(12, -7, -26), 2.4, "()"),
          createCodeSymbol(new THREE.Vector3(-16, 7, -58), 3.2, "</>"),
          createCodeSymbol(new THREE.Vector3(14, 3, -88), 2.8, "{}"),
          createCodeSymbol(new THREE.Vector3(-9, -6, -120), 3.4, "</>"),
          createCodeSymbol(new THREE.Vector3(15, 6, -150), 2.6, "()"),
        ]
      : [
          createCodeSymbol(new THREE.Vector3(6.5, 3.2, 8), 2.2, "</>"),
          createCodeSymbol(new THREE.Vector3(-6.5, -3.0, 7), 2.0, "{}"),
          createCodeSymbol(new THREE.Vector3(5.8, -3.5, 6), 1.8, "()"),
          createCodeSymbol(new THREE.Vector3(-5.8, 3.5, 5), 1.8, "=>"),
        ];

    // 7. Floating Code Editor Screens with 3D Circular Orbit Movement
    function createScreenTexture(title = "ApexEngine.tsx", tag = "TypeScript") {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 320;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.Texture();

      // Deep frosted glass background
      ctx.fillStyle = "rgba(10, 16, 42, 0.95)";
      ctx.fillRect(0, 0, 512, 320);

      // Window top bar
      ctx.fillStyle = "rgba(30, 48, 110, 0.5)";
      ctx.fillRect(0, 0, 512, 30);

      // Mac control dots
      const dots = ["#f87171", "#fbbf24", "#34d399"];
      dots.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(16 + i * 16, 15, 4.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Window title
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 11px monospace";
      ctx.fillText(title, 76, 19);

      // Window tag pill
      ctx.fillStyle = "rgba(6, 182, 212, 0.25)";
      ctx.fillRect(405, 7, 95, 17);
      ctx.fillStyle = "#22d3ee";
      ctx.font = "bold 9px monospace";
      ctx.fillText(tag, 415, 19);

      // Syntax highlighted lines
      const lineColors = ["#38bdf8", "#818cf8", "#c084fc", "#67e8f9", "#93c5fd", "#34d399", "#f43f5e"];
      for (let i = 0; i < 13; i++) {
        const y = 48 + i * 19;
        const indent = i % 3 === 1 ? 24 : i % 3 === 2 ? 48 : 0;
        ctx.globalAlpha = 0.55 + Math.random() * 0.4;
        ctx.fillStyle = lineColors[(i * 2) % lineColors.length];
        ctx.fillRect(20 + indent, y, 50 + Math.random() * 160, 8);

        if (Math.random() > 0.3) {
          ctx.fillStyle = lineColors[(i * 3 + 1) % lineColors.length];
          ctx.fillRect(80 + indent + Math.random() * 120, y, 40 + Math.random() * 70, 8);
        }
      }
      ctx.globalAlpha = 1;

      // Outer glowing cyan border
      ctx.strokeStyle = "rgba(56, 189, 248, 0.55)";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(1, 1, 510, 318);

      return registerDisposable(new THREE.CanvasTexture(canvas));
    }

    interface OrbitScreenItem {
      group: THREE.Group;
      getCenter: () => THREE.Vector3;
      radiusX: number;
      radiusZ: number;
      baseAngle: number;
      speed: number;
      floatSpeed: number;
      tiltAmp: number;
      yOffset: number;
    }

    const orbitScreens: OrbitScreenItem[] = [];

    function createCircularScreen(
      getCenter: () => THREE.Vector3,
      radiusX: number,
      radiusZ: number,
      baseAngle: number,
      speed: number,
      title: string,
      tag: string,
      yOffset = 0,
      scale = 1
    ) {
      const group = new THREE.Group();
      const geo = registerDisposable(new THREE.PlaneGeometry(4.6 * scale, 2.85 * scale));
      const mat = registerDisposable(
        new THREE.MeshBasicMaterial({
          map: createScreenTexture(title, tag),
          transparent: true,
          opacity: 0.82,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        })
      );
      group.add(new THREE.Mesh(geo, mat));

      // Perimeter glow edges
      const edges = registerDisposable(new THREE.EdgesGeometry(geo));
      group.add(new THREE.LineSegments(edges, createLineMaterial(0x38bdf8, 0.6)));

      scene.add(group);

      const item: OrbitScreenItem = {
        group,
        getCenter,
        radiusX,
        radiusZ,
        baseAngle,
        speed,
        floatSpeed: 0.6 + Math.random() * 0.4,
        tiltAmp: 0.08,
        yOffset,
      };
      orbitScreens.push(item);
      return item;
    }

    if (fullScreen) {
      // 1) Circular Orbit around Central Neural Engine (Hero Viewport) - 4 screens orbiting in a circle
      const heroTitles = [
        { title: "NextApp.tsx", tag: "React 19" },
        { title: "neural_core.py", tag: "AI Lattice" },
        { title: "seo_schema.ts", tag: "Structured" },
        { title: "growth_crm.sql", tag: "PostgreSQL" },
      ];
      heroTitles.forEach((t, i) => {
        createCircularScreen(
          () => neuralGroup.position,
          8.6,
          6.8,
          (i / 4) * Math.PI * 2,
          0.22,
          t.title,
          t.tag,
          i % 2 === 0 ? 0.4 : -0.3,
          1.0
        );
      });

      // 2) Circular Orbit around Secondary Neural Core (Services Overview, z = -34) - 3 screens in a ring
      const serviceTitles = [
        { title: "DigitalStrategy.ts", tag: "Growth" },
        { title: "SmartWorkflow.ai", tag: "Automation" },
        { title: "PerformanceApi.go", tag: "Sub-ms" },
      ];
      serviceTitles.forEach((t, i) => {
        createCircularScreen(
          () => secondaryNeuralGroup.position,
          8.0,
          6.5,
          (i / 3) * Math.PI * 2,
          -0.24,
          t.title,
          t.tag,
          i % 2 === 0 ? 0.3 : -0.3,
          0.95
        );
      });

      // 3) Circular Orbit around Tertiary Quantum Node (Software & AI, z = -90) - 3 screens in a ring
      const lowerTitles = [
        { title: "CloudPipeline.yaml", tag: "Deploy" },
        { title: "ModelInference.py", tag: "LLM Ops" },
        { title: "AnalyticsQuery.sql", tag: "BigData" },
      ];
      lowerTitles.forEach((t, i) => {
        createCircularScreen(
          () => tertiaryNeuralGroup.position,
          7.6,
          6.0,
          (i / 3) * Math.PI * 2,
          0.26,
          t.title,
          t.tag,
          i % 2 === 0 ? 0.2 : -0.2,
          0.9
        );
      });
    } else {
      createCircularScreen(
        () => new THREE.Vector3(0, 0, 8),
        4.2,
        3.2,
        0,
        0.25,
        "ApexEngine.tsx",
        "Cyber 3D",
        0,
        0.8
      );
    }

    // 8. Interconnected Data Node Clusters (Neural Networks)
    function createNetworkCluster(center: THREE.Vector3, nodeCount: number, radius: number) {
      const group = new THREE.Group();
      const sphereGeo = registerDisposable(new THREE.SphereGeometry(0.18, 10, 10));
      const sphereMat = registerDisposable(
        new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.9,
        })
      );
      const nodes: THREE.Mesh[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius * (0.35 + Math.random() * 0.65);
        const nodeMesh = new THREE.Mesh(sphereGeo, sphereMat);
        nodeMesh.position.set(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );
        nodes.push(nodeMesh);
        group.add(nodeMesh);
      }

      // Connection lines
      const lineMat = createLineMaterial(0x38bdf8, 0.2);
      for (let i = 0; i < nodes.length; i++) {
        const neighbors = nodes
          .map((nd, idx) => ({ idx, dist: nodes[i].position.distanceTo(nd.position) }))
          .filter((item) => item.idx !== i)
          .sort((a, b) => a.dist - b.dist);

        for (let k = 0; k < Math.min(2, neighbors.length); k++) {
          const lineGeo = registerDisposable(
            new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[neighbors[k].idx].position,
            ])
          );
          group.add(new THREE.Line(lineGeo, lineMat));
        }
      }

      group.position.copy(center);
      scene.add(group);
      return group;
    }

    const networks = fullScreen
      ? [
          createNetworkCluster(new THREE.Vector3(0, 0, -36), 24, 10),
          createNetworkCluster(new THREE.Vector3(-7, -3, -78), 18, 8),
          createNetworkCluster(new THREE.Vector3(6, 4, -120), 20, 9),
        ]
      : [createNetworkCluster(new THREE.Vector3(-5.5, -1.0, 7), 14, 4)];

    // 9. Wireframe Rotating Gears
    function createGear(position: THREE.Vector3, innerR: number, outerR: number, teeth: number) {
      const points: THREE.Vector3[] = [];
      const step = (Math.PI * 2) / (teeth * 2);

      for (let i = 0; i < teeth; i++) {
        const a = (i / teeth) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(a - step) * innerR, Math.sin(a - step) * innerR, 0));
        points.push(new THREE.Vector3(Math.cos(a - step * 0.55) * outerR, Math.sin(a - step * 0.55) * outerR, 0));
        points.push(new THREE.Vector3(Math.cos(a + step * 0.55) * outerR, Math.sin(a + step * 0.55) * outerR, 0));
        points.push(new THREE.Vector3(Math.cos(a + step) * innerR, Math.sin(a + step) * innerR, 0));
      }
      points.push(points[0].clone());

      const geo = registerDisposable(new THREE.BufferGeometry().setFromPoints(points));
      const gear = new THREE.Line(geo, createLineMaterial(0x818cf8, 0.45));
      gear.position.copy(position);
      scene.add(gear);
      return gear;
    }

    const gears = fullScreen
      ? [
          createGear(new THREE.Vector3(20, -5, -30), 2.2, 3.2, 14),
          createGear(new THREE.Vector3(-20, 8, -55), 1.7, 2.7, 11),
          createGear(new THREE.Vector3(17, 5, -86), 1.4, 2.2, 9),
          createGear(new THREE.Vector3(-15, -6, -115), 1.9, 2.9, 12),
        ]
      : [createGear(new THREE.Vector3(6.5, -1.5, 7), 1.5, 2.3, 12)];

    // 10. Mouse & Pointer drag interaction with spring damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    const dragDelta = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const cx = fullScreen ? window.innerWidth : rect.width;
      const cy = fullScreen ? window.innerHeight : rect.height;
      const clientX = fullScreen ? e.clientX : e.clientX - rect.left;
      const clientY = fullScreen ? e.clientY : e.clientY - rect.top;

      mouse.targetX = (clientX / cx - 0.5) * 2;
      mouse.targetY = (clientY / cy - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevPointer.x;
      const dy = e.clientY - prevPointer.y;
      dragDelta.x += dx * 0.006;
      dragDelta.y += dy * 0.006;
      prevPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // 11. Scroll tracking for camera fly-through
    let scrollProgress = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 12. Resize listener
    const handleResize = () => {
      if (!currentMount) return;
      width = fullScreen ? window.innerWidth : currentMount.clientWidth;
      height = fullScreen ? window.innerHeight : currentMount.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (composer) {
        composer.setSize(width, height);
      }
      updateNeuralPosition();
    };
    window.addEventListener("resize", handleResize);

    // 13. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth spring damping for mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // Drag inertia damping
      dragDelta.x *= 0.94;
      dragDelta.y *= 0.94;

      // Scroll-driven camera fly-through in fullScreen mode, or interactive focal point in container mode
      const targetZ = fullScreen ? 32 - scrollProgress * 180 : 20;
      camera.position.z += (targetZ - camera.position.z) * 0.06;

      // Ambient 3D circular orbital screen/camera drift
      const circleAngle = elapsed * 0.35;
      const circleCameraX = Math.cos(circleAngle) * (fullScreen ? 2.2 : 1.2);
      const circleCameraY = Math.sin(circleAngle) * (fullScreen ? 1.5 : 0.8);

      camera.position.x += (circleCameraX + mouse.x * (fullScreen ? 4.0 : 2.5) - camera.position.x) * 0.04;
      camera.position.y += (circleCameraY - mouse.y * (fullScreen ? 3.0 : 2.0) - camera.position.y) * 0.04;

      if (fullScreen) {
        camera.lookAt(camera.position.x * 0.35, camera.position.y * 0.35, camera.position.z - 15);
      } else {
        camera.lookAt(0, 0, 8);
      }

      // Orbit particles slowly
      particles.rotation.y = elapsed * 0.018;
      particles.rotation.x = Math.sin(elapsed * 0.01) * 0.06;

      // Animate Central 3D Neural Engine Core
      neuralGroup.rotation.y += 0.0035 + dragDelta.x;
      neuralGroup.rotation.x = Math.sin(elapsed * 0.25) * 0.15 + mouse.y * 0.25 + dragDelta.y;
      outerCageMesh.rotation.y = -elapsed * 0.18;
      outerCageMesh.rotation.z = elapsed * 0.12;
      innerCore.rotation.y = -elapsed * 0.45;
      innerCore.rotation.z = elapsed * 0.25;
      ringMesh1.rotation.z = elapsed * 0.22;
      ringMesh2.rotation.z = -elapsed * 0.18;

      // Subtle breathing scale pulse
      neuralGroup.scale.setScalar(1 + Math.sin(elapsed * 1.5) * 0.035);

      // Animate secondary and tertiary neural cores along the scroll path
      secondaryNeuralGroup.rotation.y = elapsed * 0.28;
      secondaryNeuralGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.2;
      secRingMesh.rotation.z = -elapsed * 0.25;
      secCoreMesh.rotation.y = -elapsed * 0.4;

      tertiaryNeuralGroup.rotation.y = -elapsed * 0.22;
      tertiaryNeuralGroup.rotation.z = Math.cos(elapsed * 0.25) * 0.15;

      // Orbit synaptic data photons along rings
      photons.forEach((p, i) => {
        const ringIdx = i % 2;
        const radius = ringIdx === 0 ? coreRadius * 1.36 : coreRadius * 1.52;
        const angle = elapsed * (ringIdx === 0 ? 1.5 : -1.2) + i * (Math.PI / 3);
        if (ringIdx === 0) {
          p.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.7, Math.sin(angle) * radius * 0.5);
        } else {
          p.position.set(Math.cos(angle) * radius * 0.8, Math.sin(angle) * radius, -Math.cos(angle) * radius * 0.6);
        }
      });

      // Animate code symbols
      symbols.forEach((sym, i) => {
        const speed = 0.2 + i * 0.04;
        sym.rotation.y += 0.0035 * speed;
        sym.rotation.x = Math.sin(elapsed * speed * 0.5) * 0.16;
        sym.position.y += Math.sin(elapsed * speed + i) * 0.0018;
      });

      // Animate 3D circular screen movement in orbital trajectories
      orbitScreens.forEach((scr) => {
        const center = scr.getCenter();
        const angle = scr.baseAngle + elapsed * scr.speed + dragDelta.x * 1.8;
        scr.group.position.x = center.x + Math.sin(angle) * scr.radiusX;
        scr.group.position.z = center.z + Math.cos(angle) * scr.radiusZ;
        scr.group.position.y = center.y + scr.yOffset + Math.sin(elapsed * scr.floatSpeed + scr.baseAngle) * 0.45;

        // Orient screens facing along the orbital curve towards the viewer
        scr.group.rotation.y = angle + Math.PI / 2;
        scr.group.rotation.x = Math.sin(elapsed * 0.4 + scr.baseAngle) * scr.tiltAmp;
        scr.group.rotation.z = Math.cos(elapsed * 0.35 + scr.baseAngle) * 0.05;
      });

      // Rotate network clusters
      networks.forEach((net, i) => {
        net.rotation.y = elapsed * 0.045 * (i % 2 === 0 ? 1 : -1);
        net.rotation.x = Math.sin(elapsed * 0.03 + i) * 0.09;
      });

      // Spin gears
      gears.forEach((gear, i) => {
        gear.rotation.z += 0.0045 * (i % 2 === 0 ? 1 : -1);
      });

      // Moving dynamic lights follow camera
      lightCyan.position.set(
        Math.sin(elapsed * 0.3) * 16,
        Math.cos(elapsed * 0.22) * 12,
        camera.position.z + 10
      );
      lightBlue.position.set(
        Math.cos(elapsed * 0.25) * 14,
        Math.sin(elapsed * 0.35) * 10,
        camera.position.z - 10
      );
      lightSoft.position.set(mouse.x * 12, -mouse.y * 10 + 4, camera.position.z + 14);

      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, [fullScreen]);

  return (
    <div
      ref={mountRef}
      className={
        fullScreen
          ? `fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`
          : `relative w-full h-full overflow-hidden ${className}`
      }
    />
  );
}
