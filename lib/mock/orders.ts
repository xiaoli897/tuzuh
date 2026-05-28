import { Order } from '@/lib/types';

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'BD99824',
    type: '特快送',
    status: 'pending',
    merchant: {
      name: '老张家手工面馆（软件园店）',
      address: '科苑北路科苑中心B座102',
      phone: '13800138001',
      tags: ['停车便利', '出餐快'],
    },
    user: {
      name: '用户地址（脱敏）',
      address: '科技园南区海王大厦 A座 2205室',
      phone: '13800138002',
    },
    distance: 3200,
    estimatedTime: 22,
    payment: 8.5,
    items: [
      { id: '1', name: '招牌红烧牛肉面（大份）', quantity: 1, note: '加辣，加蛋', checked: false },
      { id: '2', name: '冰镇酸梅汤', quantity: 2, checked: false },
      { id: '3', name: '一次性餐具套装', quantity: 1, checked: false },
    ],
    pickupCode: '4829',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    orderNumber: 'BD99825',
    type: '配送',
    status: 'pending',
    merchant: {
      name: '瑞幸咖啡 Luckin Coffee',
      address: '大冲商务中心C座大堂',
      phone: '13800138003',
      tags: [],
    },
    user: {
      name: '用户地址（脱敏）',
      address: '万象天地水广场办公楼 12F',
      phone: '13800138004',
    },
    distance: 1500,
    estimatedTime: 12,
    payment: 5.2,
    items: [
      { id: '1', name: '生椰拿铁', quantity: 2, checked: false },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    orderNumber: 'BD99826',
    type: '特快送',
    status: 'pending',
    merchant: {
      name: '鲜果切大王（高新店）',
      address: '高新中四道阳光社区底商',
      phone: '13800138005',
      tags: [],
    },
    user: {
      name: '用户地址（脱敏）',
      address: '中兴通讯研发大楼 8楼南区',
      phone: '13800138006',
    },
    distance: 4800,
    estimatedTime: 35,
    payment: 12.4,
    subsidy: 3,
    items: [
      { id: '1', name: '缤纷水果拼盘', quantity: 1, checked: false },
    ],
    createdAt: new Date().toISOString(),
  },
];

export const mockOrderDetails: Record<string, Order> = {
  '1': {
    ...mockOrders[0],
    orderNumber: 'ORD-9982415',
    subsidy: 6.5,
    earnings: {
      base: 6.5,
      distance: 2.8,
      onTime: 1.5,
      weight: 0.5,
      tip: 4.5,
      bonus: 1.5,
    },
    deliveryStats: {
      distance: 3.2,
      time: 18,
    },
  },
  '2': mockOrders[1],
  '3': mockOrders[2],
};
