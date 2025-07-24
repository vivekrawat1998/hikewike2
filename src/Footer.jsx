import React, { useEffect, useRef } from "react";

const BALL_COUNT = 60; // Increase for "so many" balls!
const COLORS = [
  "#FFD700", "#FFB300", "#90EE90", "#F87171", "#36C5F0", "#EC4899", "#0EA5E9"
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const Footer = () => {
  const canvasRef = useRef(null);
  const balls = useRef([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = 140;
    balls.current = Array.from({ length: BALL_COUNT }).map((_, i) => ({
      x: random(28, width - 28),
      y: random(-180, -30),
      radius: random(13, 30),
      vy: 0,
      color: COLORS[i % COLORS.length],
      bouncing: false,
      restY: random(height - 38, height - 15),
      floatPhase: random(0, 2 * Math.PI),
      floatAmp: random(5, 14),
      floatSpeed: random(0.5, 1.44),
      energy: random(0.57, 1.07),
      id: Math.random().toString(36)
    }));

    const ctx = canvasRef.current.getContext("2d");
    let running = true;
    let hoverIdx = null;

    function animate(t) {
      ctx.clearRect(0, 0, width, height);

      balls.current.forEach((b, idx) => {
        if (!b.bouncing) {
          b.vy += 0.72; // gravity
          b.y += b.vy;
          if (b.y + b.radius > b.restY) {
            b.y = b.restY - b.radius;
            b.vy = -b.vy * b.energy;
            if (Math.abs(b.vy) < 1.45) {
              b.bouncing = true; // start floating gently after bounce
            }
          }
        } else {
          b.y =
            b.restY -
            b.radius +
            Math.sin(t / (1130 * b.floatSpeed) + b.floatPhase) * b.floatAmp;
        }
        // Ball
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, 2 * Math.PI, false);
        const g = ctx.createRadialGradient(
          b.x - b.radius * 0.37,
          b.y - b.radius * 0.25,
          5,
          b.x,
          b.y,
          b.radius
        );
        g.addColorStop(0, "#fff9");
        g.addColorStop(0.25, b.color);
        g.addColorStop(1, "#2222");
        ctx.fillStyle = g;
        ctx.fill();
        ctx.closePath();

        ctx.save();
        ctx.globalAlpha = 0.17;
        ctx.beginPath();
        ctx.ellipse(
          b.x,
          b.restY + b.radius * 0.7,
          b.radius * 0.84,
          b.radius * 0.27,
          0,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = "#222";
        ctx.fill();
        ctx.restore();
      });

      if (running) requestAnimationFrame(animate);
    }

    function handleResize() {
      const w = window.innerWidth;
      canvasRef.current.width = w;
      balls.current.forEach((b, i) => {
        b.x = (b.x / width) * w;
      });
    }
    window.addEventListener("resize", handleResize);

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    animate(performance.now());

    // Ball hover/interaction
    function handlePointerMove(e) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      hoverIdx = balls.current.findIndex(
        (b) =>
          Math.sqrt((mx - b.x) ** 2 + (my - b.y) ** 2) <= b.radius
      );
      canvasRef.current.style.cursor =
        hoverIdx !== -1 ? "pointer" : "default";
    }
    function handlePointerLeave() {
      canvasRef.current.style.cursor = "default";
    }
    function handlePointerDown(e) {
      if (hoverIdx == null) return;
      const b = balls.current[hoverIdx];
      b.vy = -random(12, 28);
      b.bouncing = false;
    }
    canvasRef.current.addEventListener("mousemove", handlePointerMove);
    canvasRef.current.addEventListener("mouseleave", handlePointerLeave);
    canvasRef.current.addEventListener("mousedown", handlePointerDown);
    canvasRef.current.addEventListener("touchstart", (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      for (let t of e.touches) {
        const mx = t.clientX - rect.left;
        const my = t.clientY - rect.top;
        balls.current.forEach((b) => {
          if (
            Math.sqrt((mx - b.x) ** 2 + (my - b.y) ** 2) <= b.radius
          ) {
            b.vy = -random(13, 24);
            b.bouncing = false;
          }
        });
      }
      e.preventDefault();
    });

    return () => {
      running = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="w-full bg-black pt-14 pb-9 relative overflow-hidden select-none">
      <div className="max-w-2xl mx-auto flex flex-col items-center pb-4">
        <div className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let’s build something cool
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center h-[140px] pointer-events-auto">
        <canvas
          ref={canvasRef}
          className="block w-full h-[140px] rounded-none"
          style={{
            display: "block",
            width: "100%",
            height: 140,
            pointerEvents: "auto",
            background: "transparent",
          }}
        />
      </div>
      <div className="max-w-2xl mx-auto pt-4 flex flex-col md:flex-row justify-between items-center text-gray-200 text-xs">
        <div>All rights reserved © {new Date().getFullYear()} Hike Wike</div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="/imprint" className="hover:underline">Imprint</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
          To Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
