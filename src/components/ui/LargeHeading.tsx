import { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const largeHeadingVariants = cva(
  'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
      defaultVariants: {
        size: 'default',
      },
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  className,
  size,
  children,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(largeHeadingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

LargeHeading.displayName = 'Large Heading';

export default LargeHeading;
