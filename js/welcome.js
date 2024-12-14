
var UserName = document.querySelector("#user-name")
var signoutbtn = document.querySelector(".signout")


for(var i=0 ; i <signup.length; i++){

document.getElementById("user-name").innerHTML = `${signup[i].yourname}`

}

function SignOut(){

}
signoutbtn.addEventListener("click" , function(){
    window.location.href = "index.html";
})

