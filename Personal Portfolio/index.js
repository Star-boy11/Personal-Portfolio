// text animation typed.js
let typed = new Typed('#element', {
    strings: ['Frontend Deveoper', 'React.js Developer', 'Web Developer'],
    typeSpeed: 50,
  });

// Show Resume
let openResume = () => {
  window.open('https://drive.google.com/file/d/1SXlowaFMzKTMEu7lIvPuBxIT6yq57MKG/view?usp=drive_link', '_blank');
};

// Send Mail
let sendMail = ()=>{
  let params = {
    from_name : document.getElementById('fullName').value,
    email_id : document.getElementById('email').value,
    message : document.getElementById('message').value
  }
  console.log(from_name.value)
  emailjs.send("service_5ybrn9i","template_x77vbbs", params).then(()=>{
    alert("Email Sent Successfully!")
  })
  // Clearing input fields
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// custom modal
document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.getElementById("aboutLink");
  var aboutModal = new bootstrap.Modal(document.getElementById("aboutModal"));
  
  aboutLink.addEventListener("click", function(e) {
    e.preventDefault();
    aboutModal.show();
  });
});
