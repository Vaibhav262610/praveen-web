'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Type casting e.target to HTMLElement to access tagName
      const target = e.target as HTMLElement;
      const textTags = ['A', 'P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
      if (target && textTags.includes(target.tagName)) {
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = () => {
      setIsHoveringText(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.1,
        y: prev.y + (cursorPosition.y - prev.y) * 0.1,
      }));
    };

    const interval = setInterval(followCursor, 10);

    return () => {
      clearInterval(interval);
    };
  }, [cursorPosition]);

  return (
    <>
      {/* Main Cursor */}
      <div
        style={{
          position: 'fixed',
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: '10px',
          height: '10px',
          backgroundColor: isHoveringText ? 'red' : 'white', // Color changes when hovering text
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          transition: 'background-color 0.2s ease',
        }}
      />
      {/* Trailing Cursor */}
      <div
        style={{
          position: 'fixed',
          left: trailingPosition.x,
          top: trailingPosition.y,
          width: '20px',
          height: '20px',
          backgroundColor: isHoveringText
            ? 'rgba(255, 0, 0, 0.7)'
            : 'rgba(255, 255, 255, 0.7)', // Semi-transparent color
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'background-color 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
