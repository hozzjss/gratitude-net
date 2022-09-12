import { Button } from "@gratitude-net/ui";
import {
  getNFTMeta,
  loadNftList,
  loadUserDisplayName,
  userSession,
} from "@gratitude-net/stacks-utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import { showConnect } from "@stacks/connect-react";
import {
  ClarityType,
  compressPublicKey,
  SomeCV,
  StringAsciiCV,
} from "@stacks/transactions";

export default function Web() {
  const login = useCallback(() => {
    showConnect({
      appDetails: {
        name: "Gratitude Network",
        icon: "https://placekitten.com/300/300",
      },
      userSession,
    });
  }, []);
  const isLoggedIn = useMemo(() => userSession.isUserSignedIn(), []);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      const profile = userSession.loadUserData().profile;
      if (profile) {
        const stxAddress = profile.stxAddress.testnet;
        setDisplayName(stxAddress);
        loadUserDisplayName(stxAddress).then(setDisplayName);
        loadNftList(stxAddress).then(async (data) => {
          const meta = await getNFTMeta(data[0].value.hex);
          if (meta?.type === ClarityType.ResponseOk) {
            console.log(meta.value.value.data);
          } else {
            console.log("Not found");
          }
        });
      }
    }
  }, []);
  return (
    <>
      <h1>{displayName}</h1>
      {!isLoggedIn && <Button onClick={login}>Login</Button>}
    </>
  );
}
