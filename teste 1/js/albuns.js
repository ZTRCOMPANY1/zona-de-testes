function criarAlbum(){
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;

  const albuns = getAlbuns();
  const id = Date.now().toString();

  albuns.push({id,titulo,descricao});
  saveAlbuns(albuns);

  carregar();
}

function carregar(){
  const albuns = getAlbuns();
  const lista = document.getElementById("lista");

  lista.innerHTML = albuns.map(a => `
    <div class="card" onclick="abrir('${a.id}')">
      <h3>${a.titulo}</h3>
      <p>${a.descricao}</p>
    </div>
  `).join("");
}

function abrir(id){
  window.location.href = `album.html?id=${id}`;
}

carregar();