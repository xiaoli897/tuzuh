'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Order } from '@/lib/types';
import { mockOrders } from '@/lib/mock/orders';

interface AppContextType {
  orders: Order[];
  currentOrder: Order | null;
  setCurrentOrder: (order: Order | null) => void;
  acceptOrder: (orderId: string) => void;
  completeOrder: (orderId: string) => void;
  updateOrder: (orderId: string, updates: Partial<Order>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const acceptOrder = (orderId: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: 'accepted' } : order
    ));
    const order = orders.find(o => o.id === orderId);
    if (order) {
      setCurrentOrder({ ...order, status: 'accepted' });
    }
  };

  const completeOrder = (orderId: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: 'completed' } : order
    ));
  };

  const updateOrder = (orderId: string, updates: Partial<Order>) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, ...updates } : order
    ));
    if (currentOrder?.id === orderId) {
      setCurrentOrder(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  return (
    <AppContext.Provider value={{ 
      orders, 
      currentOrder, 
      setCurrentOrder,
      acceptOrder, 
      completeOrder,
      updateOrder
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
