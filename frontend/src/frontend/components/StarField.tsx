"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  hue: number;
  brightness: number;
  flicker: number;
  drift: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let embers: Ember[] = [];
    const EMBER_COUNT = 200;
    let w = 0;
    let h = 0;
    let time = 0;

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }

    function spawnEmber(onInit = false): Ember {
      const startX = Math.random() * w;
      const startY = onInit ? Math.random() * h : h + Math.random() * 40;
      const maxLife = 200 + Math.random() * 400;
      return {
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.3 + Math.random() * 1.2),
        radius: Math.random() * 2.5 + 0.3,
        life: onInit ? Math.random() * maxLife : 0,
        maxLife,
        hue: 15 + Math.random() * 30,
        brightness: 60 + Math.random() * 40,
        flicker: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.01,
      };
    }

    function init() {
      resize();
      embers = Array.from({ length: EMBER_COUNT }, () => spawnEmber(true));
    }

    function draw() {
      time++;
      ctx!.clearRect(0, 0, w, h);

      // Subtle warm glow at the bottom
      const grad = ctx!.createRadialGradient(
        w * 0.5,
        h + 80,
        0,
        w * 0.5,
        h + 80,
        h * 0.7
      );
      grad.addColorStop(0, "rgba(255, 80, 20, 0.06)");
      grad.addColorStop(0.4, "rgba(255, 50, 10, 0.02)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, w, h);

      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.life++;

        if (e.life > e.maxLife || e.y < -20) {
          embers[i] = spawnEmber(false);
          continue;
        }

        const progress = e.life / e.maxLife;
        const fadeIn = Math.min(e.life / 30, 1);
        const fadeOut = 1 - Math.pow(progress, 2);
        const alpha = fadeIn * fadeOut;

        // Turbulent drift
        e.vx += Math.sin(time * 0.02 + e.flicker) * e.drift;
        e.vx *= 0.99;
        e.x += e.vx;
        e.y += e.vy;

        // Flicker effect
        const flickerVal =
          0.7 + 0.3 * Math.sin(time * 0.15 + e.flicker * 10);
        const currentAlpha = alpha * flickerVal;

        if (currentAlpha < 0.01) continue;

        // Color shifts from white-hot → orange → red → dim as it rises
        const currentHue = e.hue + progress * 10;
        const sat = 90 + progress * 10;
        const light = e.brightness * (1 - progress * 0.5);

        // Glow
        const glowSize = e.radius * (3 + (1 - progress) * 4);
        const glow = ctx!.createRadialGradient(
          e.x,
          e.y,
          0,
          e.x,
          e.y,
          glowSize
        );
        glow.addColorStop(
          0,
          `hsla(${currentHue}, ${sat}%, ${light}%, ${currentAlpha * 0.8})`
        );
        glow.addColorStop(
          0.4,
          `hsla(${currentHue}, ${sat}%, ${light * 0.6}%, ${currentAlpha * 0.2})`
        );
        glow.addColorStop(1, `hsla(${currentHue}, ${sat}%, ${light}%, 0)`);
        ctx!.fillStyle = glow;
        ctx!.fillRect(
          e.x - glowSize,
          e.y - glowSize,
          glowSize * 2,
          glowSize * 2
        );

        // Core particle
        ctx!.beginPath();
        ctx!.arc(e.x, e.y, e.radius * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${currentHue}, ${sat}%, ${Math.min(light + 20, 100)}%, ${currentAlpha})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
