import { DataProps } from '../common/interface';

export const state_a_components_memory: DataProps = {
  title: '상태: 컴포넌트의 메모리',
  kind: 'react',
  type: 'info',
  link: 'https://react.dev/learn/state-a-components-memory',
  content: `

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
};
