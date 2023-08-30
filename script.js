function showPassword() {
  let x = document.getElementById("password");
  let eye = document.getElementById("eye");

  if (x.type === "password") {
    x.type = "text";
    eye.classList.add('fa-eye');
    eye.classList.remove('fa-eye-slash');
  } else {
    x.type = "password";
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');
  }
}

function login(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var show = document.getElementById("show");
  var successfull = document.getElementById("successfull");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const emailValue = email.trim();

  if(email == ""){
    show.innerHTML= ('Please enter your email !');  
    }else if((email).length < 6){
      show.innerHTML=('Email must be at least six characters');
    }else if(!emailPattern.test(emailValue)){
      show.innerHTML=('email can only contain letters and numbers');
    }else if(password ==""){
      show.innerHTML=('Please enter your password !');
    }else if((password).length < 6){
      show.innerHTML=('Password must be at least six characters');
    }else if(successfull){
      successfull.style.display = "block";
      show.innerHTML = "";
    }
    setTimeout(() => {
      successfull.style.display = "none";
    }, 5000);
}