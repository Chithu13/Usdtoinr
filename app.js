function usdtoinr(){

    let usd = document.getElementById('usd').value;
    document.getElementById('inr').innerText = (usd*81.68).toFixed(2)
}
