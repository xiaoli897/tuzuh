import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props },
  ref
) => {
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-dark shadow-md',
    secondary: 'bg-secondary text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50',
    ghost: 'hover:bg-gray-100 hover:text-gray-900',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
      variants[variant],
      sizes[size],
      className
    )}
      ref={ref}
      {...props}
    />
  );
}
);
Button.displayName = 'Button';

export { Button };
