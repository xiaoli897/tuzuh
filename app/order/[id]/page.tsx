'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MapPin, Phone, Link2, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapView } from '@/components/shared/MapView';
import { useApp } from '@/lib/context/AppContext';
import { mockOrderDetails } from '@/lib/mock/orders';
import { formatCurrency, formatDistance, formatTime } from '@/lib/utils';

export default function OrderDetail() {
  const params = useParams();
  const router = useRouter();
  const { acceptOrder } = useApp();
  const [showItems, setShowItems] = React.useState(false);
  
  const order = mockOrderDetails[params.id as string];

  if (!order) {
    return <div>订单不存在</div>;
  }

  const handleAcceptOrder = () => {
    acceptOrder(order.id);
    router.push(`/navigation/${order.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <Header
        title="订单详情"
        showBack
        onBack={() => router.back()}
      />

      {/* Order Info */}
      <div className="bg-white p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">订单编号: {order.orderNumber}</span>
          <Badge variant="default">{order.type}</Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-primary">
            {formatCurrency(order.payment + (order.subsidy || 0))}
          </div>
          <div className="text-sm text-gray-500">
            含补贴 {formatCurrency(order.subsidy || 0)}
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Link2 className="h-4 w-4" />
            <span>{formatDistance(order.distance)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{formatTime(order.estimatedTime)}</span>
          </div>
        </div>
      </div>

      {/* Merchant & User */}
      <div className="p-4 space-y-3">
        <Card className="overflow-hidden">
          <div className="p-4 space-y-4">
            {/* Merchant */}
            <div className="flex gap-3">
              <div className="shrink-0 w-4 h-4 rounded-full bg-orange-500 mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{order.merchant.name}</h3>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">{order.merchant.address}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-8 bg-gray-200 ml-1.5" />
            </div>

            {/* User */}
            <div className="flex gap-3">
              <div className="shrink-0 w-4 h-4 rounded-full bg-primary mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{order.user.name}</h3>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">{order.user.address}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Items */}
        <Card className="overflow-hidden">
          <button
            onClick={() => setShowItems(!showItems)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center">
                <Package className="h-3 w-3 text-gray-600" />
              </div>
              <span className="font-medium text-gray-900">商品详情</span>
              <span className="text-gray-500">共 {order.items.length} 件</span>
            </div>
            {showItems ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          
          {showItems && (
            <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-900">{item.name}</p>
                    {item.note && (
                      <p className="text-sm text-gray-500 mt-0.5">备注: {item.note}</p>
                    )}
                  </div>
                  <span className="text-gray-600">x{item.quantity}</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Map Preview */}
        <Card className="overflow-hidden">
          <div className="relative">
            <MapView
              merchantName={order.merchant.name}
              userName={order.user.name}
              showControls={false}
            />
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
              <button className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">预览路线</span>
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 text-gray-600 border-gray-300"
        >
          暂不接单
        </Button>
        <Button
          size="lg"
          className="flex-1 bg-primary hover:bg-primary-dark"
          onClick={handleAcceptOrder}
        >
          立即接单
        </Button>
      </div>
    </div>
  );
}

// Import missing icon
import { Clock, Package } from 'lucide-react';
