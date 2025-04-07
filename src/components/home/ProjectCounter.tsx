
import React, { useState, useEffect } from 'react';
import { Rocket, TrendingUp, Award, Users } from 'lucide-react';

interface CounterItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
  suffix?: string;
}

const CounterItem = ({ icon, value, label, duration = 2000, suffix = "" }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate the count value based on progress
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * value);
      
      setCount(currentCount);
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);
  
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 text-capetown-sky">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-1">{count}{suffix}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
};

const ProjectCounter = () => {
  // In a real application, these values would come from an API
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-bold text-center mb-8">Our Impact This Month</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        <CounterItem 
          icon={<Rocket size={32} />} 
          value={14} 
          label={`Websites Launched in ${currentMonth}`} 
        />
        <CounterItem 
          icon={<TrendingUp size={32} />} 
          value={86} 
          label="Avg. Traffic Increase" 
          suffix="%" 
        />
        <CounterItem 
          icon={<Award size={32} />} 
          value={98} 
          label="Client Satisfaction" 
          suffix="%" 
        />
        <CounterItem 
          icon={<Users size={32} />} 
          value={35} 
          label="Cape Town Businesses Served" 
        />
      </div>
    </div>
  );
};

export default ProjectCounter;
