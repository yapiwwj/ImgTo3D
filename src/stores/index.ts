import { createPinia } from "pinia"; //引入pinia
import piniaPluginPersistedState from "pinia-plugin-persistedstate"; //引入持久化插件

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

export default pinia;
export * from "./modules/test";
