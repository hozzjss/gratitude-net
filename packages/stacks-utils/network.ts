import { Configuration } from "@stacks/blockchain-api-client";
import { StacksMocknet } from "@stacks/network";
export const network = new StacksMocknet({ url: "http://localhost:3999" });
export const config = new Configuration({
  // basePath: "https://stacks-node.stacksmetagov.com",
  basePath: "http://localhost:3999",
});
