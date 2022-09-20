import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="h-screen flex flex-col justify-center items-center bg-slate-100">{children}</div>;
}
