'use client';

import React, { useState } from 'react';
import { Dumbbell, Plus, Clock, CheckCircle, Zap, Target } from 'lucide-react';

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-2xl font-bold text-gray-900 leading-none tracking-tight ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'default', 
  size = 'md' 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95";
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-gray-200 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-100"
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const muscleGroups = [
  { id: 'chest', name: '胸部', icon: <Target className="w-6 h-6" /> },
  { id: 'back', name: '背部', icon: <Zap className="w-6 h-6" /> },
  { id: 'legs', name: '腿部', icon: <Dumbbell className="w-6 h-6" /> },
  { id: 'shoulders', name: '肩部', icon: <Target className="w-6 h-6" /> },
  { id: 'arms', name: '手臂', icon: <Zap className="w-6 h-6" /> },
  { id: 'core', name: '核心', icon: <Target className="w-6 h-6" /> },
];

const exercises = {
  chest: [{ id: '1', name: '杠铃卧推', sets: [{ id: 's1', weight: 70, reps: 12 }, { id: 's2', weight: 70, reps: 10 }] }],
  back: [{ id: '2', name: '高位下拉', sets: [{ id: 's3', weight: 60, reps: 12 }] }],
  legs: [{ id: '3', name: '深蹲', sets: [{ id: 's4', weight: 100, reps: 10 }] }],
  shoulders: [{ id: '4', name: '肩推', sets: [] }],
  arms: [{ id: '5', name: '二头弯举', sets: [] }],
  core: [{ id: '6', name: '卷腹', sets: [] }],
};

export default function WorkoutPage() {
  const [selectedMuscle, setSelectedMuscle] = useState('chest');
  const [selectedExercises, setSelectedExercises] = useState(exercises.chest);

  const addExercise = () => {
    const newExercise = { id: Date.now().toString(), name: '新动作', sets: [] };
    setSelectedExercises([...selectedExercises, newExercise]);
  };

  const addSet = (exerciseId: string) => {
    setSelectedExercises(selectedExercises.map(ex => 
      ex.id === exerciseId 
        ? { ...ex, sets: [...ex.sets, { id: Date.now().toString(), weight: 0, reps: 0 }] } 
        : ex
    ));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">训练打卡</h1>
        <p className="text-gray-600">记录您的训练数据</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-2 h-8 bg-primary rounded-full" />
          选择训练部位
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {muscleGroups.map((muscle) => (
            <Button
              key={muscle.id}
              variant={selectedMuscle === muscle.id ? 'default' : 'outline'}
              onClick={() => {
                setSelectedMuscle(muscle.id);
                setSelectedExercises(exercises[muscle.id as keyof typeof exercises]);
              }}
              className="h-auto py-4 flex-col gap-2"
            >
              {muscle.icon}
              <span className="text-sm">{muscle.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <div className="w-2 h-8 bg-primary rounded-full" />
            训练动作
          </h2>
          <Button onClick={addExercise} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            添加动作
          </Button>
        </div>

        <div className="space-y-4">
          {selectedExercises.map((exercise) => (
            <Card key={exercise.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exercise.name}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {exercise.sets.map((set, index) => (
                    <div key={set.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                      <div className="text-sm font-medium text-gray-600">第 {index + 1} 组</div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-500">重量 (kg)</label>
                          <input
                            type="number"
                            defaultValue={set.weight}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">次数</label>
                          <input
                            type="number"
                            defaultValue={set.reps}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <CheckCircle className="w-5 h-5" />
                      </Button>
                    </div>
                  ))}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => addSet(exercise.id)}
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    添加一组
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-br from-primary/5 to-cyan-50 border-2 border-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Clock className="w-6 h-6" />
            训练详情设置
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">训练时长 (分钟)</label>
            <input
              type="number"
              defaultValue={60}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">训练备注</label>
            <textarea
              rows={3}
              placeholder="记录今天的训练感受..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary resize-none"
            />
          </div>
        </CardContent>
        <div className="p-6 pt-0 space-y-3">
          <Button
            size="lg"
            className="w-full text-xl py-6"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            完成训练
          </Button>
        </div>
      </Card>
    </div>
  );
}