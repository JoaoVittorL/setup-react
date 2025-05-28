import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'flex gap-4 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-green-500 text-white-500 shadow hover:bg-green-500/80',
        destructive: 'bg-red-500 text-white-500 shadow-sm hover:bg-red-500/80',
        secondary: 'bg-blue-500 text-white-500 shadow-sm hover:bg-blue-500/80',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        full: 'w-full p-2',
        default: 'p-2',
        sm: 'rounded-md px-4 py-2 text-xs',
        lg: 'rounded-md px-8 py-2',
        icon: 'p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  title?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, title, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const iconClasses = 'flex-shrink-0';

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {icon && (
          <span className={cn(iconClasses, title || children)} aria-hidden="true">
            {icon}
          </span>
        )}
        {title || children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
