# Vue 3 + Vite 템플릿

이 프로젝트는 **Vue 3**와 **Vite**를 기반으로 한 최소한의 템플릿입니다.  
빠른 개발 환경과 HMR(Hot Module Replacement), 그리고 기본적인 ESLint 규칙이 적용되어 있어, 빠르게 Vue 프로젝트를 시작할 수 있습니다.

## 주요 특징

- **Vite**: 빠른 번들링과 개발 서버 제공
- **Vue 3**: 최신 Vue 개발 환경 지원
- **HMR**: 코드 변경 시 빠른 반영
- **ESLint**: 코드 품질 유지를 위한 린트 규칙 적용
- **`<script setup>` SFC**: 간결하고 효율적인 컴포넌트 작성 방식 지원

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

---

## TypeScript로 변환하는 방법

1. **TypeScript 및 타입 지원 패키지 설치**
   ```bash
   npm install --save-dev typescript @types/node @vitejs/plugin-vue-jsx vue-tsc
   ```

2. **tsconfig.json 생성**
   ```bash
   npx tsc --init
   ```
   또는 아래와 같이 직접 생성:
   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "ESNext",
       "moduleResolution": "Node",
       "strict": true,
       "jsx": "preserve",
       "importHelpers": true,
       "esModuleInterop": true,
       "allowJs": true,
       "sourceMap": true,
       "baseUrl": ".",
       "types": ["node"],
       "paths": {
         "@/*": ["src/*"]
       }
     },
     "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
   }
   ```

3. **Vite 설정 파일을 TypeScript로 변경**
   - `vite.config.js` → `vite.config.ts`로 이름 변경
   - 내부 코드에서 타입 지원

4. **엔트리 파일 및 컴포넌트 수정**
   - `src/main.js` → `src/main.ts`로 변경
   - 각 컴포넌트의 `<script setup>`에 `lang="ts"` 추가  
     예시:
     ```vue
     <script setup lang="ts">
     import { ref } from 'vue'
     // 타입 선언 등 추가
     </script>
     ```

5. **타입 체크 및 개발 서버 실행**
   - 타입 체크:  
     ```bash
     npx vue-tsc --noEmit
     ```
   - 개발 서버 실행:  
     ```bash
     npm run dev
     ```

---

## 참고 자료

- [Vite 공식 문서](https://vitejs.dev/)
- [Vue 공식 문서](https://vuejs.org/)
- [script setup 문서](https://vuejs.org/guide/extras/composition-api-faq.html#script-setup)
- [IDE 지원 가이드](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [Vue + TypeScript 가이드](https://vuejs.org/guide/typescript/overview.html)