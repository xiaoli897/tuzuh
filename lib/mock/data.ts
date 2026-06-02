import { User, BodyStats, Exercise, WorkoutSet, WorkoutRecord, Statistics, GoalProgress } from '@/lib/types';

// 模拟用户数据
export const mockUser: User = {
  id: '1',
  name: '张伟 (Alex)',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  level: 12,
  bio: '自律给我自由。致力于在接下来的三个月内将体脂率降低到 12%。'
};

// 模拟身体数据
export const mockBodyStats: BodyStats = {
  height: 180,
  weight: 75.4,
  bodyFat: 15.2,
  bmi: 23.2
};

// 模拟目标进度
export const mockGoalProgress: GoalProgress = {
  targetWeight: 72,
  targetBodyFat: 12,
  currentWeight: 75.4,
  currentBodyFat: 15.2
};

// 模拟训练动作
export const mockExercises: Exercise[] = [
  { id: '1', name: '杠铃卧推', muscleGroup: 'chest', icon: 'dumbbell' },
  { id: '2', name: '哑铃飞鸟', muscleGroup: 'chest', icon: 'dumbbell' },
  { id: '3', name: '高位下拉', muscleGroup: 'back', icon: 'zap' },
  { id: '4', name: '划船', muscleGroup: 'back', icon: 'zap' },
  { id: '5', name: '深蹲', muscleGroup: 'legs', icon: 'activity' },
  { id: '6', name: '硬拉', muscleGroup: 'legs', icon: 'activity' },
  { id: '7', name: '肩推', muscleGroup: 'shoulders', icon: 'zap' },
  { id: '8', name: '二头弯举', muscleGroup: 'arms', icon: 'dumbbell' },
  { id: '9', name: '三头下压', muscleGroup: 'arms', icon: 'dumbbell' },
  { id: '10', name: '卷腹', muscleGroup: 'core', icon: 'target' }
];

// 模拟训练历史
export const mockWorkoutHistory: WorkoutRecord[] = [
  {
    id: '1',
    date: '2024-10-24',
    exercises: [mockExercises[2], mockExercises[3]],
    sets: [
      { id: '1', exerciseId: '3', weight: 60, reps: 12, completed: true },
      { id: '2', exerciseId: '3', weight: 60, reps: 10, completed: true },
      { id: '3', exerciseId: '4', weight: 40, reps: 15, completed: true }
    ],
    duration: 52,
    totalVolume: 4200
  },
  {
    id: '2',
    date: '2024-10-22',
    exercises: [mockExercises[4], mockExercises[5]],
    sets: [
      { id: '4', exerciseId: '5', weight: 100, reps: 10, completed: true },
      { id: '5', exerciseId: '6', weight: 120, reps: 8, completed: true }
    ],
    duration: 65,
    totalVolume: 8100
  },
  {
    id: '3',
    date: '2024-10-20',
    exercises: [mockExercises[0], mockExercises[1]],
    sets: [
      { id: '6', exerciseId: '1', weight: 70, reps: 12, completed: true },
      { id: '7', exerciseId: '1', weight: 70, reps: 10, completed: true }
    ],
    duration: 48,
    totalVolume: 3800
  },
  {
    id: '4',
    date: '2024-10-18',
    exercises: [mockExercises[6], mockExercises[7], mockExercises[8]],
    sets: [
      { id: '8', exerciseId: '7', weight: 25, reps: 12, completed: true }
    ],
    duration: 45,
    totalVolume: 3200
  },
  {
    id: '5',
    date: '2024-10-16',
    exercises: [mockExercises[2], mockExercises[3]],
    sets: [
      { id: '9', exerciseId: '3', weight: 60, reps: 12, completed: true },
      { id: '10', exerciseId: '3', weight: 60, reps: 10, completed: true }
    ],
    duration: 60,
    totalVolume: 9200
  }
];

// 模拟统计数据
export const mockStatistics: Statistics = {
  weeklyVolume: [12000, 14500, 13200, 16800, 15400, 17500, 18900],
  muscleGroupDistribution: {
    chest: 25,
    back: 22,
    legs: 20,
    shoulders: 15,
    arms: 13,
    core: 5
  },
  prs: {
    '杠铃卧推': 115,
    '深蹲': 180,
    '硬拉': 225
  }
};

// 训练部位
export const muscleGroups = [
  { id: 'chest', name: '胸部', icon: 'zap' },
  { id: 'back', name: '背部', icon: 'layers' },
  { id: 'legs', name: '腿部', icon: 'activity' },
  { id: 'shoulders', name: '肩部', icon: 'zap' },
  { id: 'arms', name: '手臂', icon: 'dumbbell' },
  { id: 'core', name: '核心', icon: 'target' }
];
