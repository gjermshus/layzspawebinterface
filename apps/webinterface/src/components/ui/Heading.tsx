import { cva, type VariantProps } from 'class-variance-authority';
import { type ReactNode } from 'react';

const headingVariants = cva(['font-sans dark:bg-black dark:text-white text-black'], {
    variants: {
        variant: {
            h1: 'text-3xl',
            h2: 'text-2xl',
            h3: 'text-xl',
            h4: 'text-lg',
            h5: 'text-base',
            h6: 'text-sm',
        },
        weight: {
            medium: 'font-medium',
            bold: 'font-bold',
            semibold: 'font-semibold',
        },
    },
    defaultVariants: {
        variant: 'h1',
        weight: 'semibold',
    },
});

export interface HeadingProps extends VariantProps<typeof headingVariants> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
    children: ReactNode;
}

export function Heading({ as: Tag = 'div', children, ...styleProps }: HeadingProps) {
    return <Tag className={headingVariants(styleProps)}>{children}</Tag>;
}
