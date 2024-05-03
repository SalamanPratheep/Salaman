function signin() {
    // Call your actual submit function here
  
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById('username').value;

    var password = document.getElementById('password').value;
    
    // Your validation logic here
    if (username == "Salaman" && password == "admin") {
        window.location.href = "Salaman.html"; // Redirect to welcome page on successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
    
}


function submitForm() {
    event.preventDefault();
    var studentName = document.getElementById('sname').value;
    console.log(studentName)
    var StudentId = document.getElementById('id').value;
    var PhoneNo = document.getElementById('pone').value;
    var Email = document.getElementById('email').value;
    var Gender = document.getElementById('Gender').value;
    var Language = document.getElementById('Language').value;

    if (studentName.value.trim() === "" || StudentId.trim() === "" || PhoneNo.trim() === "" || Email.trim() === "" || Gender.trim() === "" || Language.trim() === "") {
        alert("Invalid input. Please fill in all fields.");
        // window.location.href = "fsp.html";
        return false;
    } else {                                                                 
        return true;
    }
}
