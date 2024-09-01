'use client';

import { Suspense } from 'react';
import { TextInput, ActionIcon, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import { colors } from '@/styles/colors';
import places from '@/app/lib/places';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set('area', term);
    replace(`${pathname}?${params.toString()}`);
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
                borderColor: `${colors.secondary}`, // 任意の色に変更
                '&:focus': {
                  borderColor: `${colors.primary}`, // フォーカス時の色も変更
                },
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
            gradient={{ from: `${colors.primary}`, to: `${colors.secondary}`, deg: 90 }}
            type="submit"
          >
            <IconSearch style={{ width: '70%', height: '70%' }} stroke={2} />
          </ActionIcon>
        </form>
      </Suspense>
    </div>
  );
}