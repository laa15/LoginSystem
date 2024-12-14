var emaillogin= document.querySelector("#loginemail")
var passlogin =document.querySelector("#loginpass")
var btnsignin = document.querySelector("#btnlogin")
var alertlogin = document.querySelector(".incorrect")


function logIn() {
    var email = emaillogin.value;
    var password = passlogin.value;
    alertlogin.classList.replace('d-block', 'd-none');

    for(var i=0 ; i <signup.length; i++){
    if (email == "" || password == "") {
        alertlogin.innerHTML = 'All fields are important.';
        alertlogin.classList.replace('d-none', 'd-block');
        alertlogin.classList.add('text-danger');
        }
    else{
        if(email == signup[i].youremail && password == signup[i].yourpass){
            window.location.href = "html/welcome.html";
            return;
       
    }
}
}
}
