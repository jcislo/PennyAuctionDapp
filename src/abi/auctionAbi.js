export const pennyAuction = {
    "contractName": "Auction",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "beneficiary",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "winners",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "items",
        "outputs": [
          {
            "name": "itemId",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "register",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_itemId",
            "type": "uint256"
          },
          {
            "name": "_count",
            "type": "uint256"
          }
        ],
        "name": "bid",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "revealWinners",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"register\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"beneficiary\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_itemId\",\"type\":\"uint256\"},{\"name\":\"_count\",\"type\":\"uint256\"}],\"name\":\"bid\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"revealWinners\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"winners\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"items\",\"outputs\":[{\"name\":\"itemId\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/sonic/Desktop/Assignment/penny-auction-dapp/contracts/Auction_1.sol\":\"Auction\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/sonic/Desktop/Assignment/penny-auction-dapp/contracts/Auction_1.sol\":{\"keccak256\":\"0xe62a24ef96a93c5eaf37d2fa105893e6c9c26999880e624bd5550f4f4837da4a\",\"urls\":[\"bzzr://056314ed2e319698850dceaa8d2068bc078b99f0e66a0254457c74c3386c2bc4\"]}},\"version\":1}",
    "bytecode": "0x6080604052600060175533601660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606060405180604001604052806000815260200182815250600d60006003811061007057fe5b6002020160008201518160000155602082015181600101908051906020019061009a929190610148565b5090505060405180604001604052806001815260200182815250600d6001600381106100c257fe5b600202016000820151816000015560208201518160010190805190602001906100ec929190610148565b5090505060405180604001604052806002815260200182815250600d60026003811061011457fe5b6002020160008201518160000155602082015181600101908051906020019061013e929190610148565b50905050506101ba565b828054828255906000526020600020908101928215610184579160200282015b82811115610183578251825591602001919060010190610168565b5b5090506101919190610195565b5090565b6101b791905b808211156101b357600081600090555060010161019b565b5090565b90565b6108a4806101c96000396000f3fe6080604052600436106100555760003560e01c80631aa3a0081461005a57806338af3eed14610064578063598647f8146100bb578063952587d6146100f3578063a2fb11751461010a578063bfb231d214610185575b600080fd5b6100626101d4565b005b34801561007057600080fd5b50610079610345565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100f1600480360360408110156100d157600080fd5b81019080803590602001909291908035906020019092919050505061036b565b005b3480156100ff57600080fd5b50610108610719565b005b34801561011657600080fd5b506101436004803603602081101561012d57600080fd5b8101908080359060200190929190505050610824565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019157600080fd5b506101be600480360360208110156101a857600080fd5b8101908080359060200190929190505050610857565b6040518082815260200191505060405180910390f35b6017546001601754600481106101e657fe5b60030201600101819055503360016017546004811061020157fe5b6003020160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560016017546004811061025757fe5b600302016000018190555060016017546004811061027157fe5b600302016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201548160000155600182015481600101556002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050601760008154809291906001019190505550565b601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015610422576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4e6f7420656e6f75676820746f6b656e7300000000000000000000000000000081525060200191505060405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154116104d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f7520617265206f7574206f6620746f6b656e73000000000000000000000081525060200191505060405180910390fd5b6002821115610550576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4974656d20646f6573206e6f742065786973740000000000000000000000000081525060200191505060405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154036000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546004811061066957fe5b60030201600001819055506000600d836003811061068357fe5b60020201905060008090505b8281101561071357816001016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549080600181540180825580915050906001820390600052602060002001600090919290919091505550808060010191505061068f565b50505050565b60008090505b6003811015610821576000600d826003811061073757fe5b600202019050600081600101805490501461081357600081600101805490508260010180549050438161076657fe5b048161076e57fe5b069050600082600101828154811061078257fe5b906000526020600020015490506001816004811061079c57fe5b6003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16601385600381106107d157fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505b50808060010191505061071f565b50565b6013816003811061083157fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d816003811061086457fe5b60020201600091509050806000015490508156fea165627a7a72305820e7b67e4dbce3a6b5e26be27bca1b53d6b42ec5f6402c69c8a2f35e8411e818c00029",
    "deployedBytecode": "0x6080604052600436106100555760003560e01c80631aa3a0081461005a57806338af3eed14610064578063598647f8146100bb578063952587d6146100f3578063a2fb11751461010a578063bfb231d214610185575b600080fd5b6100626101d4565b005b34801561007057600080fd5b50610079610345565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100f1600480360360408110156100d157600080fd5b81019080803590602001909291908035906020019092919050505061036b565b005b3480156100ff57600080fd5b50610108610719565b005b34801561011657600080fd5b506101436004803603602081101561012d57600080fd5b8101908080359060200190929190505050610824565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019157600080fd5b506101be600480360360208110156101a857600080fd5b8101908080359060200190929190505050610857565b6040518082815260200191505060405180910390f35b6017546001601754600481106101e657fe5b60030201600101819055503360016017546004811061020157fe5b6003020160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560016017546004811061025757fe5b600302016000018190555060016017546004811061027157fe5b600302016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201548160000155600182015481600101556002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050601760008154809291906001019190505550565b601660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015610422576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4e6f7420656e6f75676820746f6b656e7300000000000000000000000000000081525060200191505060405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154116104d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f596f7520617265206f7574206f6620746f6b656e73000000000000000000000081525060200191505060405180910390fd5b6002821115610550576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4974656d20646f6573206e6f742065786973740000000000000000000000000081525060200191505060405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154036000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546004811061066957fe5b60030201600001819055506000600d836003811061068357fe5b60020201905060008090505b8281101561071357816001016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549080600181540180825580915050906001820390600052602060002001600090919290919091505550808060010191505061068f565b50505050565b60008090505b6003811015610821576000600d826003811061073757fe5b600202019050600081600101805490501461081357600081600101805490508260010180549050438161076657fe5b048161076e57fe5b069050600082600101828154811061078257fe5b906000526020600020015490506001816004811061079c57fe5b6003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16601385600381106107d157fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505b50808060010191505061071f565b50565b6013816003811061083157fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d816003811061086457fe5b60020201600091509050806000015490508156fea165627a7a72305820e7b67e4dbce3a6b5e26be27bca1b53d6b42ec5f6402c69c8a2f35e8411e818c00029",
    "sourceMap": "25:5143:0:-;;;806:1;789:18;;1134:10;1120:11;;:24;;;;;;;;;;;;;;;;;;1188;1234:38;;;;;;;;1247:1;1234:38;;;;1260:10;1234:38;;;1223:5;1229:1;1223:8;;;;;;;;;;:49;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;1423:39;;;;;;;;1436:1;1423:39;;;;1450:10;1423:39;;;1412:5;1418:1;1412:8;;;;;;;;;;:50;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;1484:39;;;;;;;;1497:1;1484:39;;;;1511:10;1484:39;;;1473:5;1479:1;1473:8;;;;;;;;;;:50;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;840:722;25:5143;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "25:5143:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1568:565;;;:::i;:::-;;725:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;725:26:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2139:1690;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2139:1690:0;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3835:1023;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3835:1023:0;;;:::i;:::-;;663:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;663:25:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;663:25:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;603:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;603:20:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;603:20:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1568:565;1645:11;;1613:7;1621:11;;1613:20;;;;;;;;;;:29;;:43;;;;1933:10;1905:7;1913:11;;1905:20;;;;;;;;;;:25;;;:38;;;;;;;;;;;;;;;;;;2025:1;1986:7;1994:11;;1986:20;;;;;;;;;;:36;;:40;;;;2081:7;2089:11;;2081:20;;;;;;;;;;2054:12;:24;2067:10;2054:24;;;;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2112:11;;:13;;;;;;;;;;;;;1568:565::o;725:26::-;;;;;;;;;;;;;:::o;2139:1690::-;2949:6;2905:12;:24;2918:10;2905:24;;;;;;;;;;;;;;;:40;;;:50;;2897:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3035:1;2992:12;:24;3005:10;2992:24;;;;;;;;;;;;;;;:40;;;:44;2984:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3088:1;3077:7;:12;;3069:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3459:6;3416:12;:24;3429:10;3416:24;;;;;;;;;;;;;;;:40;;;:49;3373:12;:24;3386:10;3373:24;;;;;;;;;;;;;;;:40;;:92;;;;3561:12;:24;3574:10;3561:24;;;;;;;;;;;;;;;:40;;;3500:7;3508:12;:24;3521:10;3508:24;;;;;;;;;;;;;;;:33;;;3500:42;;;;;;;;;;:58;;:101;;;;3659:20;3682:5;3688:7;3682:14;;;;;;;;;;3659:37;;3711:6;3720:1;3711:10;;3707:115;3725:6;3723:1;:8;3707:115;;;3752:7;:18;;3776:12;:24;3789:10;3776:24;;;;;;;;;;;;;;;:33;;;3752:58;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3752:58:0;;;;;;;;;;;;;;;;;;;;;;3733:3;;;;;;;3707:115;;;;2139:1690;;;:::o;3835:1023::-;4028:7;4038:1;4028:11;;4023:828;4046:1;4041:2;:6;4023:828;;;4070:24;4097:5;4103:2;4097:9;;;;;;;;;;4070:36;;4157:1;4124:11;:22;;:29;;;;:34;4121:719;;4225:16;4306:11;:22;;:29;;;;4273:11;:22;;:29;;;;4245:12;:57;;;;;;4244:91;;;;;;4225:110;;4393:13;4409:11;:22;;4432:11;4409:35;;;;;;;;;;;;;;;;4393:51;;4769:7;4777:8;4769:17;;;;;;;;;;:22;;;;;;;;;;;;4755:7;4763:2;4755:11;;;;;;;;;:36;;;;;;;;;;;;;;;;;;4121:719;;;4023:828;4049:4;;;;;;;4023:828;;;;3835:1023::o;663:25::-;;;;;;;;;;;;;;;;;;;;;;;:::o;603:20::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.5.8;\r\ncontract Auction {\r\n    // Data\r\n    //Structure to hold details of the item\r\n    struct Item {\r\n        uint itemId; // id of the item\r\n        uint[] itemTokens; //tokens bid in favor of the item\r\n    }\r\n    //Structure to hold the details of a persons\r\n    struct Person {\r\n        uint remainingTokens; // tokens remaining with bidder\r\n        uint personId; // it serves as tokenId as well\r\n        address addr;//address of the bidder\r\n    }\r\n    mapping(address => Person) tokenDetails; //address to person\r\n    Person[4] bidders;//Array containing 4 person objects\r\n    Item[3] public items;//Array containing 3 item objects\r\n    address[3] public winners;//Array for address of winners\r\n    address public beneficiary;//owner of the smart contract\r\n\r\n    uint bidderCount=0;//counter\r\n    //functions\r\n    constructor() public payable { //constructor\r\n        //Part 1 Task 1. Initialize beneficiary with address of smart contract’s owner\r\n        //Hint. In the constructor,\"msg.sender\" is the address of the owner.\r\n        // ** Start code here. 1 line approximately. **/\r\n        beneficiary = msg.sender;\r\n        //** End code here. **/\r\n        uint[] memory emptyArray;\r\n        items[0] = Item({itemId:0,itemTokens:emptyArray});\r\n        //Part 1 Task 2. Initialize two items with at index 1 and 2.\r\n        // ** Start code here. 2 lines approximately. **/\r\n        items[1] = Item({itemId:1, itemTokens:emptyArray});\r\n        items[2] = Item({itemId:2, itemTokens:emptyArray});\r\n        //** End code here**/\r\n    }\r\n    function register() public payable{\r\n        bidders[bidderCount].personId = bidderCount;\r\n        //Part 1 Task 3. Initialize the address of the bidder\r\n        /*Hint. Here the bidders[bidderCount].addr should be initialized with\r\n        address of the registrant.*/\r\n        // ** Start code here. 1 line approximately. **/\r\n        bidders[bidderCount].addr = msg.sender;\r\n        //** End code here. **\r\n        bidders[bidderCount].remainingTokens = 5; // only 5 tokens\r\n        tokenDetails[msg.sender] = bidders[bidderCount];\r\n        bidderCount++;\r\n    }\r\n    function bid(uint _itemId, uint _count) public payable {\r\n    /*\r\n        Bids tokens to a particular item.\r\n        Arguments:\r\n        _itemId -- uint, id of the item\r\n        _count -- uint, count of tokens to bid for the item\r\n    */\r\n    /*\r\n        Part 1 Task 4. Implement the three conditions below.\r\n        4.1 If the number of tokens remaining with the bidder is < count of tokens bid, revert\r\n        4.2 If there are no tokens remaining with the bidder,revert.\r\n        4.3 If the id of the item for which bid is placed, is greater than 2, revert.\r\n        Hint: \"tokenDetails[msg.sender].remainingTokens\" gives the details of the number of tokens remaining with the bidder.\r\n\r\n    */\r\n    // ** Start code here. 2 lines approximately. **/\r\n    require(tokenDetails[msg.sender].remainingTokens >= _count, \"Not enough tokens\");\r\n    require(tokenDetails[msg.sender].remainingTokens > 0, \"You are out of tokens\");\r\n    require(_itemId <= 2, \"Item does not exist\");\r\n    //** End code here. **\r\n    /*Part 1 Task 5. Decrement the remainingTokens by the number of tokens bid\r\n    Hint. \"tokenDetails[msg.sender].remainingTokens\" should be decremented by \"_count\". */\r\n    // ** Start code here. 1 line approximately. **\r\n    tokenDetails[msg.sender].remainingTokens = tokenDetails[msg.sender].remainingTokens - _count;\r\n    //** End code here. **\r\n    bidders[tokenDetails[msg.sender].personId].remainingTokens = tokenDetails[msg.sender].remainingTokens;\r\n    //updating the same balance in bidders map.\r\n\r\n    Item storage bidItem = items[_itemId];\r\n        for(uint i = 0; i<_count; i++){\r\n            bidItem.itemTokens.push(tokenDetails[msg.sender].personId);\r\n        }\r\n    }\r\n    function revealWinners() public {\r\n\r\n    /*\r\n        Iterate over all the items present in the auction. If at least on person has placed a bid, randomly select the winner\r\n    */\r\n        for (uint id = 0; id < 3; id++) {\r\n            Item storage currentItem = items[id];\r\n            if(currentItem.itemTokens.length != 0){\r\n            // generate random# from block number\r\n            uint randomIndex = (block.number /\r\n            currentItem.itemTokens.length) % currentItem.itemTokens.length;\r\n            // Obtain the winning tokenId\r\n            uint winnerId = currentItem.itemTokens[randomIndex];\r\n            /* Part 1 Task 6. Assign the winners.\r\n            Hint.\" bidders[winnerId] \" will give you the person object with the winnerId.\r\n            you need to assign the address of the person obtained above to winners[id] */\r\n            // ** Start coding here *** 1 line approximately.\r\n            winners[id] = bidders[winnerId].addr;\r\n            //** end code here*\r\n            }\r\n        }\r\n    }\r\n\r\n    //  Miscellaneous methods: Below methods are used to assist Grading. Please\r\n    // DONOT CHANGE THEM.\r\n    // function getPersonDetails(uint id) public constant\r\n    // returns(uint,uint,address){\r\n    // return\r\n    // (bidders[id].remainingTokens,bidders[id].personId,bidders[id].addr);\r\n    // }\r\n}",
    "sourcePath": "C:/Users/sonic/Desktop/Assignment/penny-auction-dapp/contracts/Auction_1.sol",
    "ast": {
      "absolutePath": "/C/Users/sonic/Desktop/Assignment/penny-auction-dapp/contracts/Auction_1.sol",
      "exportedSymbols": {
        "Auction": [
          270
        ]
      },
      "id": 271,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".8"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 270,
          "linearizedBaseContracts": [
            270
          ],
          "name": "Auction",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "Auction.Item",
              "id": 7,
              "members": [
                {
                  "constant": false,
                  "id": 3,
                  "name": "itemId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "130:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "130:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6,
                  "name": "itemTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "170:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "170:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "170:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Item",
              "nodeType": "StructDefinition",
              "scope": 270,
              "src": "107:122:0",
              "visibility": "public"
            },
            {
              "canonicalName": "Auction.Person",
              "id": 14,
              "members": [
                {
                  "constant": false,
                  "id": 9,
                  "name": "remainingTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 14,
                  "src": "310:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11,
                  "name": "personId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14,
                  "src": "373:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 14,
                  "src": "429:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Person",
              "nodeType": "StructDefinition",
              "scope": 270,
              "src": "285:187:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 18,
              "name": "tokenDetails",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "478:39:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                "typeString": "mapping(address => struct Auction.Person)"
              },
              "typeName": {
                "id": 17,
                "keyType": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "486:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "478:26:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                  "typeString": "mapping(address => struct Auction.Person)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 16,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 14,
                  "src": "497:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$14_storage_ptr",
                    "typeString": "struct Auction.Person"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 22,
              "name": "bidders",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "544:17:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                "typeString": "struct Auction.Person[4]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 19,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 14,
                  "src": "544:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$14_storage_ptr",
                    "typeString": "struct Auction.Person"
                  }
                },
                "id": 21,
                "length": {
                  "argumentTypes": null,
                  "hexValue": "34",
                  "id": 20,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "551:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_4_by_1",
                    "typeString": "int_const 4"
                  },
                  "value": "4"
                },
                "nodeType": "ArrayTypeName",
                "src": "544:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage_ptr",
                  "typeString": "struct Auction.Person[4]"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 26,
              "name": "items",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "603:20:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                "typeString": "struct Auction.Item[3]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 23,
                  "name": "Item",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 7,
                  "src": "603:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                    "typeString": "struct Auction.Item"
                  }
                },
                "id": 25,
                "length": {
                  "argumentTypes": null,
                  "hexValue": "33",
                  "id": 24,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "608:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_3_by_1",
                    "typeString": "int_const 3"
                  },
                  "value": "3"
                },
                "nodeType": "ArrayTypeName",
                "src": "603:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage_ptr",
                  "typeString": "struct Auction.Item[3]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 30,
              "name": "winners",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "663:25:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$3_storage",
                "typeString": "address[3]"
              },
              "typeName": {
                "baseType": {
                  "id": 27,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "663:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 29,
                "length": {
                  "argumentTypes": null,
                  "hexValue": "33",
                  "id": 28,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "671:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_3_by_1",
                    "typeString": "int_const 3"
                  },
                  "value": "3"
                },
                "nodeType": "ArrayTypeName",
                "src": "663:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$3_storage_ptr",
                  "typeString": "address[3]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 32,
              "name": "beneficiary",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "725:26:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 31,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "725:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 35,
              "name": "bidderCount",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "789:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 33,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "789:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 34,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "806:1:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "internal"
            },
            {
              "body": {
                "id": 75,
                "nodeType": "Block",
                "src": "869:693:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "1120:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 39,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 627,
                          "src": "1134:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1134:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1120:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 42,
                    "nodeType": "ExpressionStatement",
                    "src": "1120:24:0"
                  },
                  {
                    "assignments": [
                      46
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 46,
                        "name": "emptyArray",
                        "nodeType": "VariableDeclaration",
                        "scope": 75,
                        "src": "1188:24:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 44,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "1188:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 45,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "1188:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 47,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1188:24:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 55,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 48,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1223:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                            "typeString": "struct Auction.Item storage ref[3] storage ref"
                          }
                        },
                        "id": 50,
                        "indexExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1229:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1223:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage",
                          "typeString": "struct Auction.Item storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 52,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1247:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "id": 53,
                            "name": "emptyArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46,
                            "src": "1260:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "id": 51,
                          "name": "Item",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "1234:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Item_$7_storage_ptr_$",
                            "typeString": "type(struct Auction.Item storage pointer)"
                          }
                        },
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "itemId",
                          "itemTokens"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "1234:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_memory",
                          "typeString": "struct Auction.Item memory"
                        }
                      },
                      "src": "1223:49:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "id": 56,
                    "nodeType": "ExpressionStatement",
                    "src": "1223:49:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 64,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1412:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                            "typeString": "struct Auction.Item storage ref[3] storage ref"
                          }
                        },
                        "id": 59,
                        "indexExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 58,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1418:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1412:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage",
                          "typeString": "struct Auction.Item storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 61,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1436:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          {
                            "argumentTypes": null,
                            "id": 62,
                            "name": "emptyArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46,
                            "src": "1450:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "id": 60,
                          "name": "Item",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "1423:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Item_$7_storage_ptr_$",
                            "typeString": "type(struct Auction.Item storage pointer)"
                          }
                        },
                        "id": 63,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "itemId",
                          "itemTokens"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "1423:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_memory",
                          "typeString": "struct Auction.Item memory"
                        }
                      },
                      "src": "1412:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "id": 65,
                    "nodeType": "ExpressionStatement",
                    "src": "1412:50:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 73,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1473:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                            "typeString": "struct Auction.Item storage ref[3] storage ref"
                          }
                        },
                        "id": 68,
                        "indexExpression": {
                          "argumentTypes": null,
                          "hexValue": "32",
                          "id": 67,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1479:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1473:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage",
                          "typeString": "struct Auction.Item storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 70,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1497:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "emptyArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46,
                            "src": "1511:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "id": 69,
                          "name": "Item",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "1484:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Item_$7_storage_ptr_$",
                            "typeString": "type(struct Auction.Item storage pointer)"
                          }
                        },
                        "id": 72,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "itemId",
                          "itemTokens"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "1484:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_memory",
                          "typeString": "struct Auction.Item memory"
                        }
                      },
                      "src": "1473:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "id": 74,
                    "nodeType": "ExpressionStatement",
                    "src": "1473:50:0"
                  }
                ]
              },
              "documentation": null,
              "id": 76,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 36,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "851:2:0"
              },
              "returnParameters": {
                "id": 37,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "869:0:0"
              },
              "scope": 270,
              "src": "840:722:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 113,
                "nodeType": "Block",
                "src": "1602:531:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "1613:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 81,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 80,
                            "name": "bidderCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35,
                            "src": "1621:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1613:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 82,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "personId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11,
                        "src": "1613:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 83,
                        "name": "bidderCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "1645:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1613:43:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 85,
                    "nodeType": "ExpressionStatement",
                    "src": "1613:43:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 92,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "1905:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 88,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "bidderCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35,
                            "src": "1913:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1905:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 89,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "addr",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13,
                        "src": "1905:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 90,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 627,
                          "src": "1933:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1933:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1905:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 93,
                    "nodeType": "ExpressionStatement",
                    "src": "1905:38:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "1986:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 96,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 95,
                            "name": "bidderCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35,
                            "src": "1994:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1986:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "1986:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "35",
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2025:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "1986:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 100,
                    "nodeType": "ExpressionStatement",
                    "src": "1986:40:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 101,
                          "name": "tokenDetails",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "2054:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                            "typeString": "mapping(address => struct Auction.Person storage ref)"
                          }
                        },
                        "id": 104,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 102,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 627,
                            "src": "2067:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2067:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2054:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Person_$14_storage",
                          "typeString": "struct Auction.Person storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "bidders",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "2081:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                            "typeString": "struct Auction.Person storage ref[4] storage ref"
                          }
                        },
                        "id": 107,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "bidderCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35,
                          "src": "2089:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2081:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Person_$14_storage",
                          "typeString": "struct Auction.Person storage ref"
                        }
                      },
                      "src": "2054:47:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Person_$14_storage",
                        "typeString": "struct Auction.Person storage ref"
                      }
                    },
                    "id": 109,
                    "nodeType": "ExpressionStatement",
                    "src": "2054:47:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2112:13:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 110,
                        "name": "bidderCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "2112:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 112,
                    "nodeType": "ExpressionStatement",
                    "src": "2112:13:0"
                  }
                ]
              },
              "documentation": null,
              "id": 114,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "register",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 77,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1585:2:0"
              },
              "returnParameters": {
                "id": 78,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1602:0:0"
              },
              "scope": 270,
              "src": "1568:565:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 209,
                "nodeType": "Block",
                "src": "2194:1635:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 122,
                                "name": "tokenDetails",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "2905:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                  "typeString": "mapping(address => struct Auction.Person storage ref)"
                                }
                              },
                              "id": 125,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 123,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 627,
                                  "src": "2918:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 124,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2918:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2905:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Person_$14_storage",
                                "typeString": "struct Auction.Person storage ref"
                              }
                            },
                            "id": 126,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "remainingTokens",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9,
                            "src": "2905:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 127,
                            "name": "_count",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118,
                            "src": "2949:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2905:50:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e6f7420656e6f75676820746f6b656e73",
                          "id": 129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2957:19:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e6a4c292a2678b9c898d987106e4b784681d3ef40e71d741a89ab96444ddb55d",
                            "typeString": "literal_string \"Not enough tokens\""
                          },
                          "value": "Not enough tokens"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e6a4c292a2678b9c898d987106e4b784681d3ef40e71d741a89ab96444ddb55d",
                            "typeString": "literal_string \"Not enough tokens\""
                          }
                        ],
                        "id": 121,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          630,
                          631
                        ],
                        "referencedDeclaration": 631,
                        "src": "2897:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2897:80:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 131,
                    "nodeType": "ExpressionStatement",
                    "src": "2897:80:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 133,
                                "name": "tokenDetails",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "2992:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                  "typeString": "mapping(address => struct Auction.Person storage ref)"
                                }
                              },
                              "id": 136,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 134,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 627,
                                  "src": "3005:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 135,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3005:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2992:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Person_$14_storage",
                                "typeString": "struct Auction.Person storage ref"
                              }
                            },
                            "id": 137,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "remainingTokens",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9,
                            "src": "2992:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3035:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2992:44:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206f7574206f6620746f6b656e73",
                          "id": 140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3038:23:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a55a73596485e9d4ebbba328cf59ca135046e7827a8d12f8a54e206516b6e3bf",
                            "typeString": "literal_string \"You are out of tokens\""
                          },
                          "value": "You are out of tokens"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a55a73596485e9d4ebbba328cf59ca135046e7827a8d12f8a54e206516b6e3bf",
                            "typeString": "literal_string \"You are out of tokens\""
                          }
                        ],
                        "id": 132,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          630,
                          631
                        ],
                        "referencedDeclaration": 631,
                        "src": "2984:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2984:78:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 142,
                    "nodeType": "ExpressionStatement",
                    "src": "2984:78:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 144,
                            "name": "_itemId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 116,
                            "src": "3077:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3088:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "3077:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4974656d20646f6573206e6f74206578697374",
                          "id": 147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3091:21:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ce0a686b3a77d89aa203ef1917c5a461c03ae6389a02bb3c3b9a97959d623907",
                            "typeString": "literal_string \"Item does not exist\""
                          },
                          "value": "Item does not exist"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ce0a686b3a77d89aa203ef1917c5a461c03ae6389a02bb3c3b9a97959d623907",
                            "typeString": "literal_string \"Item does not exist\""
                          }
                        ],
                        "id": 143,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          630,
                          631
                        ],
                        "referencedDeclaration": 631,
                        "src": "3069:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3069:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 149,
                    "nodeType": "ExpressionStatement",
                    "src": "3069:44:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 150,
                            "name": "tokenDetails",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "3373:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                              "typeString": "mapping(address => struct Auction.Person storage ref)"
                            }
                          },
                          "id": 153,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 151,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 627,
                              "src": "3386:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3386:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3373:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 154,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "3373:40:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 155,
                              "name": "tokenDetails",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "3416:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                "typeString": "mapping(address => struct Auction.Person storage ref)"
                              }
                            },
                            "id": 158,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 156,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 627,
                                "src": "3429:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3429:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3416:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Person_$14_storage",
                              "typeString": "struct Auction.Person storage ref"
                            }
                          },
                          "id": 159,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "remainingTokens",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9,
                          "src": "3416:40:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 160,
                          "name": "_count",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "3459:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3416:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3373:92:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 163,
                    "nodeType": "ExpressionStatement",
                    "src": "3373:92:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 164,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "3500:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 170,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 165,
                                "name": "tokenDetails",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "3508:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                  "typeString": "mapping(address => struct Auction.Person storage ref)"
                                }
                              },
                              "id": 168,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 166,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 627,
                                  "src": "3521:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 167,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3521:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3508:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Person_$14_storage",
                                "typeString": "struct Auction.Person storage ref"
                              }
                            },
                            "id": 169,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "personId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11,
                            "src": "3508:33:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3500:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "3500:58:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 172,
                            "name": "tokenDetails",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "3561:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                              "typeString": "mapping(address => struct Auction.Person storage ref)"
                            }
                          },
                          "id": 175,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 627,
                              "src": "3574:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3574:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3561:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "3561:40:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3500:101:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 178,
                    "nodeType": "ExpressionStatement",
                    "src": "3500:101:0"
                  },
                  {
                    "assignments": [
                      180
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 180,
                        "name": "bidItem",
                        "nodeType": "VariableDeclaration",
                        "scope": 209,
                        "src": "3659:20:0",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                          "typeString": "struct Auction.Item"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 179,
                          "name": "Item",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 7,
                          "src": "3659:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                            "typeString": "struct Auction.Item"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 184,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 181,
                        "name": "items",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "3682:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                          "typeString": "struct Auction.Item storage ref[3] storage ref"
                        }
                      },
                      "id": 183,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 182,
                        "name": "_itemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116,
                        "src": "3688:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3682:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3659:37:0"
                  },
                  {
                    "body": {
                      "id": 207,
                      "nodeType": "Block",
                      "src": "3737:85:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 200,
                                    "name": "tokenDetails",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18,
                                    "src": "3776:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                      "typeString": "mapping(address => struct Auction.Person storage ref)"
                                    }
                                  },
                                  "id": 203,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 201,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 627,
                                      "src": "3789:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 202,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3789:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3776:24:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Person_$14_storage",
                                    "typeString": "struct Auction.Person storage ref"
                                  }
                                },
                                "id": 204,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "personId",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11,
                                "src": "3776:33:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 195,
                                  "name": "bidItem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 180,
                                  "src": "3752:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                    "typeString": "struct Auction.Item storage pointer"
                                  }
                                },
                                "id": 198,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "itemTokens",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6,
                                "src": "3752:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3752:23:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) returns (uint256)"
                              }
                            },
                            "id": 205,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3752:58:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 206,
                          "nodeType": "ExpressionStatement",
                          "src": "3752:58:0"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 189,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "3723:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "_count",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "3725:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3723:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 208,
                    "initializationExpression": {
                      "assignments": [
                        186
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 186,
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "scope": 208,
                          "src": "3711:6:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 185,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "3711:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 188,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3720:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3711:10:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "3733:3:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 192,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "3733:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 194,
                      "nodeType": "ExpressionStatement",
                      "src": "3733:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "3707:115:0"
                  }
                ]
              },
              "documentation": null,
              "id": 210,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "bid",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 119,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 116,
                    "name": "_itemId",
                    "nodeType": "VariableDeclaration",
                    "scope": 210,
                    "src": "2152:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 115,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2152:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 118,
                    "name": "_count",
                    "nodeType": "VariableDeclaration",
                    "scope": 210,
                    "src": "2166:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 117,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2166:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2151:27:0"
              },
              "returnParameters": {
                "id": 120,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2194:0:0"
              },
              "scope": 270,
              "src": "2139:1690:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 268,
                "nodeType": "Block",
                "src": "3867:991:0",
                "statements": [
                  {
                    "body": {
                      "id": 266,
                      "nodeType": "Block",
                      "src": "4055:796:0",
                      "statements": [
                        {
                          "assignments": [
                            224
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 224,
                              "name": "currentItem",
                              "nodeType": "VariableDeclaration",
                              "scope": 266,
                              "src": "4070:24:0",
                              "stateVariable": false,
                              "storageLocation": "storage",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                "typeString": "struct Auction.Item"
                              },
                              "typeName": {
                                "contractScope": null,
                                "id": 223,
                                "name": "Item",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 7,
                                "src": "4070:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                  "typeString": "struct Auction.Item"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 228,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 225,
                              "name": "items",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26,
                              "src": "4097:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                                "typeString": "struct Auction.Item storage ref[3] storage ref"
                              }
                            },
                            "id": 227,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 226,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 214,
                              "src": "4103:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4097:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Item_$7_storage",
                              "typeString": "struct Auction.Item storage ref"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "4070:36:0"
                        },
                        {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 229,
                                  "name": "currentItem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 224,
                                  "src": "4124:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                    "typeString": "struct Auction.Item storage pointer"
                                  }
                                },
                                "id": 230,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "itemTokens",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6,
                                "src": "4124:22:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 231,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4124:29:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 232,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4157:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "4124:34:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 265,
                          "nodeType": "IfStatement",
                          "src": "4121:719:0",
                          "trueBody": {
                            "id": 264,
                            "nodeType": "Block",
                            "src": "4159:681:0",
                            "statements": [
                              {
                                "assignments": [
                                  235
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 235,
                                    "name": "randomIndex",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 264,
                                    "src": "4225:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 234,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4225:4:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 247,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 246,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "components": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 241,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 236,
                                            "name": "block",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 617,
                                            "src": "4245:5:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_block",
                                              "typeString": "block"
                                            }
                                          },
                                          "id": 237,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "number",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "4245:12:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 238,
                                              "name": "currentItem",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 224,
                                              "src": "4273:11:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                                "typeString": "struct Auction.Item storage pointer"
                                              }
                                            },
                                            "id": 239,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "itemTokens",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6,
                                            "src": "4273:22:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                              "typeString": "uint256[] storage ref"
                                            }
                                          },
                                          "id": 240,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "length",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "4273:29:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "4245:57:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "id": 242,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "4244:59:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "%",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 243,
                                        "name": "currentItem",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 224,
                                        "src": "4306:11:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                          "typeString": "struct Auction.Item storage pointer"
                                        }
                                      },
                                      "id": 244,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "itemTokens",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 6,
                                      "src": "4306:22:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 245,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "length",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4306:29:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "4244:91:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "4225:110:0"
                              },
                              {
                                "assignments": [
                                  249
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 249,
                                    "name": "winnerId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 264,
                                    "src": "4393:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 248,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4393:4:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 254,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 250,
                                      "name": "currentItem",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 224,
                                      "src": "4409:11:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                        "typeString": "struct Auction.Item storage pointer"
                                      }
                                    },
                                    "id": 251,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "itemTokens",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 6,
                                    "src": "4409:22:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 253,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 252,
                                    "name": "randomIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 235,
                                    "src": "4432:11:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4409:35:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "4393:51:0"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 262,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 255,
                                      "name": "winners",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 30,
                                      "src": "4755:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$3_storage",
                                        "typeString": "address[3] storage ref"
                                      }
                                    },
                                    "id": 257,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 256,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 214,
                                      "src": "4763:2:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "4755:11:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 258,
                                        "name": "bidders",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 22,
                                        "src": "4769:7:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                                          "typeString": "struct Auction.Person storage ref[4] storage ref"
                                        }
                                      },
                                      "id": 260,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 259,
                                        "name": "winnerId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 249,
                                        "src": "4777:8:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "4769:17:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Person_$14_storage",
                                        "typeString": "struct Auction.Person storage ref"
                                      }
                                    },
                                    "id": 261,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "addr",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 13,
                                    "src": "4769:22:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "4755:36:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 263,
                                "nodeType": "ExpressionStatement",
                                "src": "4755:36:0"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 217,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 214,
                        "src": "4041:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4046:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "4041:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 267,
                    "initializationExpression": {
                      "assignments": [
                        214
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 214,
                          "name": "id",
                          "nodeType": "VariableDeclaration",
                          "scope": 267,
                          "src": "4028:7:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 213,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "4028:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 216,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4038:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4028:11:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "4049:4:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 214,
                          "src": "4049:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 222,
                      "nodeType": "ExpressionStatement",
                      "src": "4049:4:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "4023:828:0"
                  }
                ]
              },
              "documentation": null,
              "id": 269,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "revealWinners",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 211,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3857:2:0"
              },
              "returnParameters": {
                "id": 212,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3867:0:0"
              },
              "scope": 270,
              "src": "3835:1023:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 271,
          "src": "25:5143:0"
        }
      ],
      "src": "0:5168:0"
    },
    "legacyAST": {
      "absolutePath": "/C/Users/sonic/Desktop/Assignment/penny-auction-dapp/contracts/Auction_1.sol",
      "exportedSymbols": {
        "Auction": [
          270
        ]
      },
      "id": 271,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".8"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:0"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 270,
          "linearizedBaseContracts": [
            270
          ],
          "name": "Auction",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "Auction.Item",
              "id": 7,
              "members": [
                {
                  "constant": false,
                  "id": 3,
                  "name": "itemId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "130:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "130:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6,
                  "name": "itemTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "170:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "170:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "170:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Item",
              "nodeType": "StructDefinition",
              "scope": 270,
              "src": "107:122:0",
              "visibility": "public"
            },
            {
              "canonicalName": "Auction.Person",
              "id": 14,
              "members": [
                {
                  "constant": false,
                  "id": 9,
                  "name": "remainingTokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 14,
                  "src": "310:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11,
                  "name": "personId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14,
                  "src": "373:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13,
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "scope": 14,
                  "src": "429:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Person",
              "nodeType": "StructDefinition",
              "scope": 270,
              "src": "285:187:0",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 18,
              "name": "tokenDetails",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "478:39:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                "typeString": "mapping(address => struct Auction.Person)"
              },
              "typeName": {
                "id": 17,
                "keyType": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "486:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "478:26:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                  "typeString": "mapping(address => struct Auction.Person)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 16,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 14,
                  "src": "497:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$14_storage_ptr",
                    "typeString": "struct Auction.Person"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 22,
              "name": "bidders",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "544:17:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                "typeString": "struct Auction.Person[4]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 19,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 14,
                  "src": "544:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$14_storage_ptr",
                    "typeString": "struct Auction.Person"
                  }
                },
                "id": 21,
                "length": {
                  "argumentTypes": null,
                  "hexValue": "34",
                  "id": 20,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "551:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_4_by_1",
                    "typeString": "int_const 4"
                  },
                  "value": "4"
                },
                "nodeType": "ArrayTypeName",
                "src": "544:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage_ptr",
                  "typeString": "struct Auction.Person[4]"
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 26,
              "name": "items",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "603:20:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                "typeString": "struct Auction.Item[3]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 23,
                  "name": "Item",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 7,
                  "src": "603:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                    "typeString": "struct Auction.Item"
                  }
                },
                "id": 25,
                "length": {
                  "argumentTypes": null,
                  "hexValue": "33",
                  "id": 24,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "608:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_3_by_1",
                    "typeString": "int_const 3"
                  },
                  "value": "3"
                },
                "nodeType": "ArrayTypeName",
                "src": "603:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage_ptr",
                  "typeString": "struct Auction.Item[3]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 30,
              "name": "winners",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "663:25:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$3_storage",
                "typeString": "address[3]"
              },
              "typeName": {
                "baseType": {
                  "id": 27,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "663:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 29,
                "length": {
                  "argumentTypes": null,
                  "hexValue": "33",
                  "id": 28,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "671:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_3_by_1",
                    "typeString": "int_const 3"
                  },
                  "value": "3"
                },
                "nodeType": "ArrayTypeName",
                "src": "663:10:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$3_storage_ptr",
                  "typeString": "address[3]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 32,
              "name": "beneficiary",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "725:26:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 31,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "725:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 35,
              "name": "bidderCount",
              "nodeType": "VariableDeclaration",
              "scope": 270,
              "src": "789:18:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 33,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "789:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 34,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "806:1:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "internal"
            },
            {
              "body": {
                "id": 75,
                "nodeType": "Block",
                "src": "869:693:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 41,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "1120:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 39,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 627,
                          "src": "1134:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1134:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1120:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 42,
                    "nodeType": "ExpressionStatement",
                    "src": "1120:24:0"
                  },
                  {
                    "assignments": [
                      46
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 46,
                        "name": "emptyArray",
                        "nodeType": "VariableDeclaration",
                        "scope": 75,
                        "src": "1188:24:0",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[]"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 44,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "1188:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 45,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "1188:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                            "typeString": "uint256[]"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 47,
                    "initialValue": null,
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1188:24:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 55,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 48,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1223:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                            "typeString": "struct Auction.Item storage ref[3] storage ref"
                          }
                        },
                        "id": 50,
                        "indexExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1229:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1223:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage",
                          "typeString": "struct Auction.Item storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 52,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1247:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "id": 53,
                            "name": "emptyArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46,
                            "src": "1260:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "id": 51,
                          "name": "Item",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "1234:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Item_$7_storage_ptr_$",
                            "typeString": "type(struct Auction.Item storage pointer)"
                          }
                        },
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "itemId",
                          "itemTokens"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "1234:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_memory",
                          "typeString": "struct Auction.Item memory"
                        }
                      },
                      "src": "1223:49:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "id": 56,
                    "nodeType": "ExpressionStatement",
                    "src": "1223:49:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 64,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 57,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1412:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                            "typeString": "struct Auction.Item storage ref[3] storage ref"
                          }
                        },
                        "id": 59,
                        "indexExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 58,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1418:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1412:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage",
                          "typeString": "struct Auction.Item storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 61,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1436:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          {
                            "argumentTypes": null,
                            "id": 62,
                            "name": "emptyArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46,
                            "src": "1450:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "id": 60,
                          "name": "Item",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "1423:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Item_$7_storage_ptr_$",
                            "typeString": "type(struct Auction.Item storage pointer)"
                          }
                        },
                        "id": 63,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "itemId",
                          "itemTokens"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "1423:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_memory",
                          "typeString": "struct Auction.Item memory"
                        }
                      },
                      "src": "1412:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "id": 65,
                    "nodeType": "ExpressionStatement",
                    "src": "1412:50:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 73,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 66,
                          "name": "items",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1473:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                            "typeString": "struct Auction.Item storage ref[3] storage ref"
                          }
                        },
                        "id": 68,
                        "indexExpression": {
                          "argumentTypes": null,
                          "hexValue": "32",
                          "id": 67,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1479:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1473:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage",
                          "typeString": "struct Auction.Item storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 70,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1497:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "emptyArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46,
                            "src": "1511:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "id": 69,
                          "name": "Item",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "1484:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Item_$7_storage_ptr_$",
                            "typeString": "type(struct Auction.Item storage pointer)"
                          }
                        },
                        "id": 72,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [
                          "itemId",
                          "itemTokens"
                        ],
                        "nodeType": "FunctionCall",
                        "src": "1484:39:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_memory",
                          "typeString": "struct Auction.Item memory"
                        }
                      },
                      "src": "1473:50:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "id": 74,
                    "nodeType": "ExpressionStatement",
                    "src": "1473:50:0"
                  }
                ]
              },
              "documentation": null,
              "id": 76,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 36,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "851:2:0"
              },
              "returnParameters": {
                "id": 37,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "869:0:0"
              },
              "scope": 270,
              "src": "840:722:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 113,
                "nodeType": "Block",
                "src": "1602:531:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "1613:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 81,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 80,
                            "name": "bidderCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35,
                            "src": "1621:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1613:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 82,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "personId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11,
                        "src": "1613:29:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 83,
                        "name": "bidderCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "1645:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1613:43:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 85,
                    "nodeType": "ExpressionStatement",
                    "src": "1613:43:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 92,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "1905:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 88,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 87,
                            "name": "bidderCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35,
                            "src": "1913:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1905:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 89,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "addr",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13,
                        "src": "1905:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 90,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 627,
                          "src": "1933:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1933:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1905:38:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 93,
                    "nodeType": "ExpressionStatement",
                    "src": "1905:38:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "1986:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 96,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 95,
                            "name": "bidderCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35,
                            "src": "1994:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1986:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "1986:36:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "35",
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2025:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_5_by_1",
                          "typeString": "int_const 5"
                        },
                        "value": "5"
                      },
                      "src": "1986:40:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 100,
                    "nodeType": "ExpressionStatement",
                    "src": "1986:40:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 101,
                          "name": "tokenDetails",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "2054:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                            "typeString": "mapping(address => struct Auction.Person storage ref)"
                          }
                        },
                        "id": 104,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 102,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 627,
                            "src": "2067:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2067:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2054:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Person_$14_storage",
                          "typeString": "struct Auction.Person storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "bidders",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 22,
                          "src": "2081:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                            "typeString": "struct Auction.Person storage ref[4] storage ref"
                          }
                        },
                        "id": 107,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 106,
                          "name": "bidderCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35,
                          "src": "2089:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2081:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Person_$14_storage",
                          "typeString": "struct Auction.Person storage ref"
                        }
                      },
                      "src": "2054:47:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Person_$14_storage",
                        "typeString": "struct Auction.Person storage ref"
                      }
                    },
                    "id": 109,
                    "nodeType": "ExpressionStatement",
                    "src": "2054:47:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2112:13:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 110,
                        "name": "bidderCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35,
                        "src": "2112:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 112,
                    "nodeType": "ExpressionStatement",
                    "src": "2112:13:0"
                  }
                ]
              },
              "documentation": null,
              "id": 114,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "register",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 77,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1585:2:0"
              },
              "returnParameters": {
                "id": 78,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1602:0:0"
              },
              "scope": 270,
              "src": "1568:565:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 209,
                "nodeType": "Block",
                "src": "2194:1635:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 122,
                                "name": "tokenDetails",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "2905:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                  "typeString": "mapping(address => struct Auction.Person storage ref)"
                                }
                              },
                              "id": 125,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 123,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 627,
                                  "src": "2918:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 124,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2918:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2905:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Person_$14_storage",
                                "typeString": "struct Auction.Person storage ref"
                              }
                            },
                            "id": 126,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "remainingTokens",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9,
                            "src": "2905:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 127,
                            "name": "_count",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 118,
                            "src": "2949:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2905:50:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4e6f7420656e6f75676820746f6b656e73",
                          "id": 129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2957:19:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e6a4c292a2678b9c898d987106e4b784681d3ef40e71d741a89ab96444ddb55d",
                            "typeString": "literal_string \"Not enough tokens\""
                          },
                          "value": "Not enough tokens"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e6a4c292a2678b9c898d987106e4b784681d3ef40e71d741a89ab96444ddb55d",
                            "typeString": "literal_string \"Not enough tokens\""
                          }
                        ],
                        "id": 121,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          630,
                          631
                        ],
                        "referencedDeclaration": 631,
                        "src": "2897:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2897:80:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 131,
                    "nodeType": "ExpressionStatement",
                    "src": "2897:80:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 133,
                                "name": "tokenDetails",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "2992:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                  "typeString": "mapping(address => struct Auction.Person storage ref)"
                                }
                              },
                              "id": 136,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 134,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 627,
                                  "src": "3005:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 135,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3005:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2992:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Person_$14_storage",
                                "typeString": "struct Auction.Person storage ref"
                              }
                            },
                            "id": 137,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "remainingTokens",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9,
                            "src": "2992:40:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3035:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2992:44:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "596f7520617265206f7574206f6620746f6b656e73",
                          "id": 140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3038:23:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_a55a73596485e9d4ebbba328cf59ca135046e7827a8d12f8a54e206516b6e3bf",
                            "typeString": "literal_string \"You are out of tokens\""
                          },
                          "value": "You are out of tokens"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_a55a73596485e9d4ebbba328cf59ca135046e7827a8d12f8a54e206516b6e3bf",
                            "typeString": "literal_string \"You are out of tokens\""
                          }
                        ],
                        "id": 132,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          630,
                          631
                        ],
                        "referencedDeclaration": 631,
                        "src": "2984:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2984:78:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 142,
                    "nodeType": "ExpressionStatement",
                    "src": "2984:78:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 144,
                            "name": "_itemId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 116,
                            "src": "3077:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3088:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "3077:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4974656d20646f6573206e6f74206578697374",
                          "id": 147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3091:21:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ce0a686b3a77d89aa203ef1917c5a461c03ae6389a02bb3c3b9a97959d623907",
                            "typeString": "literal_string \"Item does not exist\""
                          },
                          "value": "Item does not exist"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ce0a686b3a77d89aa203ef1917c5a461c03ae6389a02bb3c3b9a97959d623907",
                            "typeString": "literal_string \"Item does not exist\""
                          }
                        ],
                        "id": 143,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          630,
                          631
                        ],
                        "referencedDeclaration": 631,
                        "src": "3069:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3069:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 149,
                    "nodeType": "ExpressionStatement",
                    "src": "3069:44:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 150,
                            "name": "tokenDetails",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "3373:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                              "typeString": "mapping(address => struct Auction.Person storage ref)"
                            }
                          },
                          "id": 153,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 151,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 627,
                              "src": "3386:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3386:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3373:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 154,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "3373:40:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 161,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 155,
                              "name": "tokenDetails",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 18,
                              "src": "3416:12:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                "typeString": "mapping(address => struct Auction.Person storage ref)"
                              }
                            },
                            "id": 158,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 156,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 627,
                                "src": "3429:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3429:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3416:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Person_$14_storage",
                              "typeString": "struct Auction.Person storage ref"
                            }
                          },
                          "id": 159,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "remainingTokens",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9,
                          "src": "3416:40:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 160,
                          "name": "_count",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "3459:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3416:49:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3373:92:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 163,
                    "nodeType": "ExpressionStatement",
                    "src": "3373:92:0"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 164,
                            "name": "bidders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "3500:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                              "typeString": "struct Auction.Person storage ref[4] storage ref"
                            }
                          },
                          "id": 170,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 165,
                                "name": "tokenDetails",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18,
                                "src": "3508:12:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                  "typeString": "mapping(address => struct Auction.Person storage ref)"
                                }
                              },
                              "id": 168,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 166,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 627,
                                  "src": "3521:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 167,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3521:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3508:24:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Person_$14_storage",
                                "typeString": "struct Auction.Person storage ref"
                              }
                            },
                            "id": 169,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "personId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11,
                            "src": "3508:33:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3500:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 171,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "3500:58:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 172,
                            "name": "tokenDetails",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "3561:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                              "typeString": "mapping(address => struct Auction.Person storage ref)"
                            }
                          },
                          "id": 175,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 627,
                              "src": "3574:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3574:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3561:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Person_$14_storage",
                            "typeString": "struct Auction.Person storage ref"
                          }
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "remainingTokens",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "3561:40:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3500:101:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 178,
                    "nodeType": "ExpressionStatement",
                    "src": "3500:101:0"
                  },
                  {
                    "assignments": [
                      180
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 180,
                        "name": "bidItem",
                        "nodeType": "VariableDeclaration",
                        "scope": 209,
                        "src": "3659:20:0",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                          "typeString": "struct Auction.Item"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 179,
                          "name": "Item",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 7,
                          "src": "3659:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                            "typeString": "struct Auction.Item"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 184,
                    "initialValue": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 181,
                        "name": "items",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "3682:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                          "typeString": "struct Auction.Item storage ref[3] storage ref"
                        }
                      },
                      "id": 183,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 182,
                        "name": "_itemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116,
                        "src": "3688:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3682:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Item_$7_storage",
                        "typeString": "struct Auction.Item storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3659:37:0"
                  },
                  {
                    "body": {
                      "id": 207,
                      "nodeType": "Block",
                      "src": "3737:85:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 200,
                                    "name": "tokenDetails",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 18,
                                    "src": "3776:12:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Person_$14_storage_$",
                                      "typeString": "mapping(address => struct Auction.Person storage ref)"
                                    }
                                  },
                                  "id": 203,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 201,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 627,
                                      "src": "3789:3:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 202,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3789:10:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3776:24:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Person_$14_storage",
                                    "typeString": "struct Auction.Person storage ref"
                                  }
                                },
                                "id": 204,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "personId",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 11,
                                "src": "3776:33:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 195,
                                  "name": "bidItem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 180,
                                  "src": "3752:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                    "typeString": "struct Auction.Item storage pointer"
                                  }
                                },
                                "id": 198,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "itemTokens",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6,
                                "src": "3752:18:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3752:23:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256) returns (uint256)"
                              }
                            },
                            "id": 205,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3752:58:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 206,
                          "nodeType": "ExpressionStatement",
                          "src": "3752:58:0"
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 191,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 189,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "3723:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "_count",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "3725:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3723:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 208,
                    "initializationExpression": {
                      "assignments": [
                        186
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 186,
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "scope": 208,
                          "src": "3711:6:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 185,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "3711:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 188,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3720:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "3711:10:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "3733:3:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 192,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "3733:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 194,
                      "nodeType": "ExpressionStatement",
                      "src": "3733:3:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "3707:115:0"
                  }
                ]
              },
              "documentation": null,
              "id": 210,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "bid",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 119,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 116,
                    "name": "_itemId",
                    "nodeType": "VariableDeclaration",
                    "scope": 210,
                    "src": "2152:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 115,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2152:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 118,
                    "name": "_count",
                    "nodeType": "VariableDeclaration",
                    "scope": 210,
                    "src": "2166:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 117,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2166:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2151:27:0"
              },
              "returnParameters": {
                "id": 120,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2194:0:0"
              },
              "scope": 270,
              "src": "2139:1690:0",
              "stateMutability": "payable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 268,
                "nodeType": "Block",
                "src": "3867:991:0",
                "statements": [
                  {
                    "body": {
                      "id": 266,
                      "nodeType": "Block",
                      "src": "4055:796:0",
                      "statements": [
                        {
                          "assignments": [
                            224
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 224,
                              "name": "currentItem",
                              "nodeType": "VariableDeclaration",
                              "scope": 266,
                              "src": "4070:24:0",
                              "stateVariable": false,
                              "storageLocation": "storage",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                "typeString": "struct Auction.Item"
                              },
                              "typeName": {
                                "contractScope": null,
                                "id": 223,
                                "name": "Item",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 7,
                                "src": "4070:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                  "typeString": "struct Auction.Item"
                                }
                              },
                              "value": null,
                              "visibility": "internal"
                            }
                          ],
                          "id": 228,
                          "initialValue": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 225,
                              "name": "items",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 26,
                              "src": "4097:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Item_$7_storage_$3_storage",
                                "typeString": "struct Auction.Item storage ref[3] storage ref"
                              }
                            },
                            "id": 227,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 226,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 214,
                              "src": "4103:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4097:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Item_$7_storage",
                              "typeString": "struct Auction.Item storage ref"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "4070:36:0"
                        },
                        {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 229,
                                  "name": "currentItem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 224,
                                  "src": "4124:11:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                    "typeString": "struct Auction.Item storage pointer"
                                  }
                                },
                                "id": 230,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "itemTokens",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6,
                                "src": "4124:22:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 231,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4124:29:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 232,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4157:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "4124:34:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": null,
                          "id": 265,
                          "nodeType": "IfStatement",
                          "src": "4121:719:0",
                          "trueBody": {
                            "id": 264,
                            "nodeType": "Block",
                            "src": "4159:681:0",
                            "statements": [
                              {
                                "assignments": [
                                  235
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 235,
                                    "name": "randomIndex",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 264,
                                    "src": "4225:16:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 234,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4225:4:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 247,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 246,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "components": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 241,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "id": 236,
                                            "name": "block",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 617,
                                            "src": "4245:5:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_block",
                                              "typeString": "block"
                                            }
                                          },
                                          "id": 237,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "number",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "4245:12:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "/",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "expression": {
                                            "argumentTypes": null,
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 238,
                                              "name": "currentItem",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 224,
                                              "src": "4273:11:0",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                                "typeString": "struct Auction.Item storage pointer"
                                              }
                                            },
                                            "id": 239,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "itemTokens",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6,
                                            "src": "4273:22:0",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                              "typeString": "uint256[] storage ref"
                                            }
                                          },
                                          "id": 240,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberName": "length",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": null,
                                          "src": "4273:29:0",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "4245:57:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "id": 242,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "4244:59:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "%",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 243,
                                        "name": "currentItem",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 224,
                                        "src": "4306:11:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                          "typeString": "struct Auction.Item storage pointer"
                                        }
                                      },
                                      "id": 244,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "itemTokens",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 6,
                                      "src": "4306:22:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                        "typeString": "uint256[] storage ref"
                                      }
                                    },
                                    "id": 245,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "length",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4306:29:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "4244:91:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "4225:110:0"
                              },
                              {
                                "assignments": [
                                  249
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 249,
                                    "name": "winnerId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 264,
                                    "src": "4393:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 248,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4393:4:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 254,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 250,
                                      "name": "currentItem",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 224,
                                      "src": "4409:11:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Item_$7_storage_ptr",
                                        "typeString": "struct Auction.Item storage pointer"
                                      }
                                    },
                                    "id": 251,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "itemTokens",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 6,
                                    "src": "4409:22:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                      "typeString": "uint256[] storage ref"
                                    }
                                  },
                                  "id": 253,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 252,
                                    "name": "randomIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 235,
                                    "src": "4432:11:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4409:35:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "4393:51:0"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 262,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 255,
                                      "name": "winners",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 30,
                                      "src": "4755:7:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$3_storage",
                                        "typeString": "address[3] storage ref"
                                      }
                                    },
                                    "id": 257,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 256,
                                      "name": "id",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 214,
                                      "src": "4763:2:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "4755:11:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "id": 258,
                                        "name": "bidders",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 22,
                                        "src": "4769:7:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_struct$_Person_$14_storage_$4_storage",
                                          "typeString": "struct Auction.Person storage ref[4] storage ref"
                                        }
                                      },
                                      "id": 260,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 259,
                                        "name": "winnerId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 249,
                                        "src": "4777:8:0",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "4769:17:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Person_$14_storage",
                                        "typeString": "struct Auction.Person storage ref"
                                      }
                                    },
                                    "id": 261,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "addr",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 13,
                                    "src": "4769:22:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "4755:36:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 263,
                                "nodeType": "ExpressionStatement",
                                "src": "4755:36:0"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 217,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 214,
                        "src": "4041:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "33",
                        "id": 218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4046:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "4041:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 267,
                    "initializationExpression": {
                      "assignments": [
                        214
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 214,
                          "name": "id",
                          "nodeType": "VariableDeclaration",
                          "scope": 267,
                          "src": "4028:7:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 213,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "4028:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 216,
                      "initialValue": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4038:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4028:11:0"
                    },
                    "loopExpression": {
                      "expression": {
                        "argumentTypes": null,
                        "id": 221,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "4049:4:0",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 220,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 214,
                          "src": "4049:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 222,
                      "nodeType": "ExpressionStatement",
                      "src": "4049:4:0"
                    },
                    "nodeType": "ForStatement",
                    "src": "4023:828:0"
                  }
                ]
              },
              "documentation": null,
              "id": 269,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "revealWinners",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 211,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3857:2:0"
              },
              "returnParameters": {
                "id": 212,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3867:0:0"
              },
              "scope": 270,
              "src": "3835:1023:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 271,
          "src": "25:5143:0"
        }
      ],
      "src": "0:5168:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.8+commit.23d335f2.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xA9B52188e4Ff68BdCAAE3B56409ABF87b2CD99DA",
        "transactionHash": "0x3d4edda2046822f763c9cb1017acafef1707d7ba1019d1e6dc6c3ecf779d8e6d"
      }
    },
    "schemaVersion": "3.0.16",
    "updatedAt": "2019-10-30T00:43:07.215Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }