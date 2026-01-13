function register(e) {
    e.preventDefault();
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: "user"
    };
    localStorage.setItem("user", JSON.stringify(user));
    location.href = "dashboard.html";
}

function login(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.email !== email.value) {
        alert("Invalid login");
        return;
    }
    location.href = user.role === "admin" ? "admin.html" : "dashboard.html";
}

function logout() {
    localStorage.removeItem("user");
    location.href = "index.html";
}

const userInfo = document.getElementById("userInfo");
if (userInfo) {
    const user = JSON.parse(localStorage.getItem("user"));
    userInfo.innerText = `Welcome ${user.name}`;
}
