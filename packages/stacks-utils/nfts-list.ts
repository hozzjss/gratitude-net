import {
  AccountsApi,
  SmartContractsApi,
  NonFungibleTokensApi,
} from "@stacks/blockchain-api-client";
import { config } from "./network";
import {
  hexToCV,
  ResponseErrorCV,
  ResponseOkCV,
  SomeCV,
  StringAsciiCV,
  UIntCV,
} from "@stacks/transactions";
const accountsApi = new AccountsApi(config);
const nftApi = new NonFungibleTokensApi(config);

const smartContractsApi = new SmartContractsApi(config);

export const loadNftList = (principal: string) => {
  accountsApi.getAccountAssets({ principal });
  return nftApi.getNftHoldings({ principal });
  // const allAssets = await accountsApi.getAccountAssets({ principal: address });
  // const results = allAssets.results as {
  //   event_type: "non_fungible_token_asset";
  //   asset: NftEvent;
  // }[];

  // const nftAssets = results
  //   .filter((item) => item.event_type === "non_fungible_token_asset")
  //   .map(
  //     (item: { event_type: "non_fungible_token_asset"; asset: NftEvent }) =>
  //       item.asset
  //   );
  // return nftAssets;
};

export const getNFTMeta = (id: string) => {
  return smartContractsApi
    .callReadOnlyFunction({
      contractAddress: "ST32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32N9D9WJ83",
      contractName: "gratitude-protocol-v2",
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
