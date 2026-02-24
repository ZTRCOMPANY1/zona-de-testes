function login(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(u => u.email === email && u.senha === senha);

  if(user){
    localStorage.setItem("loggedUser", email);
    window.location.href = "albuns.html";
  } else {
    alert("Usuário não encontrado.");
  }
}

function register(nome,email,senha){
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({nome,email,senha});
  localStorage.setItem("users", JSON.stringify(users));
}