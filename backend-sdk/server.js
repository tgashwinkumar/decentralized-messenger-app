// const express = require("express");
// // Import Moralis
// const Moralis = require("moralis").default;
// // Import the EvmChain dataType
// const { EvmChain } = require("@moralisweb3/common-evm-utils");

// const app = express();
// const port = 3001;

// // Add a variable for the api key, address and chain
// const MORALIS_API_KEY =
//   "lNzqPvoBwNbFmurrdz07m7UxUZRbBZhBK0nwl6D992AxFXkGm8BY7AwXqhATh8Fe";
// const address = "0x2DC411fB66cB22fdcCdf9fAEDF5162EDa95a8430";
// const chain = EvmChain.ETHEREUM;

// const newMessage = new Moralis.

// app.get("/demo", async (req, res) => {
//   try {
//     // Get and return the crypto data
//     const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
//       address,
//       chain,
//     });
//     // Format the native balance formatted in ether via the .ether getter
//     const native = nativeBalance.result.balance.ether;
//     res.status(200);
//     res.json({ native });
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get("/transactions", async (req, res) => {
//   try {
//     const response = await Moralis.EvmApi.transaction.getWalletTransactions({
//       address,
//       chain,
//     });
//     res.status(200).send(response.toJSON());
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // Add this a startServer function that initialises Moralis
// const startServer = async () => {
//   await Moralis.start({
//     apiKey: MORALIS_API_KEY,
//   });

//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// };

// // Call startServer()
// startServer();

// in the index.js file

const express = require("express");
const app = express();
const port = 5000;
const Gun = require("gun");

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`Gun server running on port ${port}🔥`);
});

Gun({ web: server });
