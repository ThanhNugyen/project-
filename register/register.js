$(document).ready(function () {
    $("#form-register").submit(function (event) {
        event.preventDefault();
        var userName = $('#register-username').val();
        var password = $('#register-password').val();
        var newUser = {
            userName: userName,
            password: password
        }
        localStorage.setItem(userName, JSON.stringify(newUser));
        window.location.href = "../login/index.html";

    });
});
