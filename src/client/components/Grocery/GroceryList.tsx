import React from 'react';

export function GroceryList({ children }: { children: React.ReactNode }) {
  return <div className="overflow-y-auto h-72">{children}</div>;
}
