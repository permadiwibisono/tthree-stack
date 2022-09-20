import React, { HTMLProps } from 'react';
import clsx from 'clsx';

export function LinkButton({ children, type, onClick, className }: HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className={clsx('text-sm font-medium text-gray-600 underline', className)}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
