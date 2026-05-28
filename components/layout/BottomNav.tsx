'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ClipboardList, 
  History, 
  Wallet, 
  User 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    href: '/',
    label: '任务',
    icon: <ClipboardList className="h-6 w-6" />,
  },
  {
    href: '/history',
    label: '历史',
    icon: <History className="h-6 w-6" />,
  },
  {
    href: '/wallet',
    label: '钱包',
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    href: '/profile',
    label: '我的',
    icon: <User className="h-6 w-6" />,
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors',
                isActive ? 'text-primary' : 'text-gray-500'
              )}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
