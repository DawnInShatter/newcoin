// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./NewToken.sol";
import '@openzeppelin/contracts/math/SafeMath.sol';


contract TokenDispatcher {
    using SafeMath for uint256;
    mapping(address => mapping(address => uint256)) public totalMint;

    function token_mint(address token, address to) public returns (bool) {
        NewToken(token).mint(to, 100*10**18);
        totalMint[token][to] = totalMint[token][to].add(100*10**18);
        return true;
    }




    function getAdrMint(address token, address to) public view returns (uint amount) {
        amount = totalMint[token][to];
    }

}

