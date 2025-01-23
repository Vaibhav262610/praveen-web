import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Ensure `classnames` or a similar utility is used.

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex: React.FC<VortexProps> = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 1000,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = '#000000',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const noise3D = createNoise3D();

  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;

  let particleProps = new Float32Array(particlePropsLength);
  const center: [number, number] = [0, 0];
  const TAU = 2 * Math.PI;
  let tick = 0;

  const rand = (n: number) => n * Math.random();
  const randRange = (n: number) => n - rand(2 * n);
  const fadeInOut = (t: number, m: number) => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number) =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        resizeCanvas(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  };

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const initParticles = () => {
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const life = 0;
    const ttl = 50 + rand(150);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(100);

    particleProps.set([x, y, 0, 0, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);

    requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = particleProps[i];
    const y = particleProps[i + 1];
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * TAU;
    const vx = lerp(particleProps[i + 2], Math.cos(n), 0.5);
    const vy = lerp(particleProps[i + 3], Math.sin(n), 0.5);
    const life = particleProps[i + 4] + 1;
    const ttl = particleProps[i + 5];
    const speed = particleProps[i + 6];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;
    const radius = particleProps[i + 7];
    const hue = particleProps[i + 8];

    ctx.save();
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();

    particleProps.set([x2, y2, vx, vy, life], i);
  };

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) resizeCanvas(canvas);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={cn('relative h-full w-full', containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className='absolute inset-0 h-full w-full'
      >
        <canvas ref={canvasRef} />
      </motion.div>
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};
