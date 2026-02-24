let pages = [];
let index = 0;

const albumId = new URLSearchParams(window.location.search).get("id");

function addFoto(){
  const file = document.getElementById("imagem").files[0];
  const reader = new FileReader();

  reader.onload = function(){
    const fotos = getFotos();
    fotos.push({
      albumId,
      imagem: reader.result,
      titulo: titulo.value,
      descricao: descricao.value,
      data: data.value
    });
    saveFotos(fotos);
    carregar();
  }

  reader.readAsDataURL(file);
}

function carregar(){
  const fotos = getFotos().filter(f => f.albumId === albumId);
  const book = document.getElementById("book");
  book.innerHTML = "";
  pages = [];

  fotos.forEach(f => {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
      <img src="${f.imagem}" width="100%">
      <h2>${f.titulo}</h2>
      <p>${f.descricao}</p>
      <small>${f.data}</small>
    `;
    book.appendChild(page);
    pages.push(page);
  });
}

function virar(){
  if(index < pages.length){
    pages[index].classList.add("flip");
    index++;
  }
}

carregar();