import { atom, useSetAtom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { ResponseBodyProps } from '../design/organisms/CardGroup/CardGroupDataComponent.server';
import { QueryKey } from '@tanstack/react-query';

export interface SearchKeywordProps {
  skill: string;
  keyword: string;
}

export const searchKeywordAtom = atom<SearchKeywordProps>({
  skill: 'React',
  keyword: '',
});

export const [testAtom] = atomsWithQuery((get) => ({
  queryKey: ['articles', get(searchKeywordAtom).keyword],
  queryFn: async ({
    queryKey: [, searchKeyword],
  }: {
    queryKey: QueryKey;
  }): Promise<ResponseBodyProps> => {
    console.log('QUERY: ', searchKeyword, get(searchKeywordAtom).keyword);

    const res = await fetch('http://localhost:4000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: searchKeyword,
      }),
    });

    return res.json();
  },
}));

export const readAndWriteSearchKeywordAtom = atom(
  (get) => get(searchKeywordAtom),

  (_get, set, newSearchKeyword: SearchKeywordProps) => {
    return set(searchKeywordAtom, newSearchKeyword);
  },
);
