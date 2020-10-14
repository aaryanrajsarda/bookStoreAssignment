//query selectors
const registerButton = document.getElementById("register-button");
const registerUsername = document.getElementById("usernameRegister");
const registerPassword = document.getElementById("passwordRegister");
const registerText = document.getElementById("register-text");
const hi = document.getElementById("welcome");
const registerLogo = document.getElementById("register");
const loginLogout = document.getElementById("login-logout");

//event listeners
registerButton.addEventListener("click", () =>
  register(registerUsername.value, registerPassword.value)
);

function register(username, password) {
  user.push({ username: username, password: password });
  registerLogo.remove();
  signIn.remove();
  hi.innerHTML = "Hi " + username + "!";
  loginLogout.innerHTML = `<a id="logout"><span class="fa fa-sign-out"></span>Logout</a>`;
  const logout = document.getElementById("logout");
  logout.addEventListener("click", signOut);
}

function signOut() {
  hi.remove();
  signIn.remove();
  loginLogout.innerHTML = ` <a id="login" data-toggle="modal" data-target="#loginModal"><span class="fa fa-sign-in"></span>Login</a>`;
  registerText.innerHTML = `<a id="register" data-toggle="modal" data-target="#registerModal"><span class="fa fa-user-plus"></span>Register</a></span>`;
}
