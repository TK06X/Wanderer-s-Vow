import { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import autoImport from "./autoImport";

export default function createVitePlugins() {
  const plugins: Plugin[] = [vue()];
  autoImport(plugins);
  return plugins;
}
