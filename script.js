let generatedPin = "";

function showRegister() {
    document.getElementById("app").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");
}

function showLogin() {
    alert("Login page not implemented yet.");
}

function sendPin() {
    generatedPin = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Your verification PIN (simulation): " + generatedPin);
    document.getElementById("register").classList.add("hidden");
    document.getElementById("verify").classList.remove("hidden");
}

function verifyPin() {
    let userPin = document.getElementById("pinInput").value;
    if (userPin === generatedPin) {
        document.getElementById("verify").classList.add("hidden");
        document.getElementById("hosting").classList.remove("hidden");
    } else {
        alert("Incorrect PIN. Try again.");
    }
}