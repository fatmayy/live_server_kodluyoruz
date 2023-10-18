function currentDate(){
    //dom ögelerini secelim
    let clock=document.querySelector("#myClock");
    let today=new Date()//saati ayarlamak için
    //günlerimiz default olarak gelmiyor ben de array oluşturdum arrayle çekeceğim
    let days=["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];
    let day=days[today.getDay()]//arrayden günleri çektim
    let time=today.getHours()+ ":"+ today.getMinutes()+":"+ today.getSeconds()+ `${day}`
    //saat,dakika,saniye olarak yazdırdık yanına da günlerimizi yazdırmak için arrayden çektiğim ve "day" değişkenine atadığımı template literals ile yazdım

    let currentDate=`${time}`
    clock.innerHTML=currentDate //canlı saati html ekranına yazdırıyoruz
    setTimeout(currentDate,1000)//dinamik saniye bilgisi için
    //setInterval(currentDate,1000)//dinamik saniye bilgisi için
}
currentDate();