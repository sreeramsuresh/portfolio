import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Mouse move event
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check if cursor is over clickable element
    const onMouseOver = (e) => {
      const target = e.target;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.onclick ||
        target.classList.contains('clickable') ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsPointer(isLink);
    };

    // Mouse down event
    const onMouseDown = () => {
      setIsClicking(true);
    };

    // Mouse up event
    const onMouseUp = () => {
      setIsClicking(false);
    };

    // Mouse leave event
    const onMouseLeave = () => {
      setIsHidden(true);
    };

    // Mouse enter event
    const onMouseEnter = () => {
      setIsHidden(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Check if it's a touch device
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    if (isTouchDevice()) {
      setIsHidden(true);
    }
  }, []);

  const dotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: isClicking ? 'scale(0.5)' : isPointer ? 'scale(1.5)' : 'scale(1)',
    opacity: isHidden ? 0 : 1,
  };

  const outlineStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.8)' : isPointer ? 'scale(1.5)' : 'scale(1)'}`,
    opacity: isHidden ? 0 : 1,
    borderColor: isPointer ? 'rgba(156, 39, 176, 0.6)' : 'rgba(187, 134, 252, 0.4)',
    width: isPointer ? '60px' : '48px',
    height: isPointer ? '60px' : '48px',
  };

  return (
    <>
      <div className="cursor-dot" style={dotStyle}></div>
      <div className="cursor-outline" style={outlineStyle}></div>
    </>
  );
};

export default Cursor;