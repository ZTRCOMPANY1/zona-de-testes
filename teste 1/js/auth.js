function registrar(){
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(!nome || !email || !senha){
    alert("Preencha todos os campos");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if(users.find(u => u.email === email)){
    alert("Email já cadastrado");
    return;
  }

  users.push({ nome, email, senha });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Conta criada com sucesso!");
  window.location.href = "index.html";
}

function login(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.senha === senha);

  if(!user){
    alert("Email ou senha inválidos");
    return;
  }

  localStorage.setItem("loggedUser", email);
  window.location.href = "albuns.html";
}