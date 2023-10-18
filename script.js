let firstName=prompt("Lütfen isminizi giriniz")
let greeting=document.querySelector("#myName")

let body=document.querySelector(".bg-dark")//isim girilmezse diye
body.style.color="orange"
body.style.textAlign="center"
body.style.fontSize="20px"
//isim yazarsa ekranda gözükmesi için.
gretting.innerHTML=`${firstName}`
if(!firstName){
    body.innerHTML="Lütfen isminizi girin"
    body.style.color="red"
}