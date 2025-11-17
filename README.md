# KRDS 디자인 템플릿 모노레포

이 저장소는 **KRDS 디자인 시스템**을 활용한 React와 Vue 템플릿 프로젝트를 모노레포 구조로 관리합니다.  
각 템플릿은 Vite를 빌드 도구로 사용하며, 빠른 개발 환경과 일관된 디자인 시스템 적용을 목표로 합니다.

---

## 폴더 구조

```
template/
├── react-template/   # React + Vite 템플릿
├── vue-template/     # Vue 3 + Vite 템플릿
├── .gitignore        # 공통 Git 무시 파일
└── README.md         # 종합 안내 문서
```

---

## 주요 특징

- **KRDS 디자인 시스템**: React, Vue 모두에서 KRDS UIUX 및 @krds.ui/vue 패키지 사용
- **Vite 기반**: 빠른 번들링과 개발 서버, HMR 지원
- **프로젝트별 독립성**: 각 템플릿별로 독립적인 설정 및 의존성 관리
- **ESLint 적용**: 코드 품질 유지를 위한 린트 규칙 적용
- **컴포넌트 분리**: Header, SideMenu, Content 등 주요 UI 컴포넌트 분리 설계

---

## 시작하기

### 1. 의존성 설치

각 템플릿 폴더(react-template, vue-template)에서 각각 의존성을 설치합니다.

```bash
cd react-template
npm install

cd ../vue-template
npm install
```

### 2. 개발 서버 실행

각 템플릿 폴더에서 아래 명령어로 개발 서버를 실행합니다.

```bash
npm run dev
```

### 3. 빌드

각 템플릿 폴더에서:

```bash
npm run build
```

---

## KRDS 디자인 시스템 설치 방법 및 사용법

### 1. Vue 템플릿에서 KRDS UI 사용

#### 패키지 설치

```bash
npm install @krds.ui/vue krds-uiux
```

#### CSS 적용

`src/main.js` 또는 `src/main.ts`에서 KRDS UI의 CSS를 import합니다.

```js
import "@krds.ui/vue/dist/style.css";
```

#### 동적 기능 JS 적용

동적 UI 기능(메뉴 토글 등)이 필요하다면, KRDS UIUX의 JS 파일도 import합니다.

```js
import "krds-uiux/resources/js/component/ui-script.js";
```

#### 컴포넌트에서 사용

KRDS UIUX에서 제공하는 HTML 구조와 클래스를 그대로 Vue 컴포넌트의 템플릿에 적용할 수 있습니다.

```vue
<template>
  <button class="krds-btn primary">KRDS 버튼</button>
</template>
```

#### SCSS 사용 시 주의사항

SCSS를 직접 사용할 경우,  
`krds-uiux/resources` 디렉터리를 프로젝트로 복사한 뒤  
SCSS 내 import 경로를 직접 수정해야 합니다.

---

## 참고 자료

- [KRDS 디자인 시스템](https://github.com/krds-design/krds)
- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://react.dev/)
- [Vue 공식 문서](https://vuejs.org/)

---

이 저장소를 기반으로 다양한 프레임워크에서 KRDS 디자인 시스템을 빠르게 적용해보세요!
