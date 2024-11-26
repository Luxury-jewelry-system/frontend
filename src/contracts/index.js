// ABI
export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "certificate",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "CertificateIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "CertificateTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			}
		],
		"name": "cutAndPolishDiamond",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "cutter",
				"type": "address"
			}
		],
		"name": "DiamondCutPolished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "miner",
				"type": "address"
			}
		],
		"name": "DiamondMined",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "uniqueLaserID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "expected_signer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recover_signer",
				"type": "address"
			}
		],
		"name": "Diamondverified",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "maker",
				"type": "address"
			}
		],
		"name": "EmbeddedInJewelry",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			}
		],
		"name": "embedInJewelry",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "certificate",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "issueCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			}
		],
		"name": "mineDiamond",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "maker",
				"type": "address"
			}
		],
		"name": "OwnedByJewelryMaker",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "Purchased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			}
		],
		"name": "purchaseDiamond",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			}
		],
		"name": "qualityCheckAndLaserEngrave",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "laserID",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "lab",
				"type": "address"
			}
		],
		"name": "QualityChecked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "jewelryMakerId",
				"type": "address"
			}
		],
		"name": "transferToJewelryMaker",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uniqueLaserID",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			},
			{
				"internalType": "address",
				"name": "expected_signer",
				"type": "address"
			}
		],
		"name": "verifyDiamond",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificates",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "diamondIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "diamonds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "uniqueLaserID",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "digitalCertificate",
				"type": "bytes32"
			},
			{
				"internalType": "enum DiamondLifecycle.LifecycleState",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "currentOwner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "diamondTraceMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "mining_company",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "mining_time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "cutting_company",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "cutting_time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "quality_control_lab",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "grading_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "engraving_time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "jewelry_maker",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "designingAndInlaying_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "issueCertificate_time",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "owner_time",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDiamonds",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "grade",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "uniqueLaserID",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "digitalCertificate",
						"type": "bytes32"
					},
					{
						"internalType": "enum DiamondLifecycle.LifecycleState",
						"name": "state",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "currentOwner",
						"type": "address"
					}
				],
				"internalType": "struct DiamondLifecycle.Diamond[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			}
		],
		"name": "getDiamondById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "grade",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "uniqueLaserID",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "digitalCertificate",
						"type": "bytes32"
					},
					{
						"internalType": "enum DiamondLifecycle.LifecycleState",
						"name": "state",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "currentOwner",
						"type": "address"
					}
				],
				"internalType": "struct DiamondLifecycle.Diamond",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "diamondId",
				"type": "uint256"
			}
		],
		"name": "getDiamondTraceById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "mining_company",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "mining_time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "cutting_company",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "cutting_time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "quality_control_lab",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "grading_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "engraving_time",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "jewelry_maker",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "designingAndInlaying_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "issueCertificate_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "owner_time",
						"type": "uint256"
					}
				],
				"internalType": "struct DiamondLifecycle.DiamondTrace",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "role",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "userExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
  
  // 合约地址
  export const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // 替换为部署的合约地址
  