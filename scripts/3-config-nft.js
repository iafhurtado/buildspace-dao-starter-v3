import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x245C08Ce2ED333c9FAb0947dB30c209585B46142", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "A Pallet",
        description: "This NFT will give you access to PalletDAO!",
        image: readFileSync("scripts/assets/pallet.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();