document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const validusername = "pradeep";
    const validpassword = "admin";

    const username = document.getElementById('UserName').value;
    const password = document.getElementById('UserPassword').value;
    if (username == validusername && password == validpassword){
        alert("login successful");

        window.location.href = "index.html";      //redirect to home page
    }else{
        alert("Invalid username or password. Please try again.");
    }
});
