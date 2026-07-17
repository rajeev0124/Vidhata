/* =========================================================
   VIDHATA PLASTICS — INTERACTIVE 3D DNA HELIX BACKGROUND
   js/dna-helix.js
   ========================================================= */

'use strict';

(function() {
  const canvas = document.getElementById('dna-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;

  // Configuration settings
  const settings = {
    nodesCount: 50,      // Number of base pairs
    radius: 120,         // Helix radius in 3D
    heightFactor: 0.85,  // Vertical scale multiplier
    perspective: 800,    // Camera perspective distance
    speed: 0.005,        // Auto spin speed
    rungOpacityMultiplier: 0.35,
    nodeSize: 4.5,       // Max node radius (front)
    floatingCount: 30    // Floating molecular dust count
  };

  // Interaction State variables
  let rotationY = 0;
  let targetScrollOffset = 0;
  let scrollOffset = 0;
  
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;
  
  let isMobile = false;

  // Responsive scale configurations
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    isMobile = width < 992;
    
    if (isMobile) {
      settings.radius = Math.min(55, width * 0.14);
      settings.nodesCount = 35;
      settings.nodeSize = 3.2;
      settings.floatingCount = 15;
    } else {
      settings.radius = Math.min(125, width * 0.09);
      settings.nodesCount = 52;
      settings.nodeSize = 4.8;
      settings.floatingCount = 32;
    }
  }

  // Mouse interactivity listener (normalized coordinate mapping)
  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
  });

  // Scroll rotation mapping
  window.addEventListener('scroll', () => {
    targetScrollOffset = window.scrollY * 0.0022;
  }, { passive: true });

  // Floating chemical bonds (dust particles)
  class FloatingParticle {
    constructor() {
      this.reset();
      // Pre-distribute vertically to avoid spawning clumped at the start
      this.y = Math.random() * height - height / 2;
    }

    reset() {
      this.x = (Math.random() - 0.5) * settings.radius * 6;
      this.y = -height / 2 - 50; 
      this.z = (Math.random() - 0.5) * settings.perspective * 1.5;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = Math.random() * 0.25 + 0.12;
      this.size = Math.random() * 2.2 + 0.8;
      this.opacity = Math.random() * 0.35 + 0.08;
      // Assign either a sky-blue or golden-amber hue
      this.color = Math.random() > 0.4 ? 'rgba(14, 165, 233,' : 'rgba(217, 119, 6,';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.y > height / 2 + 50) {
        this.reset();
      }
    }
  }

  const floatingParticles = [];
  resize();

  // Populate floating background particles
  for (let i = 0; i < settings.floatingCount; i++) {
    floatingParticles.push(new FloatingParticle());
  }
  
  // Throttle resize triggers
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 80);
  });

  // Animation draw loop
  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Apply linear interpolation (lerp) for smooth motion tracking
    scrollOffset += (targetScrollOffset - scrollOffset) * 0.07;
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    rotationY += settings.speed;
    const finalRotY = rotationY + scrollOffset;

    // Desktop: Shift right to occupy whitespace. Mobile: Center on screen
    const centerX = isMobile ? width * 0.5 : width * 0.72;
    const centerY = height * 0.5;

    // Render Queue to implement depth-based sorting (Painters Algorithm)
    const drawQueue = [];

    // Projection calculation: 3D -> 2D Perspective Screen Coordinate mapping
    function project(x, y, z) {
      const scale = settings.perspective / (settings.perspective + z);
      const projX = x * scale + centerX;
      const projY = y * scale + centerY;
      return { x: projX, y: projY, scale, z };
    }

    const basePairs = [];
    const stepAngle = (Math.PI * 5) / settings.nodesCount; // 2.5 full helix twists

    // 1. Calculate Helix Points
    for (let i = 0; i < settings.nodesCount; i++) {
      const theta = i * stepAngle;
      
      const x1_raw = settings.radius * Math.cos(theta);
      const z1_raw = settings.radius * Math.sin(theta);
      
      const x2_raw = settings.radius * Math.cos(theta + Math.PI);
      const z2_raw = settings.radius * Math.PI; // Correct offset phase shift to form double helix

      // Double check offset
      const x2_calc = settings.radius * Math.cos(theta + Math.PI);
      const z2_calc = settings.radius * Math.sin(theta + Math.PI);

      const y_raw = (i / settings.nodesCount - 0.5) * height * settings.heightFactor;

      // Apply rotation on Y axis (spinning)
      let x1 = x1_raw * Math.cos(finalRotY) - z1_raw * Math.sin(finalRotY);
      let z1 = x1_raw * Math.sin(finalRotY) + z1_raw * Math.cos(finalRotY);
      
      let x2 = x2_calc * Math.cos(finalRotY) - z2_calc * Math.sin(finalRotY);
      let z2 = x2_calc * Math.sin(finalRotY) + z2_calc * Math.cos(finalRotY);

      // Apply mouse coordinates to viewport rotations (pitch / roll)
      const pitch = mouseY * 0.22;
      const roll = mouseX * 0.12;

      const y1_r = y_raw * Math.cos(pitch) - z1 * Math.sin(pitch);
      const z1_r = y_raw * Math.sin(pitch) + z1 * Math.cos(pitch);

      const y2_r = y_raw * Math.cos(pitch) - z2 * Math.sin(pitch);
      const z2_r = y_raw * Math.sin(pitch) + z2 * Math.cos(pitch);

      const p1 = project(x1, y1_r, z1_r);
      const p2 = project(x2, y2_r, z2_r);

      basePairs.push({ p1, p2, index: i });
    }

    // 2. Queue Rungs (Horizontal linking base pairs)
    basePairs.forEach(bp => {
      const avgZ = (bp.p1.z + bp.p2.z) / 2;

      drawQueue.push({
        type: 'rung',
        z: avgZ,
        p1: bp.p1,
        p2: bp.p2
      });

      drawQueue.push({
        type: 'node',
        z: bp.p1.z,
        p: bp.p1,
        color: 'rgba(14, 165, 233, ' // Teal / Sky Blue
      });

      drawQueue.push({
        type: 'node',
        z: bp.p2.z,
        p: bp.p2,
        color: 'rgba(217, 119, 6, ' // Gold / Amber
      });
    });

    // 3. Queue Floating molecular dust
    floatingParticles.forEach(fp => {
      // Add slight parallax based on mouse
      const px = fp.x + mouseX * 25;
      const py = fp.y + mouseY * 25;
      const p = project(px, py, fp.z);

      drawQueue.push({
        type: 'particle',
        z: fp.z,
        p,
        opacity: fp.opacity,
        size: fp.size,
        color: fp.color
      });
    });

    // 4. Sort rendering objects by Z depth
    drawQueue.sort((a, b) => b.z - a.z);

    // 5. Draw elements sequentially (far objects drawn first)
    drawQueue.forEach(item => {
      // Calculate opacity and scaling multiplier based on depth Z position
      const relativeDepth = (settings.perspective - item.z) / (settings.perspective * 2);
      const depthOpacity = Math.max(0.04, Math.min(1, relativeDepth));

      if (item.type === 'rung') {
        const opacity = depthOpacity * settings.rungOpacityMultiplier;
        
        ctx.beginPath();
        ctx.moveTo(item.p1.x, item.p1.y);
        ctx.lineTo(item.p2.x, item.p2.y);

        // Blended color gradient across the chemical base-pair rungs
        const grad = ctx.createLinearGradient(item.p1.x, item.p1.y, item.p2.x, item.p2.y);
        grad.addColorStop(0, `rgba(14, 165, 233, ${opacity})`);
        grad.addColorStop(0.5, `rgba(125, 142, 120, ${opacity * 0.5})`);
        grad.addColorStop(1, `rgba(217, 119, 6, ${opacity})`);
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.3 * item.p1.scale;
        ctx.stroke();

      } else if (item.type === 'node') {
        const radius = Math.max(0.8, settings.nodeSize * item.p.scale);
        const opacity = depthOpacity;

        // Render soft glowing aura for front-facing nodes
        if (item.z < -50) {
          ctx.beginPath();
          const radial = ctx.createRadialGradient(item.p.x, item.p.y, 0, item.p.x, item.p.y, radius * 3.8);
          radial.addColorStop(0, item.color + opacity * 0.4 + ')');
          radial.addColorStop(1, item.color + '0)');
          ctx.fillStyle = radial;
          ctx.arc(item.p.x, item.p.y, radius * 3.8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Render solid node core
        ctx.beginPath();
        ctx.arc(item.p.x, item.p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = item.color + opacity + ')';
        ctx.fill();

      } else if (item.type === 'particle') {
        const radius = Math.max(0.5, item.size * item.p.scale);
        const opacity = item.opacity * depthOpacity;

        ctx.beginPath();
        ctx.arc(item.p.x, item.p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = item.color + opacity + ')';
        ctx.fill();
      }
    });

    animationFrameId = requestAnimationFrame(draw);
  }

  // Deactivate rendering loop when background falls out of page view window
  let isAnimating = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (!isAnimating) {
          isAnimating = true;
          draw();
        }
      } else {
        if (isAnimating) {
          isAnimating = false;
          cancelAnimationFrame(animationFrameId);
        }
      }
    });
  }, { threshold: 0.05 });

  observer.observe(canvas.parentElement || canvas);
  
})();
