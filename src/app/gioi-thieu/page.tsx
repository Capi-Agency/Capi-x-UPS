"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Dữ liệu của các hình tròn (kích thước, màu sắc, vị trí)
const circlesData = [
  { size: 120, bg: "bg-blue-500", top: 50, left: 100 },  // Hình tròn lớn
  { size: 80, bg: "bg-red-500", top: 150, left: 200 },   // Hình tròn trung bình
  { size: 150, bg: "bg-green-500", top: 100, left: 400 }, // Hình tròn lớn
  { size: 60, bg: "bg-yellow-500", top: 200, left: 300 }, // Hình tròn nhỏ
  { size: 100, bg: "bg-purple-500", top: 20, left: 500 }, // Hình tròn trung bình
];

const CircleAnimation: React.FC = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animation rơi xuống và nảy
    gsap.fromTo(
      circlesRef.current,
      { y: -300, opacity: 0, scale: 0.5 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.5, 
        ease: "bounce.out", 
        stagger: 0.2 
      }
    );
  }, []);

  return (
    <div className="relative h-screen bg-gray-100">
      {circlesData.map((circle, index) => (
        <div
          key={index}
          className={`${circle.bg} rounded-full absolute`}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.top}px`,
            left: `${circle.left}px`,
          }}
          ref={(el) => {
            if (el && !circlesRef.current.includes(el)) {
              circlesRef.current[index] = el;
            }
          }}
        />
      ))}
    </div>
  );
};

export default CircleAnimation;
