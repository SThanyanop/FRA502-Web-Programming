function CToF() {
    let tempC = document.getElementById("celsius").value;
    document.getElementById("ans1").innerHTML = (tempC * 9) / 5 + 32 + " °F";
}