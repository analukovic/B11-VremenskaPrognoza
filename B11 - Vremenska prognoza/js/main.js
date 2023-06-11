let url = "https://naslovi.net/vremenska-prognoza/";
function prognoza() {
    let grad = document.querySelector("#izbor").value;
    document.querySelector("#selekcija").src = url + grad;
    window.open("./pages/"+grad+".html", "", "width=300,height=200");
   
}