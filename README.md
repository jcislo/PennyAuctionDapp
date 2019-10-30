## Penny Auction Dapp
By: Pawel Leja 
GBC ID: 101232470

This repo includes the auction smart contracts as well as a basic front-end for interaction. This project utilizes Truffle and Ganache. You must create a ganache test blockchain and use the given seed key to access the test wallets on meta-mask.

The contracts must be deployed to ganache via 'truffle migrate'.

After you migrate the contracts, open ./build/contracts/Auction.json and copy/paste the entirety of the file into ./src/abi/auctionAbi.js

Keep the first line 'export const pennyAuction = ' and paste in the abi there.

You may now start the app with npm start.

Thank you.