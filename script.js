function copiarEnImg() {
    navigator.clipboard.writeText('<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="cat.jpg" id="imgImg"></a>');
    alert("Copiado!");
}

function copiarTwo() {
    navigator.clipboard.writeText('<map name="mapa"> <area shape="rect" coords="0,0,200,400" href="https://youtube.com" target="_blank"> <area shape="rect" coords="200,0,400,400" href="https://twitter.com" target="_blank"> </map> <img src="twosides.jpg" usemap="#mapa" id="divid"></img>');
    alert("Copiado!");
}