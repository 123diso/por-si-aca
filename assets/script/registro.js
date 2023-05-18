let myUserName = "";

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userNameLabel = document.getElementById("myUserName");
    userNameLabel.textContent = name;

    console.log("Imprimir nombre " + userNameLabel)
  
    let user = {
      name: name,
      email: email,
      password: password
    };

    myUserName = name;
 
    let userData = JSON.stringify(user);

    localStorage.setItem(email, userData);

    localStorage.setItem("userName", name);
  

    document.getElementById("message").innerHTML = "Registro exitoso. ¡Bienvenido, " + name + "!";

    setTimeout(function() {
        window.location.href = "./landing.html";
      }, 2000);

      console.log(myUserName)

  });

  if(myUserName !== ""){
    console.log("ha entrado la funcion")
    let userNameLabel = document.getElementById("myUserName");
    userNameLabel.textContent = myUserName;
  }

  

  
  