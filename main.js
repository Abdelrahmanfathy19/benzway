function colormode(){
    var BODY = document.body;
    BODY.classList.toggle("light_mode")
}
function sendMail(){
    var params={
        from_name : document.getElementById("fullName").Value,
        email_id : document.getElementById("email_id").Value,
        message : document.getElementById("message").Value,
    }
    emailjs.send("service_mc4mrl7" , "template_1p3xehi" ,params).then(function(res){
        alert("Thank you for your message, we will contact you as soon as possible");
    })
    
}