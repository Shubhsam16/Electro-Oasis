// Function to open tabs
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName + "-tab").style.display = "block";
    var y = document.getElementsByClassName("tab-btn");
    for (i = 0; i < y.length; i++) {
        y[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
}

// Sign In Form Submission
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Validate Sign In Form
    if (email && password) {
        // Assuming you have a function to authenticate users
        authenticateUser(email, password);
    } else {
        alert("Please fill in all fields.");
    }
});

// Create Account Form Submission
document.getElementById("create-account-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email-create").value;
    var password = document.getElementById("password-create").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    // Validate Create Account Form
    if (fullname && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Store data in JSON file
            storeDataInJSON(fullname, email, password);
        } else {
            alert("Passwords do not match.");
        }
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to store data in JSON file
function storeDataInJSON(fullname, email, password) {
    // Assuming you have a JSON file named 'users.json' in the same directory
    const fs = require('fs');
    const filePath = 'users.json';
    
    // Read existing JSON file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If file does not exist, create a new one with the user data
            const userData = [
                {
                    fullname: fullname,
                    email: email,
                    password: password
                }
            ];
            fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("User data saved successfully.");
                    alert("Account created successfully.");
                }
            });
        } else {
            // If file exists, append new user data to it
            const users = JSON.parse(data);
            users.push({
                fullname: fullname,
                email: email,
                password: password
            });
            fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("User data saved successfully.");
                    alert("Account created successfully.");
                }
            });
        }
    });
}

// Function to authenticate users (TO DO: implement actual authentication logic)
function authenticateUser(email, password) {
    // TO DO: implement actual authentication logic
    console.log("Authenticating user...", email, password);
    alert("Signed in successfully.");
}
