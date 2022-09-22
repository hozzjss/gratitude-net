import { Input, Stack } from "@mui/material";
import { openContractCall } from "@stacks/connect-react";
import {
  noneCV,
  PostConditionMode,
  someCV,
  stringAsciiCV,
} from "@stacks/transactions";
import { principalCV } from "@stacks/transactions/dist/clarity/types/principalCV";
import { ChangeEvent, useCallback, useState } from "react";
import { network } from "@gratitude-net/stacks-utils";
import { Button } from "@gratitude-net/ui";

export default function SendGratitude() {
  const [address, setAddress] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }, []);

  const sendGratitude = useCallback(() => {
    if (!address) {
      alert("Please enter an address");
      return;
    }
    openContractCall({
      contractAddress: "ST32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32N9D9WJ83",
      contractName: "gratitude-protocol-v2",
      functionArgs: [
        // someCV(
        //   bufferCV(
        //     Buffer.from(
        //       "0000000000000000000000000000000100000000000000000000000000000000",
        //       "hex"
        //     )
        //   )
        // ),
        noneCV(),
        stringAsciiCV("https://placekitten.com/200/300"),
        // noneCV(),
        someCV(principalCV(address)),
      ],
      functionName: "mint",
      network,
      postConditionMode: PostConditionMode.Allow,
    });
  }, [address]);
  return (
    <Stack>
      <Input
        placeholder="recipient SP.."
        value={address}
        onChange={handleChange}
        style={{ marginBottom: "1rem" }}
      />
      <Button variant="contained" onClick={sendGratitude}>
        Send Gratitude
      </Button>
    </Stack>
  );
}
