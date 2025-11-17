# KRDS 디자인 템플릿 모노레포

이 저장소는 **KRDS 디자인 시스템**을 활용한 React와 Vue 템플릿 프로젝트를 모노레포 구조로 관리합니다.  
각 템플릿은 Vite를 빌드 도구로 사용하며, 빠른 개발 환경과 일관된 디자인 시스템 적용을 목표로 합니다.

---

## 폴더 구조

```
template/
├── react-template/   # React + Vite 템플릿
├── vue-template/     # Vue 3 + Vite 템플릿
├── package.json      # 루트 워크스페이스 및 공통 패키지 관리
├── .gitignore        # 공통 Git 무시 파일
└── README.md         # 종합 안내 문서
```

---

## 주요 특징

- **모노레포 관리**: npm workspaces로 여러 프레임워크 템플릿을 한 번에 관리
- **KRDS 디자인 시스템**: React, Vue 모두에서 krds-uiux 패키지 사용
- **Vite 기반**: 빠른 번들링과 개발 서버, HMR 지원
- **프로젝트별 독립성**: 각 템플릿별로 독립적인 설정 및 의존성 관리
- **ESLint 적용**: 코드 품질 유지를 위한 린트 규칙 적용
- **컴포넌트 분리**: Header, SideMenu, Content 등 주요 UI 컴포넌트 분리 설계

---

## 시작하기

### 1. 의존성 설치

루트 디렉터리에서 모든 의존성을 한 번에 설치합니다.

```bash
npm install
```

### 2. 개발 서버 실행

각 템플릿 폴더에서 실행하거나, 루트에서 워크스페이스 명령어로 실행할 수 있습니다.

#### React 템플릿

```bash
cd react-template
npm run dev
```

또는

```bash
npm --workspace react-template run dev
```

#### Vue 템플릿

```bash
cd vue-template
npm run dev
```

또는

```bash
npm --workspace vue-template run dev
```

### 3. 빌드

각 템플릿 폴더에서:

```bash
npm run build
```

---

## KRDS 디자인 시스템 사용

두 템플릿 모두 `krds-uiux` 패키지를 의존성에 포함하고 있습니다.  
컴포넌트에서 아래와 같이 KRDS 디자인 시스템을 사용할 수 있습니다.

```js
// React 예시
import "krds-uiux/resources/css/krds-uiux.css";
import { Button } from "krds-uiux";
```

```js
// Vue 예시
import "krds-uiux/resources/css/krds-uiux.css";
import { Button } from "krds-uiux";
```

> SCSS를 직접 사용할 경우, krds-uiux의 `/resources` 디렉터리를 복제하고 SCSS 내 경로를 직접 수정해야 합니다.

---

## 참고 자료

- [KRDS 디자인 시스템](https://github.com/krds-design/krds)
- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://react.dev/)
- [Vue 공식 문서](https://vuejs.org/)
- [npm Workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)

---

이 저장소를 기반으로 다양한 프레임워크에서 KRDS 디자인 시스템을 빠르게 적용해보세요!
