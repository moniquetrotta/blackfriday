function salvarEmail (){
  if(typeof(Storage) !== "undefined") {
    
  if (localStorage.cont) {
    localStorage.cont = Number (localStorage.cont)+1;
  }
  else {
    localStorage.cont = 1;
  }
  
  Email = document.getElementById('email').value;
  localStorage.setItem("Email" +localStorage.cont, Email);
  } else {  
  }  
}