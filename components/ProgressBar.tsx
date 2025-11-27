import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full h-1.5 bg-gray-200 fixed top-0 left-0 z-50">
      <div 
        className="h-full bg-green-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};