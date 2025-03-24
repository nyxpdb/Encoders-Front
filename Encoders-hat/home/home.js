document.querySelector("#login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if(username === "admin" && password === "admin") {
        window.location.href = 'dashboard/dashboard.html'; 
    } else {
        alert("Usuário ou senha incorretos.");
    }
});
