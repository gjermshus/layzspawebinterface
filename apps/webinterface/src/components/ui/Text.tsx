import { cva, type VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const textStyles = cva(['font-sans'], {
    variants: {
        variant: {
            body: 'text-[14px]',
            bodySmall: 'text-[13px]',
            caption: 'uppercase text-sm',
            captionSmall: 'uppercase text-xs',
            subtitle: 'text-[12px]',
            subtitleSmall: 'text-[11px]',
            subtitleExtraSmall: 'text-[10px]',
        },
        weight: {
            medium: 'font-medium',
            bold: 'font-bold',
            semibold: 'font-semibold',
        },
        italic: {
            true: 'italic',
            false: '',
        },
    },
    defaultVariants: {
        variant: 'body',
        weight: 'medium',
    },
});

export interface TextProps extends VariantProps<typeof textStyles>, PropsWithChildren {}

export function Text({ children, ...styleProps }: TextProps) {
    return <div className={textStyles(styleProps)}>{children}</div>;
}
