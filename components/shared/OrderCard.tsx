'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  MapPin, 
  Navigation, 
  TrendingUp, 
  MoreHorizontal,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Order } from '@/lib/types';
import { formatCurrency, formatDistance, formatTime } from '@/lib/utils';

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/order/${order.id}`);
  };

  const handleAcceptOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/order/${order.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {/* Order Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            订单号: {order.orderNumber}
          </span>
          <Badge variant="default">{order.type}</Badge>
        </div>
        <Button variant="ghost" size="icon">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="ml-1 text-xs text-primary">热力区域</span>
        </Button>
      </div>

      {/* Order Content */}
      <div className="p-4 space-y-4">
        {/* Merchant */}
        <div className="flex gap-3">
          <div className="shrink-0 w-3 h-3 rounded-full bg-primary mt-2" />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{order.merchant.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{order.merchant.address}</p>
          </div>
        </div>

        {/* User */}
        <div className="flex gap-3">
          <div className="shrink-0 w-3 h-3 rounded-full bg-orange-400 mt-2" />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{order.user.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{order.user.address}</p>
          </div>
        </div>

        {/* Info Row */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1 text-gray-600">
            <Navigation className="h-4 w-4 text-primary" />
            <span className="text-sm">{formatDistance(order.distance)}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm">{formatTime(order.estimatedTime)}</span>
          </div>
          <div className="text-lg font-semibold text-orange-500">
            {formatCurrency(order.payment)}
            {order.subsidy && (
              <span className="ml-1 text-sm text-orange-400">
                +{formatCurrency(order.subsidy)}补贴
              </span>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-2">
          <Button variant="ghost" size="sm" onClick={handleViewDetails}>
            详情
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark min-w-[120px] shadow-lg"
            onClick={handleAcceptOrder}
          >
            立即接单
          </Button>
        </div>
      </div>
    </Card>
  );
}
