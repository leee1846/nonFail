# client

초기설계를 하면서 라이브러리 사용법의 기본적인 통일성도 필요하다고 생각이 들어서 이해를 돕기위하여 간단하게 plus,minus버튼을 만들어보았습니다. 제가 시도한 접근 방식은 어떠한지 한번 생각해 주시고 적극적으로 의견 말해주시면 수정하겠습니다.

## 설치한 라이브러리 종류

react,
reduxjs/toolkit,
redux-logger,
axios,
react-router-dom,
styled-components,
swr,
styled-reset

## 폴더트리 구조

components,
pages,
stores,
styles,
axios

### components 폴더

1. components폴더안에 세부적인 폴더로 다시 나눠지며 대문자로 시작합니다.
2. 컴포넌트폴더명은 컴포넌트명과 동일하며 컴포넌트파일도 대문자로 시작합니다.
3. 컴포넌트 파일은 tsx파일로 작성하였습니다.( ex:TestComponent.tsx )
4. 컴포넌트 폴더안에 style파일이 같이 들어가며 컴포넌트파일이름에서.style만 추가됩니다.
   ( ex:TestComponent.style.ts )
5. 컴포넌트 파일을 들어가보시면 style 모듈의 전체를 가져오는 방식으로 import 하였습니다.
   ( ex: import \* as Styled from "./TestComponent.style" )
   태그를 작성할때 style태그와 컴포넌트를 구분하기 위함입니다.

### pages 폴더

CSR을 제공하는 react-router-dom을 사용하여 가장 큰 틀의 page를 따로 담은 폴더입니다.

1. RootPage는 모든 page들의 기준점이 되야할것같아서 따로 뺐습니다.
2. 그외에 추가될 page들이 들어갈 폴더입니다.

### stores 폴더

상태관리를 하게될때 store를 정리한 폴더입니다.

1. rootStore는 reducer들을 combine하고 최종적으로 store를 export하기 위해서 따로 뺐습니다.

### styles 폴더

globalStyle을 따로 뺐으며, 레이아웃을 잡아야하는 파일이 생긴다거나 재사용가능한 style을 따로 뺐으면해서 만들었습니다.

### theme 폴더

theme은 계속적으로 재사용될 style palette를 모아둔 폴더입니다.

### env

env파일의 변수명은 항상 REACT_APP으로 시작해야하며, 값이 변경되었을때는 yarn start를 다시해야 확인이 가능합니다.

### commit 메시지 작성규칙

1. feature : 신규기능
2. style : 스타일/css 관련
3. test : test
4. fix : 기능 오류수정
