import {
  AccountsApi,
  SmartContractsApi,
  NonFungibleTokensApi,
  NftEvent,
} from "@stacks/blockchain-api-client";
import { config } from "./network";
import {
  bufferCV,
  cvToHex,
  hexToCV,
  ResponseErrorCV,
  ResponseOkCV,
  SomeCV,
  StringAsciiCV,
  UIntCV,
} from "@stacks/transactions";
const accountsApi = new AccountsApi(config);
// const nftApi = new NonFungibleTokensApi(config);

const smartContractsApi = new SmartContractsApi(config);

export const loadNftList = async (address: string) => {
  const allAssets = await accountsApi.getAccountAssets({ principal: address });
  const results = allAssets.results as {
    event_type: "non_fungible_token_asset";
    asset: NftEvent;
  }[];

  const nftAssets = results
    .filter((item) => item.event_type === "non_fungible_token_asset")
    .map(
      (item: { event_type: "non_fungible_token_asset"; asset: NftEvent }) =>
        item.asset
    );
  return nftAssets;
};

export const getNFTMeta = (id: string) => {
  return smartContractsApi
    .callReadOnlyFunction({
      contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      contractName: "kindness-protocol",
      functionName: "get-token-uri",
      readOnlyFunctionArgs: {
        sender: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
        arguments: [id],
      },
    })
    .then((data) => {
      if (data.result) {
        return hexToCV(data.result) as
          | ResponseOkCV<SomeCV<StringAsciiCV>>
          | ResponseErrorCV<UIntCV>;
      }
    });
};
