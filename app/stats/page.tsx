'use client';

import React, { useState } from 'react';
import { BarChart3, PieChart, Trophy, Target, Zap } from 'lucide-react';

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

export default function StatsPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');

  const prs = [
    { name: '卧推', weight: 120, date: '2024-01-15' },
    { name: '深蹲', weight: 180, date: '2024-01-10' },
    { name: '硬拉', weight: 200, date: '2024-01-05' },
    { name: '推举', weight: 80, date: '2024-01-12' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">数据统计</h1>
          <p className="text-gray-600 mt-1">查看您的训练数据和进步趋势</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={timeRange === 'week' ? 'default' : 'ghost'}
            onClick={() => setTimeRange('week')}
          >
            周
          </Button>
          <Button
            variant={timeRange === 'month' ? 'default' : 'ghost'}
            onClick={() => setTimeRange('month')}
          >
            月
          </Button>
          <Button
            variant={timeRange === 'year' ? 'default' : 'ghost'}
            onClick={() => setTimeRange('year')}
          >
            年
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-orange-50 rounded-xl">
                <Trophy className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <span>+12%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">总训练次数</p>
            <p className="text-3xl font-black text-gray-900">56</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <span>+8%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">总训练时长</p>
            <p className="text-3xl font-black text-gray-900">2850 <span className="text-lg text-gray-500 font-normal">分钟</span></p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-pink-50 rounded-xl">
                <BarChart3 className="w-6 h-6 text-pink-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <span>+18.5%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">训练总容量</p>
            <p className="text-3xl font-black text-gray-900">12.8 <span className="text-lg text-gray-500 font-normal">吨</span></p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-green-50 rounded-xl">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div className="flex items-center gap-1 text-green-600 font-semibold">
                <span>+5.4%</span>
              </div>
            </div>
            <p className="text-gray-500 mt-4">力量指数 (SPI)</p>
            <p className="text-3xl font-black text-green-600">842</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              训练容量趋势
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-to-r from-primary/10 to-cyan-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">图表可视化区域</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-primary" />
              肌群分布
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">饼图可视化区域</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              个人记录 (PR)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {prs.map((pr, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">{pr.name}</p>
                    <p className="text-sm text-gray-500">{pr.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-primary">{pr.weight} kg</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            训练日历
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {['一', '二', '三', '四', '五', '六', '日'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => {
              const hasWorkout = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29].includes(i + 1);
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all ${
                    hasWorkout
                      ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer'
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}