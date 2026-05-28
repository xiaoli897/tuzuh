'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Clock,
  Info
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockOrderDetails } from '@/lib/mock/orders';
import { formatCurrency, formatDistance, formatTime } from '@/lib/utils';

export default function CompletePage() {
  const params = useParams();
  const router = useRouter();
  
  const order = mockOrderDetails[params.id as string];

  if (!order || !order.earnings) {
    return <div>订单不存在</div>;
  }

  const totalEarnings = Object.values(order.earnings).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      <Header
        title="任务已完成"
        showBack={false}
      />

      {/* Success Banner */}
      <div className="bg-gradient-to-b from-primary/10 to-white px-4 py-12 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle2 className="h-12 w-12 text-success" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">配送已成功</h1>
        <p className="text-gray-600">订单号: {order.orderNumber} {new Date().toLocaleTimeString()} 完成</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Earnings Card */}
        <Card className="overflow-hidden">
          <div className="p-6">
            <h3 className="text-gray-700 mb-2">本次预计收入 (元)</h3>
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-4xl font-bold text-primary">
                {formatCurrency(totalEarnings)}
              </span>
              <Badge variant="success" className="bg-green-100 text-green-700">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15% 奖励
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">基础运费</span>
                <span className="text-gray-900 font-medium">{formatCurrency(order.earnings.base)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">距离补贴 ({formatDistance(order.distance)})</span>
                <span className="text-gray-900 font-medium">{formatCurrency(order.earnings.distance)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">准时送达奖励</span>
                <span className="text-gray-900 font-medium">{formatCurrency(order.earnings.onTime)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">重量溢价</span>
                <span className="text-gray-900 font-medium">{formatCurrency(order.earnings.weight)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">用户打赏小费</span>
                <span className="text-gray-900 font-medium">{formatCurrency(order.earnings.tip)}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <button className="flex items-center justify-between w-full text-gray-700">
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  <span>结算至</span>
                  <span className="font-medium">余额 (随时可提现)</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </Card>

        {/* Delivery Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-5 w-5 text-success" />
              </div>
              <p className="text-gray-600 text-sm mb-1">实际配送里程</p>
              <p className="text-xl font-bold text-gray-900">
                {order.deliveryStats?.distance.toFixed(1) || '0.0'} 公里
              </p>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
              <p className="text-gray-600 text-sm mb-1">本次配送耗时</p>
              <p className="text-xl font-bold text-gray-900">
                {order.deliveryStats?.time || 0} 分钟
              </p>
            </div>
          </Card>
        </div>

        {/* Info Banner */}
        <Card className="overflow-hidden bg-primary/5 border-primary/20">
          <div className="p-4 flex gap-3">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-1">支付说明</p>
              <p>该订单金额已存入您的个人钱包余额。若对补贴或小费有疑问，请点击右上角帮助中心。</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-3">
        <Button
          size="lg"
          className="w-full bg-primary hover:bg-primary-dark"
          onClick={() => router.push('/')}
        >
          返回任务列表
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full border-gray-300 text-gray-700"
        >
          查看订单详情
        </Button>
      </div>
    </div>
  );
}

// Import missing icons
import { TrendingUp, Wallet } from 'lucide-react';
