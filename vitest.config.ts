import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["app/tests/**/*.test.{ts,tsx}"],
    setupFiles: ["app/tests/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: [
        "lib/schemas.ts",
        "app/components/floatinginput/floatinginput.tsx",
      ],
    },
  },
});
