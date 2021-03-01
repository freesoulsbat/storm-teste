function closeNav() {
    const button = document.getElementById("sidebar")
    button.classList.remove("show")
}
function closeOcultRow() {
    const element = document.getElementById("ocult-row")
    element.classList.remove("show")
}
function showOcultRow() {
    const element = document.getElementById("ocult-row")
    element.classList.add("show")
}
function divDate() {
    dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
    monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro")
    now = new Date()
    const date = "<p>" + dayName[now.getDay()] + ", <strong>" + now.getDay() + "</strong> de <strong>" + monName[now.getMonth()] + "</strong> de <strong>" + now.getFullYear() + "</strong> <strong class='strong-style'> // " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "</strong> </p>"
    $(".div-date").append(date);
}
divDate()