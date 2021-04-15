pragma solidity >=0.4.22 <0.9.0;

import "./NewToken.sol";


contract TokenDispatcher {
    function token_mint(address token, address to, uint amount) public returns (bool) {
        NewToken(token).mint(to, amount);
        return true;
    }
}

