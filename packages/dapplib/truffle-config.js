require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn punch install deputy frame spirit'; 
let testAccounts = [
"0x5807a138697e2c8d3d72cf5c037c84ec6762bca92f8f3647f66985a77aeaef4d",
"0x6f8901148bc8d1546cc596e58c5f52a6300c52e10fdb9fd92d37691e6eb5a0f7",
"0x5b0ecc9a5240e04d8f8806c642dd2cb947243fbf10e23205e3f00974abe5922b",
"0x944ec9ddbb4f1ffa22d5abdb09f88388298bafd315ef869f3144f6da4adc87ee",
"0x3416da09ec9736bf56e143d61682380769363734b1d2bbb9c2d3d683949f053c",
"0xcf7ed6cc51370fdfb9cc7b71b86d0c684b0c837f44425d23802d1b9ce9e18e48",
"0x7a2ad508c570e68ba38350bc599db24f44e10b5fe25aa541878200d9ea9260b8",
"0x477f7407746239dbbd990a3a49e06f9024257ce7b6735ec205302cd3465ae4f2",
"0x1c3909f6cc806cde523e5d9c52b47223a7e7175e971b323acd73c0cd6348658e",
"0x6066cff887f20049c61f59271a31c5ff65e351a83783db9c5b161bce3378b569"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

