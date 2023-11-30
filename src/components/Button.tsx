import React, { type PropsWithChildren, type HTMLProps } from 'react';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
