// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenverseRewards is ERC20, ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    constructor() ERC20("Tokenverse Loyalty", "TVR") ERC721("TokenverseBadge", "TVB") {}

    // Reward ERC20 tokens
    function rewardTokens(address user, uint amount) external onlyOwner {
        _mint(user, amount);
    }

    // Reward NFT badge
    function rewardNFT(address user, string memory tokenURI) external onlyOwner {
        _tokenIds++;
        _mint(user, _tokenIds);
        _setTokenURI(_tokenIds, tokenURI);
    }
}
