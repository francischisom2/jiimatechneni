const userpass = '1234';

let user = document.querySelector("#userpass");
let btnn = document.querySelector("#btnn");
btnn.addEventListener("click", function(evt){
    if(user.value == userpass){
        alert("login Succesful!!");
    } else {
        alert("incorrect password!");
    }
});