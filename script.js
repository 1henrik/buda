const RATE = 0.028;

function convert(){

    const amount = document.getElementById("hufAmount").value;

    const sek = amount * RATE;

    document.getElementById("result").textContent =
        (sek || 0).toFixed(2) + " SEK";

}