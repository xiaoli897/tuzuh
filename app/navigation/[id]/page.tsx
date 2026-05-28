'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Navigation, 
  Phone, 
  AlertCircle, 
  Mic,
  Check
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapView } from '@/components/shared/MapView';
import { mockOrderDetails } from '@/lib/mock/orders';
import { formatDistance, formatTime } from '@/lib/utils';

export default function NavigationPage() {
  const params = useParams();
  const router = useRouter();
  const [currentTime, setCurrentTime] = React.useState('14:35');
  
  const order = mockOrderDetails[params.id as string];

  if (!order) {
    return <div>订单不存在</div>;
  }

  const handleArrived = () => {
    router.push(`/pickup/${order.id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        title={`前往取货 (剩余${formatDistance(order.distance)})`}
        showBack
        onBack={() => router.back()}
      />

      {/* Top Info Bar */}
      <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm z-10 relative">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
          <Navigation className="h-5 w-5 text-primary" />
          <div>
            <div className="text-sm text-gray-500">剩余距离</div>
            <div className="font-semibold text-gray-900">{formatDistance(order.distance)}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
          <div className="relative">
            <Clock className="h-5 w-5 text-success" />
          </div>
          <div>
            <div className="text-sm text-gray-500">预计到达</div>
            <div className="font-semibold text-gray-900">{currentTime} ({formatTime(5)})</div>
          </div>
        </div>
      </div>

      {/* Map */}
      <MapView
        merchantName={order.merchant.name}
        showControls={true}
      />

      {/* Merchant Info Card */}
      <div className="p-4">
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="success" className="bg-green-100 text-green-700">
                    取货点
                  </Badge>
                  <span className="text-sm text-gray-500">建议 {currentTime} 前取货</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {order.merchant.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{order.merchant.address}</p>
                
                <div className="flex flex-wrap gap-2">
                  {order.merchant.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 text-red-500 border-red-200 hover:bg-red-50"
          >
            <AlertCircle className="h-4 w-4 mr-2" />
            报告问题
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-success hover:bg-green-600"
            onClick={handleArrived}
          >
            <Check className="h-5 w-5 mr-2" />
            已到达商家
          </Button>
          <Button variant="outline" size="lg" className="w-14">
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Import missing icon
import { Clock } from 'lucide-react';
