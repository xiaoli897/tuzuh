'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Activity, Mail, Lock, Eye, EyeOff, Github, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section - Brand */}
        <div className="hidden lg:flex bg-gradient-to-br from-primary via-blue-500 to-cyan-400 rounded-2xl p-12 text-white flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <span className="text-3xl font-bold">PulseTrack</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-5xl font-black mb-4 leading-tight">
              追踪每一份汗水，<br/>记录每一寸成长
            </h1>
            <p className="text-xl text-white/80 mb-8">
              加入 10,000+ 健身爱好者，用数据见证您的蜕变过程
            </p>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-pink-400 to-purple-500 -ml-4 first:ml-0"
                />
              ))}
              <div className="ml-4">
                <p className="font-semibold">精英训练者社区</p>
              </div>
            </div>
          </div>
          
          <div className="text-white/60 text-sm">
            PulseTrack v1.2.0 • © 2024 PulseTrack Ltd.
          </div>
        </div>
        
        {/* Right Section - Form */}
        <div className="p-8 lg:p-12">
          <Card className="border-none shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center lg:text-left">
                {isLogin ? '欢迎回来' : '创建账号'}
              </CardTitle>
              <p className="text-gray-500 text-center lg:text-left">
                {isLogin
                  ? '请输入您的凭据以访问您的训练控制面板'
                  : '开始您的健身之旅，只需要简单几步'}
              </p>
              
              {/* Tab Switch */}
              <div className="flex bg-gray-100 rounded-xl p-1 mt-6">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  isLogin
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                登 录
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                !isLogin
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              注 册
            </button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  用户名
                </label>
                <Input placeholder="请输入用户名" className="h-12" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                邮箱或手机号
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="name@example.com"
                  className="h-12 pl-12"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">密码</label>
                {isLogin && (
                  <button type="button" className="text-sm text-primary font-medium hover:underline">
                    忘记密码？
                  </button>
                )}
              </div>
              
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="h-12 pl-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            {!isLogin && (
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label className="text-sm text-gray-600">
                  我已阅读并同意 PulseTrack 的{' '}
                  <a href="#" className="text-primary font-medium hover:underline">服务条款</a>
                  和
                  <a href="#" className="text-primary font-medium hover:underline">隐私协议</a>
                </label>
              </div>
            )}
            
            <Button type="submit" size="lg" className="w-full mt-6">
              {isLogin ? '立即登录' : '创建账号'}
              <Activity className="w-5 h-5 ml-2" />
            </Button>
          </form>
          
          {/* Social Login */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">或者使用社交账号</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" size="lg" className="flex-1">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              <Apple className="w-5 h-5 mr-2" />
              Apple
            </Button>
          </div>
          
          <p className="text-center text-gray-500 text-sm">
            {isLogin ? "还没有账号？" : "已经有账号了？"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? '立即加入' : '立即登录'}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
);
}
