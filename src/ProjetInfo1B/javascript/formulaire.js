const form = document.getElementById('formulaire'); 
const prenom = document.getElementById('prenom'); 
const nom = document.getElementById('nom'); 
const email = document.getElementById('email'); 
const message = document.getElementById('message');
const msgError  = document.querySelectorAll('.error'); 
const titre = document.getElementById('titre');

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    console.log('formulaire envoyé'); 
    const prenomValue = prenom.value.trim(); 

    const nomValue = nom.value.trim(); 
    console.log(nomValue, "nom");
    const emailValue = email.value.trim(); 
    console.log(emailValue, "email");

    msgError.forEach(error =>{
        error.classList.add('invisible'); 
    }); 

    if(prenomValue.length < 2 || prenomValue.length > 10){
        console.log('erreur prenom'); 
        prenom.nextElementSibling.classList.remove('invisible');
    }
    else if(nomValue.length < 3 || nomValue.length > 15){
        console.log('erreur nom'); 
        nom.nextElementSibling.classList.remove('invisible');
    }
    else if(messageValue.length < 10 || messageValue.length > 100) {
        console.log('erreur message'); 
        message.nextElementSibling.classList.remove('invisible');
    }
    else{
        console.log('succés'); 
    }; 
});

function mise_a_zero(){
    document.getElementById("form1").reset();
}
function envoie(){
    alert("Vos inofrmations ont bien été prise en compte, merci!")
}