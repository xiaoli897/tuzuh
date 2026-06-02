'use client';

import React, { useState } from 'react';
import { Dumbbell, Trash2, CheckCircle2, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Exercise, WorkoutSet } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ExerciseCardProps {
  exercise: Exercise;
  sets?: WorkoutSet[];
  onAddSet?: (weight: number, reps: number) => void;
  onRemove?: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  sets = [],
  onAddSet,
  onRemove
}) => {
  const [weight, setWeight] = useState<string>('60');
  const [reps, setReps] = useState<string>('12');
  
  const handleAddSet = () => {
    if (onAddSet && weight && reps) {
      onAddSet(parseInt(weight), parseInt(reps));
      // 自动增加一点点重量，方便下一组
      setWeight((parseInt(weight) + 2.5).toString());
    }
  };
  
  return (
    <Card className="p-6 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-cyan-50 rounded-xl flex items-center justify-center">
            <Dumbbell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{exercise.name}</h3>
            <p className="text-sm text-gray-500">{sets.length} 组</p>
          </div>
        </div>
        
        {onRemove && (
          <button
            onClick={onRemove}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Sets List */}
      {sets.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2 px-2">
            <span className="text-xs font-semibold text-gray-400 uppercase">组</span>
            <span className="text-xs font-semibold text-gray-400 uppercase">重量</span>
            <span className="text-xs font-semibold text-gray-400 uppercase">次数</span>
          </div>
          
          <div className="space-y-2">
            {sets.map((set, index) => (
              <div
                key={set.id}
                className="flex items-center gap-4 px-3 py-3 bg-gray-50 rounded-xl"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-sm font-bold text-gray-500">{index + 1}</span>
                </div>
                
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex-1 text-center">
                    <span className="font-semibold text-gray-900">{set.weight}</span>
                    <span className="text-sm text-gray-500 ml-1">kg</span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="font-semibold text-gray-900">{set.reps}</span>
                    <span className="text-sm text-gray-500 ml-1">Reps</span>
                  </div>
                </div>
                
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Add Set Input */}
      {onAddSet && (
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="w-8 text-center text-gray-400 font-bold">#{sets.length + 1}</span>
              
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">重量 (kg)</label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-center"
                />
              </div>
              
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">次数</label>
                <Input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  className="text-center"
                />
              </div>
            </div>
            
            <div className="pt-5">
              <Button
                onClick={handleAddSet}
                size="icon"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <CheckCircle2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handleAddSet}
            variant="outline"
            className="w-full border-2 border-dashed border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
          >
            <Plus className="w-5 h-5 mr-2" />
            添加一组
          </Button>
        </div>
      )}
    </Card>
  );
};
