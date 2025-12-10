
let message = document.getElementById('message');
let btn = document.getElementById('btn');



btn.addEventListener('click' , function (event) {
event.preventDefault();


let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


let realEmail = "jonim@gmail.com";
let realPassword ="sanga_chidasa_boladiyu_momo";



if (email === realEmail && password === realPassword) {
    message.innerHTML = "muaffaqiyatli o'tdingiz";
    message.style.color = "green";

} else{
    message.innerHTML = "Nimadr xato";
    message.style.color = "red";
}
})
