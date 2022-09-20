import { useCallback, useState } from 'react';
import { Grocery } from '@prisma/client';

import { LinkButton } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { GroceryInput, GroceryItem, GroceryList } from '../components/Grocery';
import { trpc } from '../components/hooks/trpc';

export default function Home() {
  const [newItem, setNewItem] = useState<string>('');

  const { data: list, refetch } = trpc.useQuery(['findAll']);
  const insertMutation = trpc.useMutation(['insertOne'], {
    onSuccess: () => refetch()
  });
  const deleteAllMutation = trpc.useMutation(['deleteAll'], {
    onSuccess: () => refetch()
  });
  const updateOneMutation = trpc.useMutation(['updateOne'], {
    onSuccess: () => refetch()
  });

  const insertOne = useCallback(() => {
    if (newItem === '') return;

    insertMutation.mutate({
      title: newItem
    });

    setNewItem('');
  }, [newItem, insertMutation]);

  const onClearAll = useCallback(() => {
    if (list?.length) {
      deleteAllMutation.mutate({
        ids: list.map((item) => item.id)
      });
    }
  }, [list, deleteAllMutation]);

  const updateOne = useCallback(
    (item: Grocery) => {
      updateOneMutation.mutate({
        ...item,
        checked: !item.checked
      });
    },
    [updateOneMutation]
  );
  return (
    <main>
      <Card>
        <CardContent>
          <CardHeader action={<LinkButton onClick={onClearAll}>Clear All</LinkButton>}>
            <h1 className="text-base font-medium tracking-wide text-gray-900 mr-2">Grocery List</h1>
            <span className="h-5 w-5 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full text-xs">
              {list?.length ?? 0}
            </span>
          </CardHeader>
          <GroceryList>
            {list?.map((item) => (
              <GroceryItem key={item.id} item={item} onUpdate={updateOne} />
            ))}
          </GroceryList>
        </CardContent>
        <form
          className="w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6"
          onSubmit={(e) => {
            e.preventDefault();
            insertOne();
          }}
        >
          <GroceryInput value={newItem} onChange={(e) => setNewItem(e.target.value)} onSubmit={insertOne} />
        </form>
      </Card>
    </main>
  );
}
