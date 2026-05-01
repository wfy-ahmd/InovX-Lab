import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Card = forwardRef(({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn(
      'rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-50 shadow-sm',
      className
    )}
    {...props}
  />
);
Card.displayName = 'Card';

const CardHeader = forwardRef(({ className, ...props }, ref) =>
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef(({ className, ...props }, ref) =>
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef(({ className, ...props }, ref) =>
  <p
    ref={ref}
    className={cn('text-sm text-neutral-400', className)}
    {...props}
  />
);
CardDescription.displayName = 'CardDescription';

export { Card, CardHeader, CardTitle, CardDescription };
