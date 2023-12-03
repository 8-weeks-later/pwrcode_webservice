export interface DataProps {
  id?: number;
  title: string;
  kind: string;
  type: string;
  link: string;
  content?: string;
}

const contentDatas: string[] = [
  `
내장 React Hooks

- Hook을 사용하면 컴포넌트에서 다양한 React 기능을 사용 가능

- 자신만의 Hook을 생성 가능 

1. State Hooks

- 상태를 통해 컴포넌트는 사용자 입력과 같은 정보를 "기억"할 수 있습니다.

- "useState" : 직접 업데이트할 수 있는 상태 변수를 선언

- "useReducer" : 리듀서 함수 내부의 업데이트 논리를 사용해 상태 변수를 선언

2. 

`,
  `

컴포넌트는 상호 작용의 결과로 화면의 내용을 변경해야 하는 경우가 많음 

React에서는 컴포넌트 별로 가지고 있는 메모리를 상태라고 함

### 일반 변수로는 충분하지 않음 

1. 지역 변수는 렌더링 간에 유지되지 않음 

  - React가 이 컴포넌트를 두 번째로 렌더링 시에, 처음부터 렌더링함

  - 즉, 지역 변수에 대한 변경 사항을 고려하지 않음 

2. 지역 변수를 변경해도 렌더링이 트리거되지 않음 

  - React는 새 데이터로 컴포넌트를 다시 렌더링해야 한다는 것을 인식하지 못함

새 데이터로 컴포넌트를 업데이트하려면, 다음 두 가지 작업이 수행되어야 함 

1. 렌더링 간에 데이터를 유지

2. React를 트리거하여 새 데이터로 컴포넌트를 렌더링함(리렌더링)
`,
  `

React is Very Good!
    
`,
];

export const data: DataProps[] = [
  {
    title: '내장 React Hooks',
    kind: 'react',
    type: 'info',
    link: 'https://react.dev/reference/react/hooks',
  },
  {
    title: '상태: 컴포넌트의 메모리',
    kind: 'react',
    type: 'info',
    link: 'https://react.dev/learn/state-a-components-memory',
  },
  {
    title: '상태 로직을 리듀서로 추출',
    kind: 'react',
    type: 'info',
    link: 'https://react.dev/learn/extracting-state-logic-into-a-reducer',
  },
].map((data: DataProps, index: number) => {
  const newData = {
    ...data,
  };
  newData.id = index + 1;
  newData.content = contentDatas[index];
  return newData;
});
