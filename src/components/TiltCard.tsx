import { useState, useRef, ReactNode, MouseEvent, useEffect } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: 'cyan' | 'magenta' | 'purple';
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glowColor = 'cyan'
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    setCanHover(hoverMedia.matches && !motionMedia.matches);

    const handler = () => {
      setCanHover(hoverMedia.matches && !motionMedia.matches);
    };

    hoverMedia.addEventListener('change', handler);
    motionMedia.addEventListener('change', handler);
    return () => {
      hoverMedia.removeEventListener('change', handler);
      motionMedia.removeEventListener('change', handler);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Dramatic 3D perspective tilt
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    if (canHover) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const glowColors = {
    cyan: 'rgba(0, 240, 255, 0.4)',
    magenta: 'rgba(255, 42, 133, 0.4)',
    purple: 'rgba(176, 38, 255, 0.4)'
  };

  const shadowOffsets = {
    x: -tilt.y * 3.0,
    y: tilt.x * 3.5 + 22
  };

  const dynamicShadow = isHovered && canHover
    ? `${shadowOffsets.x}px ${shadowOffsets.y}px 48px -8px rgba(0, 0, 0, 0.8), 0 0 38px -4px ${glowColors[glowColor]}`
    : '0 12px 30px -8px rgba(0, 0, 0, 0.4)';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl transition-all ${className}`}
      style={{
        transform: isHovered && canHover
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translate3d(${-tilt.y * 0.5}px, ${tilt.x * 0.5}px, 22px) scale3d(1.035, 1.035, 1.035)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
        boxShadow: dynamicShadow,
        transition: isHovered ? 'transform 90ms ease-out, box-shadow 110ms ease-out' : 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, box-shadow'
      }}
    >
      {/* 3D Dynamic Laser Rim Glow */}
      <div
        className={`absolute -inset-[1.5px] rounded-2xl pointer-events-none transition-opacity duration-300 ${
          isHovered && canHover ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle 380px at ${mousePos.x}% ${mousePos.y}%, ${glowColors[glowColor]}, transparent 70%)`
        }}
      />

      {/* Surface Specular Reflection Glint */}
      {isHovered && canHover && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 300px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.16), transparent 75%)`
          }}
        />
      )}

      {children}
    </div>
  );
}
