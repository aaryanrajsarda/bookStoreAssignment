const signInButton = document.getElementById("sign-in-button");
const username = document.getElementById("username");
const signIn = document.getElementById("login");
const password = document.getElementById("password");

signInButton.addEventListener("click", () =>
  login(username.value, password.value)
);

function login(username, password) {
  hi.innerHTML = "Welcome " + username + "!";
  registerLogo.remove();
  signIn.remove();
  loginLogout.innerHTML = `<a id="logout"><span class="fa fa-sign-out"></span>Logout</a>`;
  const logout = document.getElementById("logout");
  logout.addEventListener("click", signOut);
}
