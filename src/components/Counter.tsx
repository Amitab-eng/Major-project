import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  title: string;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  title,
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(updateCount);
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#155724] mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600">{title}</div>
    </motion.div>
  );
};

export default Counter;