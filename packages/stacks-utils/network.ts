import { Configuration } from "@stacks/blockchain-api-client";
import { StacksMocknet } from "@stacks/network";
export const network = new StacksMocknet({ url: "http://localhost:9509" });
export const config = new Configuration({
  // basePath: "https://stacks-node.stacksmetagov.com",
  basePath: "http://localhost:9509",
});
