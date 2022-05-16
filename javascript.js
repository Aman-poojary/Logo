var b = 1;
asd(b)
function asd(a) {
    if (a == 1) {
        document.getElementById("login").style.display = "none";
        document.getElementById("createAccount").style.display = "block";
        document.getElementById("btn_top").style.left = "0px";
    }
    else {
        console.log("hello")
        document.getElementById("createAccount").style.display = "none";
        document.getElementById("login").style.display = "block";
        document.getElementById("btn_top").style.left = "119px";
    }
}


var username = document.querySelector('.form__input-error-username-message')
var password = document.querySelector('.form__input-error-password-message')
var cpassword = document.querySelector('.form__input-error-cpassword-message')
var form1 = document.getElementById('createAccount')
var form2 = document.getElementById('login')
var u = 0;
var p = 0;
var cp = 0;
var register = 1;
var login = 1;
const regex = /\s+/g;
const Sregex = /^[^a-zA-Z0-9]+$/;
const Nregex = /^[^a-zA-Z]+$/;



function validate(element, value) {
    u = document.getElementById('signupUsername').value
    p = document.getElementById('password').value
    cp = document.getElementById('cpassword').value

    if (u) {
        console.log(u.length);
        if (u.length <= 4 || u.length >20 ) { username.innerHTML = "*Username must be between 5 to 20 characters"; register = 0; }
        else if (u.match(regex)) { username.innerHTML = "*Do not using space in username"; register = 0; }
        else if(isNaN(u) == false){ username.innerHTML = "*Username cannot be number"; register = 0; }
        else if(Sregex.test(u)){ username.innerHTML = "*Username cannot be symbols"; register = 0; }
        else if(Nregex.test(u)){ username.innerHTML = "*Username should contain alphabets"; register = 0; }
        else { username.innerHTML = ""; register = 1; }
    }
    else { username.innerHTML = ""; }

    if (p) {
        if (p.length <= 3) { password.innerHTML = "*Password is too short"; }
        else if (p === "1234" || p === "abcd" || p === "password") { password.innerHTML = "*Try different password"; register = 0; }
        else { password.innerHTML = ""; register = 1; }
    }
    else { password.innerHTML = ""; }
}

function logon(element, value) {

}


form1.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cp) {
        if (p != cp) { cpassword.innerHTML = "*Incorrect password"; register = 0; }
        else { cpassword.innerHTML = ""; register = 1; }
    }
    else { cpassword.innerHTML = ""; }
    if (register === 1) {
        document.querySelector('.form__message--success').innerHTML = "Registered successfully";
        document.getElementById("l-content").style = "box-shadow :0 0 23px 23px var(--color-primary);";
        localStorage.setItem('username', u);
        localStorage.setItem('password', p);
        setTimeout(() => {
            document.querySelector('.form__message--success').innerHTML = "";
            document.getElementById("l-content").style = "box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.3);";
            form1.reset();
            asd(2);
        }, 3000);
    }

});

form2.addEventListener('submit', (e) => {
    var loginusername = document.getElementById('loginUsername').value
    var loginpassword = document.getElementById('loginPassword').value
    e.preventDefault();
    if (loginusername === localStorage.getItem('username') && loginpassword === localStorage.getItem('password')) {
        document.getElementById("l-content").style = "box-shadow :0 0 23px 23px var(--color-primary);";
        document.querySelector('.form__message--success2').innerHTML = "Login successfull";
        setTimeout(() => {
            document.querySelector('.form__message--success2').innerHTML = "";
            document.getElementById("l-content").style = "box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.3);";
            form2.reset();
            asd(1);
        }, 2000);
    }
    else {
        document.querySelector('.form__message--error2').innerHTML = "Invalid username/password combination";
        document.getElementById("l-content").style = "box-shadow :0 0 100px 2px var(--color-error);";
        setTimeout(() => {
            document.querySelector('.form__message--error2').innerHTML = "";
            document.getElementById("l-content").style = "box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.3);";

        }, 2000);

    }


});
