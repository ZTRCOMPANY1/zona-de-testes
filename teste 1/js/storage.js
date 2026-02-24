function getAlbuns(){
  return JSON.parse(localStorage.getItem("albuns") || "[]");
}

function saveAlbuns(albuns){
  localStorage.setItem("albuns", JSON.stringify(albuns));
}

function getFotos(){
  return JSON.parse(localStorage.getItem("fotos") || "[]");
}

function saveFotos(fotos){
  localStorage.setItem("fotos", JSON.stringify(fotos));
}