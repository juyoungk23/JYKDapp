// MORALIS CODE
(async function () {
  const serverUrl = "https://liu6i1db1uwv.usemoralis.com:2053/server";
  const appId = "4zDZZnqMsdlvmXAxB7OuZ34du1rTkiLRAzZBur9a";

  await Moralis.start({ serverUrl, appId });
  await Moralis.enableWeb3();
})();

// Configurate the login files
const loginPage = `index.html`;
const dashboard = `dashboard.html`;

async function testDefi() {
  const web3 = await Moralis.enableWeb3();

  // Uniswap v2 Factory Contract: 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f
  const UNISWAP_FACTORY_ABI = [
    [
      {
        inputs: [
          { internalType: "address", name: "_feeToSetter", type: "address" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "PairCreated",
        type: "event",
      },
      {
        constant: true,
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "allPairs",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "allPairsLength",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "tokenA", type: "address" },
          { internalType: "address", name: "tokenB", type: "address" },
        ],
        name: "createPair",
        outputs: [{ internalType: "address", name: "pair", type: "address" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "feeTo",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "feeToSetter",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "getPair",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "address", name: "_feeTo", type: "address" }],
        name: "setFeeTo",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "_feeToSetter", type: "address" },
        ],
        name: "setFeeToSetter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  ];
  const UNISWAP_FACTORY_ADDRESS = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
  const UNISWAP_EXCHANGE_ABI = [
    {
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      evm: {
        bytecode: {
          linkReferences: {},
          object: "",
          opcodes: "",
          sourceMap: "",
        },
        deployedBytecode: {
          linkReferences: {},
          object: "",
          opcodes: "",
          sourceMap: "",
        },
      },
      interface: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      bytecode: "",
    },
  ];

  const uniswapFactoryContract = new web3.eth.Contract(
    UNISWAP_FACTORY_ABI,
    UNISWAP_FACTORY_ADDRESS
  );
  console.log(uniswapFactoryContract);
  let inputTokenSymbol = "ETH";
  let inputTokenAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
  let outputTokenSymbol = "CRV";
  let outputTokenAddress = "0xD533a949740bb3306d119CC777fa900bA034cd52";
  let inputAmount = web3.utils.toWei("1", "ETHER");

  // Uniswap v2 exchange address
  const exchangeAddress = "0x7a250d5630b4cf539739df2c5dacb4c659f2488d";
  const exchangeContract = new web3.eth.Contract(
    UNISWAP_EXCHANGE_ABI,
    exchangeAddress
  );

  const options = {
    contractAddress: exchangeAddress,
    functionName: "approve",
    params: {
      spender: "0xf20772bE29431b15a13F29D5f0586d80eb825782",
      value: Moralis.Units.Token("0.5", "18"),
    },
    abi: UNISWAP_EXCHANGE_ABI,
  };

  const receipt = await Moralis.executeFunction(options);
  console.log(receipt);

  // const uniswapResult = await exchangeContract.methods
  //   .getEthToTokenInputPrice(inputAmount)
  //   .call();

  // console.table([
  //   {
  //     "Input Token": inputTokenSymbol,
  //     "Output Token": outputTokenSymbol,
  //     "Input Amount": web3.utils.fromWei(inputAmount, "Ether"),
  //     "Uniswap Return": web3.utils.fromWei(uniswapResult, "Ether"),

  //     Timestamp: moment().tz("America/Chicago").format(),
  //   },
  // ]);
}
// Redirecting User to login or dashboard pages
(function () {
  let user = Moralis.User.current();
  console.log(user);

  // User not logged in so redirect to sign in page
  if (user == null && window.location.pathname.endsWith(dashboard)) {
    document.querySelector("body").style.display = "none";
    window.location.href = loginPage;
  }

  // User logged in so redirect to dashboard
  if (user != null && window.location.pathname.endsWith(loginPage)) {
    window.location.href = dashboard;
    console.log("HERE");
    //_ethAddress = Moralis.User.current().get("ethAddress");
  }
})();

// Global Variables
let _ethAddress;
let network = "";

(async function () {
  if (
    Moralis.User.current() != null &&
    window.location.pathname.endsWith(dashboard)
  ) {
    displayNetwork();
    displayAddress();
    // await listAvailableTokens();
  }
  Moralis.onChainChanged(function () {
    displayNetwork();
    //window.location.reload();
  });
})();

// Helper functions

//Get token price on PancakeSwap v2 BSC
async function getTokenPrice() {
  // CRV Polygon chain 0x172370d5cd63279efa6d502dab29171933a610af
  // CRV ETH chain 0xD533a949740bb3306d119CC777fa900bA034cd52

  // UNISWAP V3
  const options = {
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    chain: "eth",
    exchange: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  };
  const price = await Moralis.Web3API.token.getTokenPrice(options);

  // Eth SushiSwap
  // const options3 = {
  //   address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
  //   chain: "eth",
  //   exchange: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
  // };
  // const price3 = await Moralis.Web3API.token.getTokenPrice(options3);

  console.log(price3);
  var message =
    price.nativePrice.symbol +
    ": $" +
    price.usdPrice +
    " on " +
    price.exchangeName;
  document.getElementById("get-token-price-container").innerHTML = message;
  //console.log(price2);
}

async function displayNetwork() {
  let web3 = new Web3(window.ethereum);
  chainId = await web3.eth.net.getId();
  let _id = returnChainId(chainId);
  document.getElementById("currentNetwork").textContent = `Network: ${_id}`;
  network = document
    .getElementById("currentNetwork")
    .textContent.substring(9, 100);
}
function displayAddress() {
  let rawAddress = Moralis.User.current().get("ethAddress");
  let firstFive = rawAddress.substring(0, 6);
  let lastFive = rawAddress.slice(rawAddress.length - 4);
  let _address = `User: ${firstFive}...${lastFive}`;
  document.getElementById("userAddress").textContent = _address;
}
function getMyAddress() {
  address = Moralis.User.current().get("ethAddress");
  document.getElementById("getTransactions-address").value = address;
}
function returnChainId(chainId) {
  switch (chainId) {
    case 1:
      return "Eth";
    case 3:
      return "Ropsten";
    case 4:
      return "Rinkeby";
    case 5:
      return "Goerli";
    case 42:
      return "Kovan";
    case 56:
      return "BSC";
    case 97:
      return "BSC Testnet";
    case 137:
      return "Matic";
    case 1337:
      return "Local Dev Chain";
    case 80001:
      return "Mumbai";
  }
}
async function transferNative() {
  const address = document.getElementById("native-address").value;
  // check for certain length

  const amount = document.getElementById("native-amount").value;
  //check that amount is of type number

  const options = {
    type: "native",
    amount: Moralis.Units.ETH(amount),
    receiver: address,
  };
  let result = await Moralis.transfer(options);
}
// Work on retrieving contract address when given token symbol
async function transferToken() {
  const amount = document.getElementById("token-amount").value;
  const address = document.getElementById("token-address").value;
  const chain = document.getElementById("chain").value;
  const tokenSymbol = document.getElementById("token-symbol").value;

  //Get metadata for one token
  const metadataOptions = { chain: chain, symbols: tokenSymbol };
  const tokenMetadata = await Moralis.Web3API.token.getTokenMetadataBySymbol(
    metadataOptions
  );
  const contractAddress = tokenMetadata;
  console.log(tokenMetadata);

  const options = {
    type: "erc20",
    amount: Moralis.Units.Token(amount, "18"),
    receiver: address,
    contractAddress: contractAddress,
  };

  // let result = await Moralis.transfer(options);
}
async function transferERC721() {
  const address = document.getElementById("ERC721-address");
  const contractAddress = document.getElementById("ERC721-contract-address");
  const tokenId = document.getElementById("ERC721-tokenId");

  // sending a token with token id = 1
  const options = {
    type: "erc721",
    receiver: address,
    contractAddress: contractAddress,
    tokenId: tokenId,
  };
  let result = await Moralis.transfer(options);
}
async function login() {
  await Moralis.Web3.authenticate().then(async function (user) {
    window.location.href = dashboard;
  });
}
logout = async () => {
  let user = Moralis.User.current();
  await Moralis.User.logOut();
  console.log(user);
  window.location.href = "index.html";
};

async function getBlock() {
  const chain = document.getElementById("chain").value;
  const blockNumber = document.getElementById("get-block-number").value;
  console.log(chain, blockNumber);
  const options = { chain: chain, block_number_or_hash: blockNumber };

  // get block content on BSC
  const transactions = await Moralis.Web3API.native.getBlock(options);
  console.log(transactions);

  let table = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Hash</th>
          <th scope="col">Parent Hash</th>
          <th scope="col">Nonce</th>
          <th scope="col">Timestamp</th>
        </tr>
      </thead>
      <tbody id="block-info-table"></tbody>
    </table>
  `;
  document.querySelector("#block-info").innerHTML = table;

  let content = `
  <tr>
    <td data-label="Hash">${shortAddress(transactions.hash)}</td>
    <td data-label="Parent">${shortAddress(transactions.parent_hash)}</td>
    <td data-label="Nonce">${transactions.nonce}</td>
    <td data-label="Timestamp">${transactions.timestamp}</td>
  </tr>
  `;

  document.querySelector("#block-info-table").innerHTML += content;
}

function getScanTx(type, id) {
  switch (id) {
    case 1:
      return `https://etherscan.io/${type}/`;
    case 3:
      return `https://ropsten.etherscan.io/${type}/`;
    case 4:
      return `https://rinkeby.etherscan.io/${type}/`;
    case 5:
      return `https://goerli.etherscan.io/${type}/`;
    case 42:
      return `https://kovan.etherscan.io/${type}/`;
    case 56:
      return `https://bscscan.com/block/${type}`;
    case 97:
      return `https://testnet.bscscan.com/block/${type}`;
    case 137:
      return `https://polygonscan.com/${type}`;
    case 80001:
      return `https://mumbai.polygonscan.com/${type}`;
    default:
      alert(`sorry but that chain is not available`);
  }
}

async function getTransactions() {
  const chain = document.getElementById("get-transactions-chain").value;
  const address = document.getElementById("getTransactions-address").value;
  const options = { chain: chain, address: address };
  const transactions = await Moralis.Web3API.account.getTransactions(options);

  let web3 = new Web3(window.ethereum);
  let chainId = await web3.eth.net.getId();
  const txUrl = getScanTx("tx", chainId);
  const blockUrl = getScanTx("block", chainId);

  // add transaction table
  if (transactions.total > 0) {
    let table = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Transactions</th>
          <th scope="col">Block Number</th>
          <th scope="col">Age</th>
          <th scope="col">Direction</th>
          <th scope="col">Fee</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody id="theTransactions"></tbody>
    </table>
    `;
    document.querySelector("#tableOfTransactions").innerHTML = table;

    transactions.result.forEach((t) => {
      let content = `
        <tr>
          <td data-label="Transaction"><a href='${txUrl}/${
        t.hash
      }' target="_blank" rel="noopener noreferrer">${shortAddress(
        t.hash
      )}</a></td>
      <td data-label="Block"><a href='${blockUrl}/${
        t.block_number
      }' target="_blank" rel="noopener noreferrer">${t.block_number}</a></td>
      <td data-label="Age">${millisecondsToTime(
        Date.parse(new Date()) - Date.parse(t.block_timestamp)
      )}</td>
      <td data-label="Direction">${
        t.from_address == Moralis.User.current().get("ethAddress")
          ? "Outgoing"
          : "Incoming"
      }</td>
      <td data-label="Fee">${((t.gas * t.gas_price) / 1e18).toFixed(
        5
      )} ${chain.toUpperCase()}</td>
      <td data-label="Value">${(t.value / 1e18).toFixed(
        5
      )} ${chain.toUpperCase()}</td>
        </tr>
      `;
      theTransactions.innerHTML += content;
    });
  } else {
    document.querySelector(
      "#tableOfTransactions"
    ).innerHTML = `<div class="container h3 text-center my-3">You have no transactions from the ${chain.toUpperCase()} chain</div>`;
  }
}

function shortAddress(address) {
  let rawAddress = Moralis.User.current().get("ethAddress");
  let firstFive = rawAddress.substring(0, 6);
  let lastFive = rawAddress.slice(rawAddress.length - 4);
  return `${firstFive}...${lastFive}`;
}

millisecondsToTime = (ms) => {
  let minutes = Math.floor(ms / (1000 * 60));
  let hours = Math.floor(ms / (1000 * 60 * 60));
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));

  if (days < 1) {
    if (hours < 1) {
      if (minutes < 1) {
        return `less than a minute ago`;
      } else return `${minutes} minute(s) ago`;
    } else return `${hours} hour(s) ago`;
  } else return `${days} day(s) ago`;
};

async function getPairAddress() {
  const options = {
    token0_address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    token1_address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    exchange: "pancakeswapv2",
    chain: "bsc",
  };
  const pairAddress = await Moralis.Web3API.defi.getPairAddress(options);
  console.log(pairAddress);
  document.getElementById("get-pair-address-container").innerHTML = pairAddress;
}

// LOGIN LISTENERS
if (document.querySelector("#btn-login")) {
  document.querySelector("#btn-login").onclick = login;
}
if (document.querySelector("#btn-logout")) {
  document.querySelector("#btn-logout").onclick = logout;
}

// TRANSFER LISTENERS
if (document.querySelector("#transfer-native")) {
  document.querySelector("#transfer-native").onclick = transferNative;
}
if (document.querySelector("#transfer-token")) {
  document.querySelector("#transfer-token").onclick = transferToken;
}
if (document.querySelector("#get-block")) {
  document.querySelector("#get-block").onclick = getBlock;
}
if (document.querySelector("#btn-get-transactions")) {
  document.querySelector("#btn-get-transactions").onclick = getTransactions;
}
if (document.querySelector("#get-my-address")) {
  document.querySelector("#get-my-address").onclick = getMyAddress;
}

if (document.querySelector("#get-pair-address")) {
  document.querySelector("#get-pair-address").onclick = getPairAddress;
}

if (document.querySelector("#get-token-price")) {
  document.querySelector("#get-token-price").onclick = getTokenPrice;
}

if (document.querySelector("#test-defi")) {
  document.querySelector("#test-defi").onclick = testDefi;
}
