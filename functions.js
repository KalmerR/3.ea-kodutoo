function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    document.getElementById("DigitaalKell").innerText = time;
    document.getElementById("DigitaalKell").innerContent = time;

    setTimeout(showTime, 1000);

}
function showDate(){
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth();
    months = new Array('Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember');
    d = date.getDate();
    day = date.getDay();
    days = new Array ('Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'); //Lisasin listi pühapäeva esimesena, siis näitab õiget päeva
    var result = ''+months[month]+' '+d+', '+days[day]+', '+year;
    document.getElementById("Date").innerText = result;

}
    showDate();
    showTime();