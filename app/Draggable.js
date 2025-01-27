import React, { useState } from "react";

const Draggable = () => {
  const [position, setPosition] = useState({ x: 300, y: 300 });
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX,
        y: touch.clientY,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        left: position.x - 50, // Center the object
        top: position.y - 50,  // Center the object
      }}
      className={`block lg:hidden z-[999] absolute touch-none ${
        isDragging ? "scale-110" : "scale-100"
      } transition-transform duration-100 ease-in-out`}
    >
      <img src="/whatsapp.png" alt="whatsapp" width={60} height={60} />
    </div>
  );
};

export default Draggable;
