var Name = document.querySelector("#fullName")
var Email= document.querySelector("#email")
var pass = document.querySelector("#password")
var btnsignup = document.querySelector("#btnsign")
var emptyItemsignup = document.querySelector("#allinputs")
var fullItemsignup = document.querySelector("#success")
var emailSignupExist = document.querySelector("#emailexist")


// to check inputs signup 

function isEmpty() {

    if (Name.value == "" || Email.value == "" || pass.value == "") {
        return false
    } else {
        return true
    }
}

// for check email is exist
function isEmailExist() {
    for (var i = 0; i < signup.length; i++) {
        if (signup[i].youremail == Email.value) {
            return false
        }
    }
}
 
// array to store users 
var signup = []
// to store data in local storage 
if(localStorage.getItem('diskey') != null){
signup = JSON.parse(localStorage.getItem('diskey'));
}   

//  signup function 

function AddUser() {
    if (isEmpty() == false) {
        fullItemsignup.classList.replace("d-block" ,"d-none")
        emptyItemsignup.classList.remove("d-none")
        emptyItemsignup.classList.add("d-block")
        return;
    }
    var User ={
        yourname: Name.value,
        youremail: Email.value,
        yourpass : pass.value,
    }

    if (isEmailExist() == false) {
        
        emailSignupExist.classList.remove("d-none")
        emailSignupExist.classList.add("d-block")
        fullItemsignup.classList.add( "d-none")
    }
    else{

        signup.push(User);
        localStorage.setItem("diskey", JSON.stringify(signup));
        console.log(localStorage.getItem("diskey"));
        // document.getElementById('success').innerHTML = '<span class="text-success m-3">Success</span>'
        emptyItemsignup.classList.replace("d-block" ,"d-none")
        fullItemsignup.classList.remove( "d-none")
        fullItemsignup.classList.add( "d-block")
        emailSignupExist.classList.add("d-none")
        ClrAft()
        return true;
    }
    
              
}

function ClrAft(){

    var User ={

        yourname: Name.value="",
        youremail: Email.value="",
        yourpass : pass.value="",

    };
   
}
























































