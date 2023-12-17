import * as ReactData from '../React';

export interface DataProps {
  id?: number;
  title: string;
  kind: string;
  type: string;
  link: string;
  content?: string;
}

export const mappingData = Object.values(ReactData).map(
  (data: DataProps, index: number) => {
    const newData = {
      ...data,
    };
    newData.id = index + 1;
    return newData;
  },
);
