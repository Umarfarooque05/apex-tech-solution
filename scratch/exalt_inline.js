
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
    }
    

// --- NEXT SCRIPT ---


        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        /* ------------------------------------------------
           INITIAL SETUP (RENDERER WITH TRANSPARENT ALPHA)
           ------------------------------------------------ */
        const container = document.getElementById('webgl-canvas');
        const scrollWrap = document.getElementById('scroll-wrap');

        const scene = new THREE.Scene();
        // Softer atmospheric fog that blends naturally with the luminous CSS backdrop
        scene.fog = new THREE.FogExp2(0x0c1333, 0.007);

        const camera = new THREE.PerspectiveCamera(
            52,
            window.innerWidth / window.innerHeight,
            0.1,
            600
        );
        camera.position.set(0, 0, 32);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true, // Transparent canvas lets the rich multi-tone CSS gradient shine through
            powerPreference: 'high-performance',
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0); // Transparent clear
        container.appendChild(renderer.domElement);

        /* ------------------------------------------------
           POST-PROCESSING: GLOWING BLOOM
           ------------------------------------------------ */
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloom = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.85,  // Bloom strength
            0.4,   // Radius
            0.75   // Threshold
        );
        composer.addPass(bloom);

        /* ------------------------------------------------
           LIGHTING: BRIGHT DUAL-TONE HIGHLIGHTS
           ------------------------------------------------ */
        // High-ambient luminosity ensures geometries don't sink into darkness
        const ambientLight = new THREE.AmbientLight(0x2d3a6d, 0.95);
        scene.add(ambientLight);

        // Radiant Electric Cyan Light
        const lightCyan = new THREE.PointLight(0x38bdf8, 2.4, 160);
        lightCyan.position.set(12, 14, 25);
        scene.add(lightCyan);

        // Royal Sapphire Blue Light
        const lightBlue = new THREE.PointLight(0x3b82f6, 2.0, 150);
        lightBlue.position.set(-14, -10, 20);
        scene.add(lightBlue);

        // Radiant Soft White / Lavender Highlight
        const lightSoft = new THREE.PointLight(0xe0f2fe, 1.8, 120);
        lightSoft.position.set(0, 8, 30);
        scene.add(lightSoft);

        /* ------------------------------------------------
           1) DUAL-COLOR STARFIELD & FLOATING PARTICLES
           ------------------------------------------------ */
        function createParticleField(count) {
            const geo = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);

            // Palette mixing bright cyan, royal blue, daylight white, and soft violet
            const palette = [
                new THREE.Color(0x38bdf8),
                new THREE.Color(0x60a5fa),
                new THREE.Color(0xc084fc),
                new THREE.Color(0xffffff),
                new THREE.Color(0x93c5fd),
            ];

            for (let i = 0; i < count; i++) {
                positions[i * 3]     = (Math.random() - 0.5) * 140;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 110;
                positions[i * 3 + 2] = Math.random() * -240 + 40;

                const c = palette[Math.floor(Math.random() * palette.length)];
                colors[i * 3]     = c.r;
                colors[i * 3 + 1] = c.g;
                colors[i * 3 + 2] = c.b;
            }

            geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const mat = new THREE.PointsMaterial({
                size: 0.16,
                vertexColors: true,
                transparent: true,
                opacity: 0.85,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                sizeAttenuation: true,
            });

            const points = new THREE.Points(geo, mat);
            scene.add(points);
            return points;
        }

        const particles = createParticleField(4500);

        /* ------------------------------------------------
           2) CODE SYMBOLS (</>, {}, (), =>)
           ------------------------------------------------ */
        function createLineMaterial(colorHex, opacity = 0.65) {
            return new THREE.LineBasicMaterial({
                color: colorHex,
                transparent: true,
                opacity: opacity,
                blending: THREE.AdditiveBlending,
            });
        }

        function createCodeSymbol(position, scale, type) {
            const group = new THREE.Group();
            const matCyan = createLineMaterial(0x38bdf8, 0.7);
            const matViolet = createLineMaterial(0xa855f7, 0.65);

            if (type === '</>') {
                // <
                group.add(new THREE.Line(
                    new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(-0.6, 1.1, 0),
                        new THREE.Vector3(-1.6, 0, 0),
                        new THREE.Vector3(-0.6, -1.1, 0),
                    ]),
                    matCyan
                ));
                
                group.add(new THREE.Line(
                    new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(0.35, 1.1, 0),
                        new THREE.Vector3(-0.35, -1.1, 0),
                    ]),
                    matCyan
                ));
                // >
                group.add(new THREE.Line(
                    new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(0.6, 1.1, 0),
                        new THREE.Vector3(1.6, 0, 0),
                        new THREE.Vector3(0.6, -1.1, 0),
                    ]),
                    matCyan
                ));
            } else if (type === '{}') {
                // {
                group.add(new THREE.Line(
                    new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(-0.4, 1.1, 0),
                        new THREE.Vector3(-0.8, 0.6, 0),
                        new THREE.Vector3(-1.1, 0, 0),
                        new THREE.Vector3(-0.8, -0.6, 0),
                        new THREE.Vector3(-0.4, -1.1, 0),
                    ]),
                    matViolet
                ));
                // }
                group.add(new THREE.Line(
                    new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(0.4, 1.1, 0),
                        new THREE.Vector3(0.8, 0.6, 0),
                        new THREE.Vector3(1.1, 0, 0),
                        new THREE.Vector3(0.8, -0.6, 0),
                        new THREE.Vector3(0.4, -1.1, 0),
                    ]),
                    matViolet
                ));
            } else {
                // ()
                const arcLeft = [];
                for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.15) {
                    arcLeft.push(new THREE.Vector3(-0.7 + Math.cos(a) * 0.45, Math.sin(a) * 1.1, 0));
                }
                group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arcLeft), matCyan));

                const arcRight = [];
                for (let a = -Math.PI / 2; a <= Math.PI / 2; a += 0.15) {
                    arcRight.push(new THREE.Vector3(0.7 - Math.cos(a) * 0.45, Math.sin(a) * 1.1, 0));
                }
                group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arcRight), matCyan));
            }

            group.position.copy(position);
            group.scale.setScalar(scale);
            scene.add(group);
            return group;
        }

        const symbols = [
            createCodeSymbol(new THREE.Vector3( 17,  5,  10), 3.4, '</>'),
            createCodeSymbol(new THREE.Vector3(-14, -5,   4), 2.8, '{}'),
            createCodeSymbol(new THREE.Vector3( 12, -7, -26), 2.4, '()'),
            createCodeSymbol(new THREE.Vector3(-16,  7, -58), 3.2, '</>'),
            createCodeSymbol(new THREE.Vector3( 14,  3, -88), 2.8, '{}'),
            createCodeSymbol(new THREE.Vector3( -9, -6,-120), 3.4, '</>'),
            createCodeSymbol(new THREE.Vector3( 15,  6,-150), 2.6, '()'),
        ];

        /* ------------------------------------------------
           3) FLOATING CODE EDITORS / GLASS SCREENS
           ------------------------------------------------ */
        function createScreenTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 320;
            const ctx = canvas.getContext('2d');

            // Frosted background with soft light tone
            ctx.fillStyle = 'rgba(14, 22, 54, 0.94)';
            ctx.fillRect(0, 0, 512, 320);

            // Window top bar
            ctx.fillStyle = 'rgba(40, 65, 135, 0.35)';
            ctx.fillRect(0, 0, 512, 20);

            // Mac-style window controls
            const dots = ['#f87171', '#fbbf24', '#34d399'];
            dots.forEach((color, i) => {
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(16 + i * 16, 10, 4, 0, Math.PI * 2);
                ctx.fill();
            });

            // Simulated syntax highlighting code lines
            const lineColors = ['#38bdf8', '#818cf8', '#c084fc', '#67e8f9', '#93c5fd', '#34d399'];
            for (let i = 0; i < 15; i++) {
                const y = 34 + i * 18;
                const indent = Math.floor(Math.random() * 4) * 20;
                ctx.globalAlpha = 0.4 + Math.random() * 0.5;
                ctx.fillStyle = lineColors[Math.floor(Math.random() * lineColors.length)];
                ctx.fillRect(20 + indent, y, 60 + Math.random() * 190, 8);

                if (Math.random() > 0.4) {
                    ctx.fillStyle = lineColors[Math.floor(Math.random() * lineColors.length)];
                    ctx.fillRect(90 + indent + Math.random() * 130, y, 30 + Math.random() * 70, 8);
                }
            }
            ctx.globalAlpha = 1;

            // Sleek glowing border
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
            ctx.lineWidth = 2;
            ctx.strokeRect(1, 1, 510, 318);

            return new THREE.CanvasTexture(canvas);
        }

        function createScreenObject(position, rotY) {
            const group = new THREE.Group();
            const geo = new THREE.PlaneGeometry(4.4, 2.75);
            const mat = new THREE.MeshBasicMaterial({
                map: createScreenTexture(),
                transparent: true,
                opacity: 0.72,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
            });
            group.add(new THREE.Mesh(geo, mat));

            // Wireframe perimeter glow
            const edges = new THREE.EdgesGeometry(geo);
            group.add(new THREE.LineSegments(
                edges,
                createLineMaterial(0x38bdf8, 0.4)
            ));

            group.position.copy(position);
            group.rotation.y = rotY || 0;
            scene.add(group);
            return group;
        }

        const screens = [
            createScreenObject(new THREE.Vector3( -9,  3, -16),  0.22),
            createScreenObject(new THREE.Vector3( 12, -2, -44), -0.25),
            createScreenObject(new THREE.Vector3( -8,  4, -72),  0.18),
            createScreenObject(new THREE.Vector3( 13,  1,-100), -0.28),
            createScreenObject(new THREE.Vector3( -6, -4,-135),  0.20),
        ];

        /* ------------------------------------------------
           4) INTERCONNECTED DATA NODE CLUSTERS
           ------------------------------------------------ */
        function createNetworkCluster(center, nodeCount, radius) {
            const group = new THREE.Group();
            const sphereGeo = new THREE.SphereGeometry(0.18, 10, 10);
            const sphereMat = new THREE.MeshBasicMaterial({
                color: 0x38bdf8,
                transparent: true,
                opacity: 0.9,
            });
            const nodes = [];

            for (let i = 0; i < nodeCount; i++) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const r = radius * (0.35 + Math.random() * 0.65);
                const nodeMesh = new THREE.Mesh(sphereGeo, sphereMat.clone());
                nodeMesh.position.set(
                    r * Math.sin(phi) * Math.cos(theta),
                    r * Math.sin(phi) * Math.sin(theta),
                    r * Math.cos(phi)
                );
                nodes.push(nodeMesh);
                group.add(nodeMesh);
            }

            // Connection lines between nearby nodes
            const lineMat = createLineMaterial(0x38bdf8, 0.18);
            for (let i = 0; i < nodes.length; i++) {
                const neighbors = nodes
                    .map((nd, idx) => ({ idx, dist: nodes[i].position.distanceTo(nd.position) }))
                    .filter(item => item.idx !== i)
                    .sort((a, b) => a.dist - b.dist);

                for (let k = 0; k < Math.min(2, neighbors.length); k++) {
                    group.add(new THREE.Line(
                        new THREE.BufferGeometry().setFromPoints([
                            nodes[i].position,
                            nodes[neighbors[k].idx].position
                        ]),
                        lineMat
                    ));
                }
            }

            group.position.copy(center);
            scene.add(group);
            return group;
        }

        const networks = [
            createNetworkCluster(new THREE.Vector3(  0,  0, -36), 24, 10),
            createNetworkCluster(new THREE.Vector3( -7, -3, -78), 18,  8),
            createNetworkCluster(new THREE.Vector3(  6,  4,-120), 20,  9),
        ];

        /* ------------------------------------------------
           5) WIREFRAME ROTATING GEARS
           ------------------------------------------------ */
        function createGear(position, innerR, outerR, teeth) {
            const points = [];
            const step = (Math.PI * 2) / (teeth * 2);

            for (let i = 0; i < teeth; i++) {
                const a = (i / teeth) * Math.PI * 2;
                points.push(new THREE.Vector3(Math.cos(a - step) * innerR, Math.sin(a - step) * innerR, 0));
                points.push(new THREE.Vector3(Math.cos(a - step * 0.55) * outerR, Math.sin(a - step * 0.55) * outerR, 0));
                points.push(new THREE.Vector3(Math.cos(a + step * 0.55) * outerR, Math.sin(a + step * 0.55) * outerR, 0));
                points.push(new THREE.Vector3(Math.cos(a + step) * innerR, Math.sin(a + step) * innerR, 0));
            }
            points.push(points[0].clone()); // Close path

            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const gear = new THREE.Line(geo, createLineMaterial(0x818cf8, 0.4));
            gear.position.copy(position);
            scene.add(gear);
            return gear;
        }

        const gears = [
            createGear(new THREE.Vector3( 20, -5, -30), 2.2, 3.2, 14),
            createGear(new THREE.Vector3(-20,  8, -55), 1.7, 2.7, 11),
            createGear(new THREE.Vector3( 17,  5, -86), 1.4, 2.2,  9),
            createGear(new THREE.Vector3(-15, -6,-115), 1.9, 2.9, 12),
        ];

        /* ------------------------------------------------
           MOUSE INTERACTION & SPRING DAMPING
           ------------------------------------------------ */
        const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
        window.addEventListener('mousemove', e => {
            mouse.targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
            mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        /* ------------------------------------------------
           SCROLL TRACKING FOR CAMERA FLY-THROUGH
           ------------------------------------------------ */
        let scrollProgress = 0;
        scrollWrap.addEventListener('scroll', () => {
            const top = scrollWrap.scrollTop;
            const maxScroll = scrollWrap.scrollHeight - scrollWrap.clientHeight;
            scrollProgress = maxScroll > 0 ? top / maxScroll : 0;
        });

        /* ------------------------------------------------
           RESIZE LISTENER
           ------------------------------------------------ */
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        });

        /* ------------------------------------------------
           RENDER LOOP
           ------------------------------------------------ */
        const clock = new THREE.Clock();
        let loopStarted = false;

        function animate() {
            requestAnimationFrame(animate);

            const elapsed = clock.getElapsedTime();

            // Smooth spring damping for mouse parallax
            mouse.x += (mouse.targetX - mouse.x) * 0.045;
            mouse.y += (mouse.targetY - mouse.y) * 0.045;

            // Scroll-driven camera fly-through
            const targetZ = 32 - scrollProgress * 180;
            camera.position.z += (targetZ - camera.position.z) * 0.06;
            camera.position.x += (mouse.x * 4.0 - camera.position.x) * 0.04;
            camera.position.y += (-mouse.y * 3.0 - camera.position.y) * 0.04;
            camera.lookAt(
                camera.position.x * 0.35,
                camera.position.y * 0.35,
                camera.position.z - 15
            );

            // Orbit particles slowly
            particles.rotation.y = elapsed * 0.018;
            particles.rotation.x = Math.sin(elapsed * 0.01) * 0.06;

            // Animate code symbols
            symbols.forEach((sym, i) => {
                const speed = 0.2 + i * 0.04;
                sym.rotation.y += 0.0035 * speed;
                sym.rotation.x  = Math.sin(elapsed * speed * 0.5) * 0.16;
                sym.position.y += Math.sin(elapsed * speed + i) * 0.0018;
            });

            // Bob screens
            screens.forEach((screen, i) => {
                screen.position.y += Math.sin(elapsed * 0.3 + i * 1.6) * 0.0022;
                screen.rotation.y += Math.sin(elapsed * 0.1 + i) * 0.0008;
            });

            // Rotate networks
            networks.forEach((net, i) => {
                net.rotation.y = elapsed * 0.045 * (i % 2 === 0 ? 1 : -1);
                net.rotation.x = Math.sin(elapsed * 0.03 + i) * 0.09;
            });

            // Spin gears
            gears.forEach((gear, i) => {
                gear.rotation.z += 0.0045 * (i % 2 === 0 ? 1 : -1);
            });

            // Dynamic moving lights follow camera
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
            lightSoft.position.set(
                mouse.x * 12,
                -mouse.y * 10 + 4,
                camera.position.z + 14
            );

            composer.render();
        }

        /* ------------------------------------------------
           INITIAL LOADING BAR
           ------------------------------------------------ */
        const loader = document.getElementById('loader');
        const loaderFill = document.getElementById('loader-fill');
        let currentProgress = 0;

        const loadInterval = setInterval(() => {
            currentProgress += Math.random() * 22 + 8;
            if (currentProgress >= 100) {
                currentProgress = 100;
                loaderFill.style.width = '100%';
                clearInterval(loadInterval);
                setTimeout(() => {
                    loader.classList.add('done');
                    if (!loopStarted) {
                        loopStarted = true;
                        animate();
                    }
                    revealHero();
                }, 400);
            } else {
                loaderFill.style.width = currentProgress + '%';
            }
        }, 120);

        // Safety fallback timer (max 2s)
        setTimeout(() => {
            if (!loader.classList.contains('done')) {
                clearInterval(loadInterval);
                loader.classList.add('done');
                if (!loopStarted) {
                    loopStarted = true;
                    animate();
                }
                revealHero();
            }
        }, 2000);

        /* ------------------------------------------------
           GSAP SCROLL ANIMATIONS
           ------------------------------------------------ */
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({ scroller: '#scroll-wrap' });

        function revealHero() {
            gsap.to('#hero .rv', {
                opacity: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.16,
                ease: 'power3.out',
            });
        }

        // Section reveals
        document.querySelectorAll('.sect:not(#hero) .rv').forEach(elem => {
            gsap.to(elem, {
                opacity: 1,
                y: 0,
                duration: 0.95,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 88%',
                    end: 'top 55%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        setTimeout(() => ScrollTrigger.refresh(), 400);
    