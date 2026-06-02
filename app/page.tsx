'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, Dumbbell, TrendingUp, Plus, ChevronRight, Target, Zap } from 'lucide-react';

// Simple components without external dependencies
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

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' }) => {
  const variants = {
    default: 'bg-primary text-white',
    secondary: 'bg-gray-100 text-gray-700',
    outline: 'border border-gray-200 text-gray-700',
    destructive: 'bg-red-50 text-red-600',
    success: 'bg-green-50 text-green-600'
  };
  
  return (
    <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[variant]}`}>
      {children}
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Workout */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-br from-blue-50 via-primary/5 to-cyan-50 border-2 border-blue-100 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">今日训练计划</span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">胸部 + 三头肌力量专项</h1>
                  <p className="text-gray-600">包含 5 个核心动作，今日目标是突破卧推 100kg 记录。</p>
                </div>
                
                <Button
                  onClick={() => router.push('/workout')}
                  size="lg"
                  className="shadow-xl shadow-primary/25"
                >
                  开始训练
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
        
        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>本周频率</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-5xl font-black bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                5
              </div>
              <span className="text-gray-500">/ 7 天</span>
              <Badge variant="default">达标</Badge>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {['一', '二', '三', '四', '五', '六', '日'].map((day, index) => (
                <div
                  key={day}
                  className={`h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
                    index < 5 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              您本周已累计训练 300 分钟，超过 85% 的用户。
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-orange-50 rounded-xl">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">消耗热量</p>
            <p className="text-3xl font-black text-gray-900">3,240 <span className="text-lg text-gray-500 font-normal">kcal</span></p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+5%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">总训练时长</p>
            <p className="text-3xl font-black text-gray-900">300 <span className="text-lg text-gray-500 font-normal">分钟</span></p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-pink-50 rounded-xl">
                <Dumbbell className="w-6 h-6 text-pink-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+18.5%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">训练总容量</p>
            <p className="text-3xl font-black text-gray-900">28.5 <span className="text-lg text-gray-500 font-normal">吨</span></p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-green-50 rounded-xl">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>+5.4%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">力量指数 (SPI)</p>
            <p className="text-3xl font-black text-green-600">842</p>
          </CardContent>
        </Card>
      </div>
      
      {/* FAB for mobile */}
      <div className="fixed bottom-24 right-6 md:hidden">
        <Button
          onClick={() => router.push('/workout')}
          size="lg"
          className="w-16 h-16 rounded-full shadow-2xl shadow-primary/30"
        >
          <Plus className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}