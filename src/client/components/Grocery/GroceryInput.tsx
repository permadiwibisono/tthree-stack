import React from 'react';
import { PrimaryButton } from '../Button';

export interface GroceryInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}
export function GroceryInput({ value, onChange, onSubmit }: GroceryInputProps) {
  return (
    <div className="bg-white rounded-lg drop-shadow-md mt-4">
      <div className="relative">
        <input
          className="w-full py-4 pl-3 pr-16 text-sm rounded-lg"
          type="text"
          placeholder="Grocery item name..."
          onChange={onChange}
          value={value}
        />
        <PrimaryButton type="submit" onClick={onSubmit} className="absolute -translate-y-1/2 top-1/2 right-4">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </PrimaryButton>
      </div>
    </div>
  );
}
