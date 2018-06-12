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

function BGChanger() {}
BGChanger.prototype = {
    constructor: BGChanger,
    index: 0,
    urls: ['https://i.imgur.com/KPwiYiM.jpg', 'https://i.imgur.com/4K2lvjk.jpg', 'https://i.imgur.com/KuQejKW.jpg', 'https://i.imgur.com/nknZFlt.jpg',],
    preload: function() {
        for(var i in this.urls) {
            var img = new Image();
            img.src = this.urls[i];
        }
    },
    changeBG: function () {
        this.index = (this.index + 1) % this.urls.length;
        console.log(this.urls[this.index]);
        document.body.style.backgroundImage = "url(" + this.urls[this.index] + ")";
        }
    };

    var bgChanger = new BGChanger();
    setTimeout(bgChanger.preload.bind(bgChanger), 1);
    function changeBackground(){
        setInterval(bgChanger.changeBG.bind(bgChanger), 30000);
        bgChanger.changeBG();
    }

    showDate();
    showTime();
    setInterval(bgChanger.changeBG.bind(bgChanger), 30000);