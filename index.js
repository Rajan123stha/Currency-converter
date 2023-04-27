const currency1El = document.getElementById("currency-first")

const value1El = document.getElementById("value-first")

const currency2El = document.getElementById("currency-second")

const value2El = document.getElementById("value-second")

const rateEl = document.getElementById("exchange-rate")



const apiKey = "7elxT6z6fEaHk4RQ03u/Lw==ExyjdweIFumZfF3q";

const option = {
    method: "GET",
    header: { 'X-Api-Key': apiKey }
}
updateRate();
async function updateRate() {
    const result = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=${currency1El.value}&want=${currency2El.value}&amount=${value1El.value}`, option);
    const data = await result.json();

    const n_value = data.new_amount;
    value2El.value = n_value;
    const rate = (n_value / value1El.value).toFixed(2);
    rateEl.innerText = `1 ${currency1El.value} = ${rate + " " + currency2El.value}`


}
currency1El.addEventListener("change", updateRate);
currency2El.addEventListener("change", updateRate);
value1El.addEventListener("input", updateRate);

