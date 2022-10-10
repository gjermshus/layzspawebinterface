import { type ComponentProps, forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export interface ButtonOrLinkProps extends Omit<Partial<LinkProps> & ComponentProps<'a'> & ComponentProps<'button'>, 'ref'> {}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonOrLinkProps>(({ href, to, ...props }, ref: any) => {
    if (href) {
        // es-lint-disable-next-line jsx-a11y/anchor-has-content
        return <a ref={ref} href={href} rel="noreferrer noopener" target="_blank" {...props} />;
    }

    if (to) {
        return <Link ref={ref} to={to} {...props} />;
    }

    return <button ref={ref} type={props.type || 'button'} {...props} />;
});
