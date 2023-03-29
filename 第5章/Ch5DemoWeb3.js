let Web3=require('web3');
web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

var abi=
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var contract_address="0x881263B8011245629C930bD9C23c5a54bBbD4af5";
var account_address="0x2A650403b2b110e40B07FE2c905e683F0B54Cc04";

var contract=new web3.eth.Contract(abi,contract_address);

function callback(){
    console.log("callback run");
}

function callback2(){
    console.log("callback2 run");
}

var batch=new web3.BatchRequest();
batch.add(web3.eth.getBalance.request(account_address,'latest',callback));

batch.add(contract.methods.getNumber().call.request({from:account_address},callback2));

batch.add(contract.methods.getNumber().call.request({from:account_address},function(error,result){
    console.log(error);
    console.log(result);
}));

batch.execute();
