const submit_button = document.querySelector(".button");
submit_button.onclick = () =>{
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const tel = document.getElementById("tel").value;
    


// Stockons les données dans le localStorage
localStorage.setItem('FirstName',fname);
localStorage.setItem('LastName',lname);
localStorage.setItem('Email',email);
localStorage.setItem('Password',pass);
localStorage.setItem('Cpassword',cpass);
localStorage.setItem('telephone',tel);


//Ecrivons les conditions
if(fname ==="" && lname ==="" && email ==="" && pass ==="" && cpass ==="" && tel ===""){
    alert("Input Field has not a value");
}
else
{
    if(pass !== cpass){
        alert("password not matching");
    }
   let telRegex = /^[0-9]{9}$/;
    if(!telRegex.test(tel)) {
      alert('Veuillez entrer un numéro de téléphone valide');
      return false;
    } else{
        alert("regisration successfull");
    }
}

}
function validate(){
    var mail = document.getElementById("email").value;
    var regx = /^([a-zA-Z0-9\._]+)@([a-a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(regx.text(mail)){
        alert("You have provided a valide email")
        return true
    }else{
        alert("sorry");
        return false;
    }
}
//ajoutons une fonctionnalités pour supprimer les données de Local Storage

localStorage.clear('FirstName',fname);
localStorage.clear('LastName',lname);
localStorage.clear('Email',email);
localStorage.clear('Password',pass);
localStorage.clear('Cpassword',cpass);
localStorage.clear('telephone',tel);
