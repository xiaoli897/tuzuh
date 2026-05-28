export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  note?: string;
  checked: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  type: '配送' | '特快送';
  status: 'pending' | 'accepted' | 'picking' | 'delivering' | 'completed';
  merchant: {
    name: string;
    address: string;
    phone: string;
    tags: string[];
    image?: string;
  };
  user: {
    name: string;
    address: string;
    phone: string;
  };
  distance: number;
  estimatedTime: number;
  payment: number;
  subsidy?: number;
  items: OrderItem[];
  pickupCode?: string;
  createdAt: string;
  earnings?: {
    base: number;
    distance: number;
    onTime: number;
    weight: number;
    tip: number;
    bonus?: number;
  };
  deliveryStats?: {
    distance: number;
    time: number;
  };
}

export interface Wallet {
  balance: number;
  todayEarnings: number;
  totalOrders: number;
}
