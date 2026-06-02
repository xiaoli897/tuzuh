// 用户信息
export interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  bio: string;
}

// 身体数据
export interface BodyStats {
  height: number;
  weight: number;
  bodyFat: number;
  bmi: number;
}

// 训练动作
export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  icon: string;
}

// 训练组记录
export interface WorkoutSet {
  id: string;
  exerciseId: string;
  weight: number;
  reps: number;
  completed: boolean;
}

// 训练记录
export interface WorkoutRecord {
  id: string;
  date: string;
  exercises: Exercise[];
  sets: WorkoutSet[];
  duration: number;
  totalVolume: number;
}

// 统计数据
export interface Statistics {
  weeklyVolume: number[];
  muscleGroupDistribution: Record<string, number>;
  prs: Record<string, number>;
}

// 目标进度
export interface GoalProgress {
  targetWeight: number;
  targetBodyFat: number;
  currentWeight: number;
  currentBodyFat: number;
}
