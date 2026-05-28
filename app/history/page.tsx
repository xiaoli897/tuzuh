'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="历史订单" />
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">历史订单</h2>
        <p className="text-gray-500">暂无历史订单</p>
      </div>
    </div>
  );
}
