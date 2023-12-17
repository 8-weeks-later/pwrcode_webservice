import { DataProps } from '../common/interface';

export const extracting_state_logic_into_a_reducer: DataProps = {
  title: '상태 로직을 리듀서로 추출',
  kind: 'react',
  type: 'info',
  link: 'https://react.dev/learn/extracting-state-logic-into-a-reducer',
  content: `
  
여러 이벤트 핸들러에 분산된 상태 업데이트가 많은 컴포넌트는 부담스러울 수 있습니다. 

이러한 경우, 컴포넌트 외부의 모든 상태 업데이트 논리를 리듀서라고 하는 단일 함수에 통합할 수 있습니다.

### 상태 로직을 리듀서로 통합

컴포넌트가 복잡해지면, 컴포넌트의 상태가 업데이트되는 다양한 방식을 한 눈에 확인하기 더 어려워질 수 있습니다.

각 이벤트 핸들러는 상태를 업데이트하기 위해 setTasks를 호출합니다. 

이 컴포넌트가 커짐에 따라, 전체에 뿌려지는 상태 논리의 양도 늘어납니다. 

이러한 복잡도를 줄이고, 모든 로직을 접근하기 쉬운 한 곳에 유지하려면, 해당 상태 로직을 "리듀서"라고 하는

컴포넌트 외부의 단일 함수로 이동할 수 있습니다.

---

리듀서는 상태를 처리하는 다른 방법입니다. 

다음 세 단계를 통해 

useState에서 useReducer로 마이그레이션 가능

1. 상태를 설정하는 부분을 액션을 전파하는 곳으로 이동

2. reducer 함수를 작성 

3. 컴포넌트의 reducer를 사용  



### 단계 1. 상태를 설정하는 부분에서 액션을 전파하는 곳으로 이동 

- 리듀서로 상태를 관리하는 것은 상태를 직접 설정하는 것과 약간 다름 

- 상태를 설정하여 React에게 "무엇을 해야 하는지" 알려주는 대신, 

이밴트 핸들러에서 "액션"을 전달하여 "사용자가 방금 수행한 작업"을 지정

- 주의! 상태 업데이트 로직은 다른 곳에 있음

- 사용자의 의도를 더 잘 설명(작업 설정 대신, 작업 추가/변경/삭제 작업을 전달)


- 일반 JavaScript 객체입니다. 무엇을 넣을지는 여러분이 결정하지만 일반적으로 발생한 일에 

대한 최소한의 정보만 포함해야 함 (나중 단계에서 dispatch 기능 자체를 추가)

### 메모 

- 작업 객체는 어떤 모양이든 가질 수 있음 

- 관례적으로, 발생한 일을 설명하는 문자열 유형을 제공하고 다른 필드에

추가 정보를 전달하는 것이 일반적입니다. 

- 타입은 컴포넌트마다 다르므로, 이 예로서는 '추가' 또는 '추가_태스크'가 괜찮습니다. 

- 무슨 일이 일어났는지 알 수 있는 이름을 선택하세요!





`,
};
