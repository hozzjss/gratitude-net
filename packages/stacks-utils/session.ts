import { AppConfig, UserSession } from "@stacks/auth";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({
  appConfig,
  sessionOptions: {
    storeOptions: {
      localStorageKey: "stacks-auth-session",
    },
  },
});
