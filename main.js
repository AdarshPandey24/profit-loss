var initialPrice = document.querySelector('#Initial-price');
var stockQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#Current-price');
var submitbtn = document.querySelector('#Submit-button');
var outputBox = document.querySelector('#Output-box');

submitbtn.addEventListener('click', process);

function process() {
    var ip = Number(initialPrice.value);
    var quant =  Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    CalculateProfitandLoss(ip, quant, curr);
}


function CalculateProfitandLoss(initialPrice,stockQuantity,currentPrice) {
   
    if(initialPrice > currentPrice)
    {
        var loss = (initialPrice - currentPrice) * stockQuantity;
        var lossPercent = ((loss)/initialPrice) * 100;

        Showoutput(`your loss is of ${loss} and the loss percentage is ${lossPercent}%`);

    }
    else if(currentPrice > initialPrice)
    {
        var profit = (currentPrice-initialPrice) * stockQuantity;
        var profitpercent= ((profit)/initialPrice) * 100;
        Showoutput(`your profit is of ${profit} and the profit percentage is ${profitpercent} %`); 
    }
    else
    {
        Showoutput(`no profit or loss :-) `);
    }
    
}

function Showoutput (Message) {
    outputBox.innerHTML = Message;
}