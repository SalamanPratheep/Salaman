
//   2nd page


let SSS={};

function submitbt() {
    event.preventDefault();
   
    
    var studentName = document.getElementById('sname').value;
    var StudentId = document.getElementById('id').value;
    var PhoneNo = document.getElementById('pone').value;
    var Email = document.getElementById('email').value;
    // var tamil = document.getElementById('tamil').value;
    // var english = document.getElementById('english'  ).value;
    // var malayalam = document.getElementById('malayalam').value;
    // let ratio = document.querySelectorAll ("input[name='language']");
    // let result = document.getElementById("result");
    // ratio.foreach(ratio=>{


    // })
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var language = document.querySelector('input[name="language"]:checked').value;
    if (!gender) {
        alert('Please select a gender');
        return;
    }

    var SSS = {
        studentName: studentName,
        StudentId: StudentId,
        PhoneNo: PhoneNo,
        Email: Email,
        language: language,
        gender: gender
    };

    SSSSamurai(SSS);
}

function SSSSamurai(SSS) {
    console.log('SSS');
    console.log(SSS);
    window.location.href = "fsp.html";
    localStorage.setItem('SSSData', JSON.stringify(SSS));
}

// 1st page
-
function signin() {
  
  
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    
    var password = document.getElementById('password').value;
    if (username == "Salaman" && password == "admin") {
        window.location.href = "Salaman.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
}