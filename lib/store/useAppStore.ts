import { create } from 'zustand';
import { User, BodyStats, Exercise, WorkoutSet, WorkoutRecord, Statistics, GoalProgress } from '@/lib/types';
import { 
  mockUser, 
  mockBodyStats, 
  mockExercises, 
  mockWorkoutHistory, 
  mockStatistics, 
  mockGoalProgress 
} from '@/lib/mock/data';
import { generateId } from '@/lib/utils';

interface AppStore {
  // 用户相关
  user: User;
  bodyStats: BodyStats;
  goalProgress: GoalProgress;
  
  // 训练相关
  exercises: Exercise[];
  workoutHistory: WorkoutRecord[];
  currentWorkout: WorkoutRecord | null;
  selectedMuscleGroup: string;
  
  // 统计相关
  statistics: Statistics;
  
  // 导航相关
  currentPage: string;
  
  // Actions
  setUser: (user: User) => void;
  setBodyStats: (stats: BodyStats) => void;
  setGoalProgress: (progress: GoalProgress) => void;
  setSelectedMuscleGroup: (group: string) => void;
  setCurrentPage: (page: string) => void;
  
  // 训练操作
  startWorkout: () => void;
  addExercise: (exercise: Exercise) => void;
  addSet: (exerciseId: string, weight: number, reps: number) => void;
  completeWorkout: (duration: number) => void;
  
  // 历史记录
  addWorkoutToHistory: (workout: WorkoutRecord) => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  // 初始状态
  user: mockUser,
  bodyStats: mockBodyStats,
  goalProgress: mockGoalProgress,
  exercises: mockExercises,
  workoutHistory: mockWorkoutHistory,
  currentWorkout: null,
  selectedMuscleGroup: 'chest',
  statistics: mockStatistics,
  currentPage: '/',
  
  // Actions
  setUser: (user: User) => set({ user }),
  setBodyStats: (stats: BodyStats) => set({ bodyStats: stats }),
  setGoalProgress: (progress: GoalProgress) => set({ goalProgress: progress }),
  setSelectedMuscleGroup: (group: string) => set({ selectedMuscleGroup: group }),
  setCurrentPage: (page: string) => set({ currentPage: page }),
  
  // 开始训练
  startWorkout: () => set({
    currentWorkout: {
      id: generateId(),
      date: new Date().toISOString().split('T')[0],
      exercises: [],
      sets: [],
      duration: 0,
      totalVolume: 0
    }
  }),
  
  // 添加动作
  addExercise: (exercise: Exercise) => set((state) => ({
    currentWorkout: state.currentWorkout 
      ? {
          ...state.currentWorkout,
          exercises: [...state.currentWorkout.exercises, exercise]
        }
      : null
  })),
  
  // 添加组记录
  addSet: (exerciseId: string, weight: number, reps: number) => set((state) => {
    if (!state.currentWorkout) return state;
    
    const newSet: WorkoutSet = {
      id: generateId(),
      exerciseId,
      weight,
      reps,
      completed: true
    };
    
    return {
      currentWorkout: {
        ...state.currentWorkout,
        sets: [...state.currentWorkout.sets, newSet],
        totalVolume: state.currentWorkout.totalVolume + (weight * reps)
      }
    };
  }),
  
  // 完成训练
  completeWorkout: (duration: number) => set((state) => {
    if (!state.currentWorkout) return state;
    
    const completedWorkout: WorkoutRecord = {
      ...state.currentWorkout,
      duration
    };
    
    return {
      currentWorkout: null,
      workoutHistory: [completedWorkout, ...state.workoutHistory]
    };
  }),
  
  // 添加到历史
  addWorkoutToHistory: (workout: WorkoutRecord) => set((state) => ({
    workoutHistory: [workout, ...state.workoutHistory]
  }))
}));
