const NewToken = artifacts.require("NewToken");


module.exports = function (deployer) {
    // 0x92733d126fc90A714714Fe97D3530362653aA416
    deployer.deploy(NewToken, "Test NewToken 1", 'TNTA').then(function(token_instance){
        token_instance.setMinter('0xfa5CB376A039DAC0ba48fc51705D8F9D802F8Cf5');
    });
};