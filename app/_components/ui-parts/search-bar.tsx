'use client';

import { Suspense, useEffect, useState } from 'react';
import { TextInput, ActionIcon, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { isAreaExist } from '@/app/lib/data';
import SuggestBox from '@/app/_components/ui-parts/suggest-box';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const pathname = usePathname();
  const { push } = useRouter();

  async function handleSearch(term: string) {
    const areaExist = await isAreaExist(term);
    if (areaExist){
      const url = `/search/${term}`;
      push(url);
    } else {
      form.setFieldError('area', 'エリア・駅が見つかりません');
    }
  }

  const handleInputChange = useDebouncedCallback((term)=>{
    setQuery(term);
  }, 700);

  const form = useForm({
    initialValues: {
      area: '',
    },

    validate : {
      area: (value) => {
        if (!value) {
          return 'エリア・駅を入力してください';
        }
        return null;
      },
    }
  });

  useEffect(() => {
    if (pathname !== '/') {
      form.setFieldValue('area', '');
    }
  }, [pathname])

  return (
    <div className="relative">
      <Suspense>
        <form onSubmit={form.onSubmit((e) => handleSearch(e.area))} className="flex flex-row">
          <TextInput
            radius="xs"
            placeholder="エリア・駅"
            key={form.key('area')}
            styles={{
              input: {
                borderColor: "#000",
              },
            }}
            {...form.getInputProps('area')}
            onChange={(e) => {
              form.getInputProps('area').onChange(e);
              handleInputChange(e.currentTarget.value);
            }}
          />
          <ActionIcon
            variant="gradient"
            size={36}
            radius="xs"
            aria-label="Gradient action icon"
            gradient={{ from: "#000", to: "#000", deg: 90 }}
            type="submit"
          >
            <IconSearch style={{ width: '70%', height: '70%' }} stroke={2} />
          </ActionIcon>
        </form>
        <div className="absolute w-full">
          <SuggestBox query={query} />
        </div>
      </Suspense>
    </div>
  );
}