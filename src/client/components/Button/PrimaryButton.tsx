import React, { HTMLProps } from 'react';
import clsx from 'clsx';

export function PrimaryButton({ children, type, onClick, className }: HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className={clsx('p-2 text-white bg-blue-600 rounded-full', className)}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
