'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Card } from '@/components/ui/card';
import { mockWallet } from '@/lib/mock/wallet';
import { formatCurrency } from '@/lib/utils';

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="钱包" />
      <div className="p-4 space-y-4">
        <Card className="overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-gray-600 mb-2">账户余额</h3>
            <p className="text-4xl font-bold text-primary mb-4">{formatCurrency(mockWallet.balance)}</p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-500">今日收入</p>
                <p className="text-xl font-semibold text-gray-900">{formatCurrency(mockWallet.todayEarnings)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">今日完成订单</p>
                <p className="text-xl font-semibold text-gray-900">{mockWallet.totalOrders}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
