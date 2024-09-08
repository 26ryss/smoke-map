'use client';

import { Suspense, useEffect } from 'react';
import { TextInput, ActionIcon, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import places from '@/app/lib/places';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set('area', term);

    if (pathname !== '/') {
      push(`/?${params.toString()}`);
    } else {
      replace(`${pathname}?${params.toString()}`);
    }
  }

  const handleInputChange = useDebouncedCallback((term)=>{
    console.log(term);
  }, 500);

  const form = useForm({
    initialValues: {
      area: '',
    },

    validate : {
      area: (value) => {
        if (!value) {
          return 'エリア・駅を入力してください';
        }
        if (!places.find((area) => area.name === value)) {
          return 'エリア・駅が見つかりません';
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
    <div>
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
      </Suspense>
    </div>
  );
}