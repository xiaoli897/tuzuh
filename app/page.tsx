'use client';

import React from 'react';
import { Zap, List, ArrowUpDown } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { OrderCard } from '@/components/shared/OrderCard';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/lib/context/AppContext';

export default function Home() {
  const { orders } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">待接单</h1>
          </div>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            在线中
          </Badge>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-100">
          <div className="flex gap-1">
            <button className="px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium">
              待分配 ({orders.length})
            </button>
            <button className="px-3 py-2 text-gray-600 text-sm font-medium">
              已预约
            </button>
          </div>
          <button className="flex items-center gap-1 text-gray-600 text-sm">
            <ArrowUpDown className="h-4 w-4" />
            智能排序
          </button>
        </div>
      </div>

      {/* Order List */}
      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
