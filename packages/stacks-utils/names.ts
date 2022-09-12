import { NamesApi } from "@stacks/blockchain-api-client";
import { config } from "./network";

const namesApi = new NamesApi(config);

export const loadUserDisplayName = async (address: string) => {
  const {
    names: [firstName],
  } = await namesApi.getNamesOwnedByAddress({ address, blockchain: "stacks" });
  return firstName || address;
};
