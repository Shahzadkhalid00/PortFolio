function sendmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    const serviceID ="service_689pwsf";
    const templateID ="template_njkhpmk"
    
    emailjs.send(serviceID, templateID, params).then(
        (res) =>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("Your Message Send Successfull");
    })
    .catch((err) => console.log(err));
}