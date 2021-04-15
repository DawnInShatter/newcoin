const TokenDispatcher = artifacts.require("TokenDispatcher");
const NewToken = artifacts.require("NewToken");

module.exports = function (deployer) {
    deployer.deploy(TokenDispatcher).then(function(dispatchInstance){
        console.log(dispatchInstance.address);
        deployer.deploy(NewToken, "RELA", 'RELA').then(function(token_instance){
            console.log('RELA', token_instance.address);
            token_instance.setMinter(dispatchInstance.address);
        });
        // 0x73f36d645f785442c2fe8A86eD4bFc19feE771cf
        deployer.deploy(NewToken, "RFIL", 'RFIL').then(function(token_instance){
            console.log('RFIL', token_instance.address);
            token_instance.setMinter(dispatchInstance.address);
        });
        // 0x3b42ce795805432a862CDC061d1A103ddE86c3d6
        deployer.deploy(NewToken, "RFILDA", 'RFILDA').then(function(token_instance){
            console.log('RFILDA', token_instance.address);
            token_instance.setMinter(dispatchInstance.address);
        });
    });
};