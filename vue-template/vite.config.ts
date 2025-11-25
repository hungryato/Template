import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [vue()],
  server: {
    host: true, // 외부에서 접근 가능하도록 설정
    port: 5173, // Docker와 매칭된 포트
    strictPort: true, // 포트가 사용 중이면 실패하도록 설정
    watch: {
      usePolling: true, // 파일 변경 감지를 위해 폴링 사용
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
