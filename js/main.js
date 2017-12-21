var BTC_AMOUNT = 0.223;

function getNewPrice() {
    $.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json').done(updateBitcoinPrice);
    setTimeout(getNewPrice, 5000);
}

function updateBitcoinPrice(data) {
    var exchangeRate = JSON.parse(data).bpi.USD.rate_float;
    var price = BTC_AMOUNT * exchangeRate;
    $('#btc-price').html("$" + price.toFixed(2));
};

$(document).ready(getNewPrice);
