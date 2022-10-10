import { forwardRef } from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const classes = props.className + " ml-8 rounded-md bg-indigo-600 py-2 px-3 font-semibold leading-5 text-white hover:bg-indigo-500";
    return (
        <button
            ref={ref}
            {...props}
            className={classes}
        >
            {props.label}
        </button>
    );
});
