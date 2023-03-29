let Web3=require('web3');
web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
//console.log(web3);
console.log("hello");
//chapter3
web3.eth.getNodeInfo().then(console.log);
web3.eth.net.isListening().then(console.log);
web3.eth.net.getId().then(console.log);
//chapter4
console.log(web3.providers);
console.log(web3.currentProvider);
//chapter 6 BigNumber
var temp_var_ch6=123456789012345678901234567890;
console.log(temp_var_ch6);
var bigNumber=require("bignumber.js");
var balance=new bigNumber("123456789012345678901234567890");
console.log("With bignumber.js showing all digit:",balance.toString());


