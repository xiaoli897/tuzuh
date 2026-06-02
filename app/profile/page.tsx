'use client';

import React from 'react';
import { User, Settings, Bell, LogOut, Trophy, Target, Edit3, Zap, BarChart3 } from 'lucide-react';

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

export default function ProfilePage() {
  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: '个人资料', description: '编辑您的个人信息' },
    { icon: <Target className="w-5 h-5" />, label: '目标设置', description: '调整您的训练目标' },
    { icon: <Bell className="w-5 h-5" />, label: '通知设置', description: '管理训练提醒' },
    { icon: <Settings className="w-5 h-5" />, label: '应用设置', description: '偏好设置与帮助' },
  ];

  const achievements = [
    { name: '初学者', unlocked: true, description: '完成第一次训练' },
    { name: '坚持一周', unlocked: true, description: '连续训练7天' },
    { name: '力量达人', unlocked: false, description: '卧推达到100kg' },
    { name: '铁人', unlocked: false, description: '累计训练100次' },
  ];

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-primary to-blue-500 rounded-3xl" />
        <div className="relative -mt-24 mx-4">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    张
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors">
                    <Edit3 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">张伟</h1>
                    <p className="text-gray-600 mt-1">等级 12 · 自律给我自由</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        高级训练者
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-xl">
                <BarChart3 className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">身高</p>
                <p className="text-2xl font-bold text-gray-900">180 cm</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-xl">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">体重</p>
                <p className="text-2xl font-bold text-gray-900">75.4 kg</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-pink-50 rounded-xl">
                <Zap className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">体脂率</p>
                <p className="text-2xl font-bold text-gray-900">15.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-50 rounded-xl">
                <BarChart3 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">BMI</p>
                <p className="text-2xl font-bold text-gray-900">23.2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            目标进度
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">目标体重</span>
              <span className="font-bold text-primary">75.4 / 72 kg</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-700"
                style={{ width: '85%' }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">目标体脂率</span>
              <span className="font-bold text-primary">15.2% / 12%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-700"
                style={{ width: '70%' }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            成就徽章
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl text-center transition-all ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200'
                    : 'bg-gray-50 border-2 border-gray-100'
                }`}
              >
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                  achievement.unlocked ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  <Trophy className="w-8 h-8" />
                </div>
                <p className={`font-bold ${achievement.unlocked ? 'text-gray-900' : 'text-gray-400'}`}>
                  {achievement.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl text-primary">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button variant="ghost" className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50">
          <LogOut className="w-5 h-5" />
          退出登录
        </Button>
      </div>
    </div>
  );
}