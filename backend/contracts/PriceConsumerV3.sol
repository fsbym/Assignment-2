// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal btcUsdFeed;
    AggregatorV3Interface internal ethUsdFeed;
   
   
    constructor() {
        btcUsdFeed = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43);        
        ethUsdFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
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

    function getEthUsdLatestAnswer() external view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /* uint startedAt */,
            /* uint timeStamp */,
            /* uint80 answeredInRound */
        ) = ethUsdFeed.latestRoundData();
        return answer;
    }
}