require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note sad promote hockey private slot genius'; 
let testAccounts = [
"0x211bb5bfad740e1fdda0b2fa3f3c79e20bb83bcce0bc98bb20d43ec10cd9b8b9",
"0x8dfe79789ac25217e1e7dc18e1bbded5a1d42aadbb97d08d5ea2b3465bb83f87",
"0x317fbd6b7a11eac438d13e27f1cb68bb44acd6541b715ea71dd57284020f3e33",
"0x766cbe69882c7486e08643d05256765a7cc4e6653da95e0c6086b503633f9f3d",
"0x532d008a61dd8a4cd3259f84918840b679a0d49bb31f04066082009fbd9911dd",
"0x70beffb8cb2033a23bdb6eb2ca1b1d4e9761385e8eb69fad4aef34277e52ad93",
"0xa0ed7c8681edc4f0fccf3364a6965e106c8e798a0c2d7c452095a6b81deda385",
"0x672deb11c00083068a7483fb03f5005a9917ade0c3011eb20f7d443ecdd1260a",
"0xc711c1fff79cc78a8bdbe0eadb38b8e96fb9f992d8db666c9efc233114916f2a",
"0xc04243bdd47d48316580465f36f064a724f45a2587348b3913cf5c819c107feb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
