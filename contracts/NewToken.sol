// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./owner/AdminRole.sol";

contract NewToken is ERC20, AdminRole {
    // 铸币方
    address public minter;

    // 更改铸币方
    function setMinter(address _newMinter) external onlyAdmin {
        require(_newMinter != address(0), "is zero address");
        minter = _newMinter;
    }

    function mint( address _to, uint256 _amount) public onlyMinter returns (bool) {
        _mint(_to, _amount);
        return true;
    }

    constructor(string memory name_, string memory symbol_) public ERC20(name_, symbol_) {
        minter = msg.sender;
    }

    // 控制权限
    modifier onlyMinter() {
        require(msg.sender == minter, "caller is not the minter");
        _;
    }

    function getMinter() public view returns (address) {
        return minter;
    }

}

