const NewToken = artifacts.require("NewToken");
const dispatch_address = '0x03D5ac945E0e32ac0C4fb4E23B99434FE7d193E0';

module.exports = function (deployer) {
    // 0x9936E8d081fe87F845463329Bf334c1ea9ffb510
    deployer.deploy(NewToken, "RELA", 'RELA').then(function(token_instance){
        token_instance.setMinter(dispatch_address);
    });
    // 0xcee01A4cDabD8a2470b084F288bDa9F4A19ac041
    deployer.deploy(NewToken, "RFIL", 'RFIL').then(function(token_instance){
        token_instance.setMinter(dispatch_address);
    });
    // 0xA88b10C68DD6eC57A5e23607f12B6Cd40778EaC2
    deployer.deploy(NewToken, "RFILDA", 'RFILDA').then(function(token_instance){
        token_instance.setMinter(dispatch_address);
    });
};