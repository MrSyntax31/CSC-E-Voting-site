function alertUser() {
    swal({ title: "Verify your Account",
 text: "You're now registered. Please check your email for the verification link.",
 type: "success"}).then(okay => {
   if (okay) {
    window.location.href = "index.html";
  }
});
}


function sendmail() {
  swal({ title: "Email Sent!",
  text: "Please check your email for the verification link.",
  type: "success"}).then(okay => {
    if (okay) {
     window.location.href = "changepassword.html";
   }
 });
}

function alertMsg(){
    swal({
        title: "Are you sure you want to cast your vote?",
        text: "Once you cast, you will not be able to change your vote!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willProceed) => {
        if (willProceed) {
          swal("Done! Your vote has been sent and counted. Verify your vote.", {
            icon: "success",
          }).then(function(){
              window.location = "logverify.html";
          });
        } else {
          swal("Your vote is safe!");
        }
      });
}

function savePass(){
  swal({ title: "Password successfully changed",
 icon: "success"}).then(okay => {
   if (okay) {
    window.location.href = "index.html";
  }
});
}