var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cur = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, cur);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput('The loss is:' + loss + 'and the percent is' + lossPercentage + '%');
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput('The profit is:' + profit + 'and the percent is' + profitPercentage + '%');
    } else {
        showOutput("No Pain No Gain and No Gain No Pain");
    }
}

function showOutput(message) {

    outputBox.innerHTML = message;

}