// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal btcUsdFeed;
    AggregatorV3Interface internal btcEthFeed;
   
    // Network: Sepolia (example)
    // Aggregator: BTC/USD: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43 (example)
    // Aggregator: BTC/ETH: Check Chainlink docs for a valid address (example below)
    
    constructor() {
        btcUsdFeed = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43);        
        btcEthFeed = AggregatorV3Interface(0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22);
    }

    function getBtcUsdLatestAnswer() external view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /* uint startedAt */,
            /* uint timeStamp */,
            /* uint80 answeredInRound */
        ) = btcUsdFeed.latestRoundData();
        return answer;
    }

    function getBtcEthLatestAnswer() external view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /* uint startedAt */,
            /* uint timeStamp */,
            /* uint80 answeredInRound */
        ) = btcEthFeed.latestRoundData();
        return answer;
    }
}