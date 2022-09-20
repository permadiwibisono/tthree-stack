import { Grocery } from '@prisma/client';

interface GroceryItemProps {
  item: Grocery;
  onUpdate?: (item: Grocery) => void;
}

export function GroceryItem({ item, onUpdate }: GroceryItemProps) {
  return (
    <div className="h-12 border-b flex items-center justify-start px-3">
      <input
        type="checkbox"
        className="w-4 h-4 border-gray-300 rounded mr-4"
        defaultChecked={item.checked as boolean}
        onChange={() => onUpdate?.(item)}
      />
      <h2 className="text-gray-600 tracking-wide text-sm">{item.title}</h2>
    </div>
  );
}
