'use client';

import React from 'react';
import { Calendar, Clock, Dumbbell, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { WorkoutRecord } from '@/lib/types';
import { formatDate, formatNumber } from '@/lib/utils';

interface WorkoutHistoryCardProps {
  workout: WorkoutRecord;
  onClick?: () => void;
}

export const WorkoutHistoryCard: React.FC<WorkoutHistoryCardProps> = ({
  workout,
  onClick
}) => {
  return (
    <Card 
      className="p-6 hover:shadow-md transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Date & Exercises */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {workout.exercises.map((e) => e.name).join(' · ')}
              </h3>
              <p className="text-sm text-gray-500">
                {formatDate(workout.date)} · 下午 15:30
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-6 ml-13">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">
                {workout.duration} 分钟
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">
                {formatNumber(workout.totalVolume)} kg
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                已完成
              </span>
            </div>
          </div>
        </div>
        
        <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </Card>
  );
};
