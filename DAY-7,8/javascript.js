let nameelement = document.getElementById("nameelement");
let passwordelement = document.getElementById("passwordelement");
let signinelement = document.getElementById("signin");
let googleelement = document.getElementById("google");
let appleelement = document.getElementById("apple");
let signinanchor = document.getElementById("signinanchor");
let googleanchor = document.getElementById("googleanchor");
let appleanchor = document.getElementById("appleanchor");

signinanchor.style.display="none";
googleanchor.style.display="none";
appleanchor.style.display="none";

nameelement.placeholder = "enter username";
passwordelement.placeholder = "enter password";

function signinbtn() {
  if (nameelement.value === "") {
    alert("please enter username or email");
  } 
  else if (passwordelement.value === "") {
    alert("please enter password");
  } 
  else{
      signinanchor.style.display="inline-block";
      setTimeout(function(){
        signinanchor.style.display="none";
      },1000)
      
  }
 }

function googlebtn(){
      googleanchor.style.display="inline-block";
      setTimeout(function(){
        googleanchor.style.display="none";
      },1000)
      
}


function applebtn(){
      appleanchor.style.display="inline-block";
      setTimeout(function(){
        appleanchor.style.display="none";
      },1000)
      
}
