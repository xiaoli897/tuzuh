import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind 类合并工具
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 格式化数字
export function formatNumber(num: number): string {
  return num.toLocaleString('zh-CN');
}

// 格式化日期
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// 计算进度百分比
export function calculateProgress(current: number, target: number): number {
  return Math.min(Math.max(0, (current / target) * 100), 100);
}

// 生成随机ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
