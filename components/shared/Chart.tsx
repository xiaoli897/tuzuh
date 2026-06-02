'use client';

import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

interface ChartProps {
  data: number[];
  title?: string;
  max?: number;
}

export const VolumeChart: React.FC<ChartProps> = ({ data, title }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="w-full">
      {title && (
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      )}
      
      <div className="h-64 w-full flex items-end gap-3 px-4">
        {data.map((value, index) => {
          const height = maxValue ? (value / maxValue) * 100 : 0;
          
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-2"
            >
              {/* Bar */}
              <div 
                className="w-full bg-gradient-to-t from-primary to-cyan-400 rounded-t-lg transition-all duration-500 hover:opacity-80"
                style={{ height: `${height}%`, minHeight: '4px' }}
              />
              
              {/* Label */}
              <span className="text-xs text-gray-500 font-medium">
                {`W${index + 1}`}
              </span>
              
              {/* Value */}
              <span className="text-xs font-bold text-gray-700">
                {(value / 1000).toFixed(0)}k
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface DistributionChartProps {
  data: Record<string, number>;
  title?: string;
}

export const MuscleGroupChart: React.FC<DistributionChartProps> = ({ data, title }) => {
  const labels = ['胸部', '背部', '腿部', '肩部', '手臂', '核心'];
  const keys = ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'];
  
  return (
    <div className="w-full">
      {title && (
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      )}
      
      <div className="space-y-4">
        {keys.map((key, index) => {
          const value = data[key] || 0;
          
          return (
            <div key={key} className="flex items-center gap-4">
              {/* Label */}
              <span className="w-16 text-sm font-medium text-gray-700 text-right">
                {labels[index]}
              </span>
              
              {/* Bar Container */}
              <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-700"
                  style={{ width: `${value}%` }}
                />
              </div>
              
              {/* Value */}
              <span className="w-12 text-sm font-bold text-gray-700 text-right">
                {value}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
