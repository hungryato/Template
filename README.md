# 프론트엔드 템플릿 모노레포

이 저장소는 **React**와 **Vue** 템플릿 프로젝트를 모노레포 구조로 관리합니다.  
각 템플릿은 Vite를 빌드 도구로 사용하며, 빠른 개발 환경과 HMR(Hot Module Replacement)을 지원합니다.

---

## 폴더 구조

```
template/
├── react-template/   # React + Vite 템플릿
├── vue-template/     # Vue 3 + Vite + TypeScript 템플릿
└── README.md         # 종합 안내 문서
```

---

## 주요 특징

- **Vite 기반**: 빠른 번들링과 개발 서버, HMR 지원
- **프로젝트별 독립성**: 각 템플릿별로 독립적인 설정 및 의존성 관리
- **ESLint 적용**: 코드 품질 유지를 위한 린트 규칙 적용 (React 템플릿)
- **TypeScript 지원**: Vue 템플릿은 TypeScript 기반으로 구성
- **Docker 지원**: Vue 템플릿은 Docker 개발 환경 제공

---

## React 템플릿

### 기술 스택

- React 19
- Vite 7
- ESLint 9

### 시작하기

```bash
cd react-template
npm install
npm run dev
```

### 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run lint` | ESLint 검사 |
| `npm run preview` | 빌드 결과 미리보기 |

---

## Vue 템플릿

### 기술 스택

- Vue 3
- Vite 7
- TypeScript 5
- Docker

### 시작하기

```bash
cd vue-template
npm install
npm run dev
```

### 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |

### Docker로 실행

```bash
cd vue-template
docker-compose up
```

---

## 참고 자료

- [Vite 공식 문서](https://vitejs.dev/)
- [React 공식 문서](https://react.dev/)
- [Vue 공식 문서](https://vuejs.org/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
