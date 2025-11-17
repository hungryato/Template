# React + Vite 템플릿

이 프로젝트는 **React**와 **Vite**를 기반으로 한 최소한의 템플릿입니다. 빠른 개발 환경과 HMR(Hot Module Replacement), 그리고 기본적인 ESLint 규칙이 적용되어 있어, 빠르게 React 프로젝트를 시작할 수 있습니다.

## 주요 특징

- **Vite**: 빠른 번들링과 개발 서버 제공
- **React**: 최신 React 개발 환경 지원
- **HMR**: 코드 변경 시 빠른 반영
- **ESLint**: 코드 품질 유지를 위한 린트 규칙 적용

## 공식 플러그인

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react): Babel(또는 rolldown-vite 사용 시 oxc) 기반 Fast Refresh 지원
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): SWC 기반 Fast Refresh 지원

## 프로젝트 시작 방법

1. 의존성 설치  
   ```bash
   npm install
   ```

2. 개발 서버 실행  
   ```bash
   npm run dev
   ```

3. 빌드  
   ```bash
   npm run build
   ```

## 타입스크립트 사용

프로덕션 환경에서는 타입스크립트와 타입 기반 ESLint 규칙 사용을 권장합니다.  
[React + TypeScript 템플릿](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)을 참고하세요.

## 참고 자료

- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://react.dev/)
- [ESLint 공식 문서](https://eslint.org/)

---
이 템플릿을 기반으로 자유롭게 프로젝트를 확장해보세요!