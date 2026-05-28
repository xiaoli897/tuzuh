'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="个人中心" />
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">个人中心</h2>
        <p className="text-gray-500">功能开发中</p>
      </div>
    </div>
  );
}
