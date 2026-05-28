'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  Camera, 
  QrCode, 
  Hash,
  AlertCircle,
  Home
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { mockOrderDetails } from '@/lib/mock/orders';
import { useApp } from '@/lib/context/AppContext';

export default function PickupPage() {
  const params = useParams();
  const router = useRouter();
  const { updateOrder } = useApp();
  const [pickupCode, setPickupCode] = React.useState('');
  const [checkedItems, setCheckedItems] = React.useState<Set<string>>(new Set());
  
  const order = mockOrderDetails[params.id as string];

  if (!order) {
    return <div>订单不存在</div>;
  }

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const handleConfirmPickup = () => {
    updateOrder(order.id, { status: 'picking' });
    router.push(`/complete/${order.id}`);
  };

  const allChecked = checkedItems.size === order.items.length;

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      <Header
        title="确认取货"
        showBack
        onBack={() => router.back()}
      />

      <div className="p-4 space-y-4">
        {/* Suggestion Badge */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
            <Clock className="h-3 w-3 mr-1" />
            建议取货时间: 12:45 前
          </Badge>
          <Badge variant="success" className="bg-green-100 text-green-700">
            已到达商家
          </Badge>
        </div>

        {/* Merchant Info */}
        <Card className="overflow-hidden">
          <div className="p-4 flex gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
              <Home className="h-6 w-6 text-gray-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{order.merchant.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{order.merchant.address}</p>
            </div>
            <div className="flex items-center justify-center">
              <Store className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        {/* Item Checklist */}
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-gray-900">商品核对清单</h3>
                <span className="text-primary">({checkedItems.size}/{order.items.length})</span>
              </div>
              <span className="text-sm text-gray-500">请逐一勾选</span>
            </div>
            
            <div className="space-y-3">
              {order.items.map((item) => {
                const isChecked = checkedItems.has(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isChecked ? 'bg-primary/10' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-primary border-primary text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`font-medium ${isChecked ? 'text-primary' : 'text-gray-900'}`}>
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-sm text-gray-500 mt-0.5">{item.note}</p>
                      )}
                    </div>
                    <span className="text-primary font-medium">x{item.quantity}</span>
                  </button>
                );
              })}
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              如有缺漏请点击底部上报问题
            </p>
          </div>
        </Card>

        {/* Verification Options */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="overflow-hidden">
            <button className="w-full p-6 flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium text-gray-900">拍照备货</span>
              <span className="text-xs text-gray-500">确保保留暂存</span>
              <Badge variant="success" className="bg-green-100 text-green-700">
                已完成
              </Badge>
            </button>
          </Card>
          
          <Card className="overflow-hidden">
            <button className="w-full p-6 flex flex-col items-center gap-3 opacity-50">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <QrCode className="h-6 w-6 text-gray-400" />
              </div>
              <span className="font-medium text-gray-900">扫码确认</span>
              <span className="text-xs text-gray-500">扫描包裹单号</span>
              <Badge variant="secondary" className="bg-gray-100 text-gray-500">
                未扫码
              </Badge>
            </button>
          </Card>
        </div>

        {/* Pickup Code */}
        <Card className="overflow-hidden">
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Hash className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-gray-900">取货验证码</h3>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="请输入商家提供的取货码"
                value={pickupCode}
                onChange={(e) => setPickupCode(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary-dark">
                验证
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              若商家未提供验证码，请联系在线客服处理
            </p>
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
            上报缺货
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-primary hover:bg-primary-dark"
            disabled={!allChecked}
            onClick={handleConfirmPickup}
          >
            {allChecked ? '核对商品' : '请先核对商品'}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Import missing icons
import { Clock, Package, Store } from 'lucide-react';
