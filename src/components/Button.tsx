import { type PropsWithChildren, type HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
