import React from 'react';

export interface CardHeaderProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function CardHeader({ children, action }: CardHeaderProps) {
  return (
    <div className="flex flex-row items-center justify-between p-3 border-b border-slate-200">
      <div className="flex flex-row items-center justify-between">{children}</div>
      {action}
    </div>
  );
}
