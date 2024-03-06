import commonjs from "@rollup/plugin-commonjs";

export default {
  plugins: [commonjs()],
  build: {
    rollupOptions: {
      external: ["paper"],
    },
  },
};
