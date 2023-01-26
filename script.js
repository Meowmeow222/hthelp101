function copiarEnImg() {
    navigator.clipboard.writeText('<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> <img src="TUIMAGEN.PNG" alt="Recuerda meter una imágen en el código!!!" id="imgImg"/> </a>');
    alert("Copiado!");
}

function copiarTwo() {
    navigator.clipboard.writeText('<map name="mapa"> <area shape="rect" coords="0,0,200,400" href="https://youtube.com" target="_blank"> <area shape="rect" coords="200,0,400,400" href="https://twitter.com" target="_blank"> </map> <img src="TUIMAGEN.PNG" alt="Recuerda meter una imágen en el código!!!" usemap="#mapa" id="divid"></img>');
    alert("Copiado!");
}

function copiarPic() {
    navigator.clipboard.writeText('<picture> <source media="(min-width: 1450px)" srcset="TUIMAGEN.PNG"> <source media="(min-width: 950px)" srcset="TUIMAGEN.PNG"> <source media="(min-width: 550px)" srcset="TUIMAGEN.PNG"> <img src="TUIMAGEN.PNG" alt="Recuerda meter una imágen en el código!!!"> </picture>');

    alert("Copiado!");
}

function copiarFav() {
    navigator.clipboard.writeText('<link rel="icon" type="image/x-icon" href="TUIMAGEN.PNG">');

    alert("Copiado!");
}

function copiarTav() {
    navigator.clipboard.writeText('<table style="margin-left: 100px;" id="teibol"> <tr> <th>Top 1 gato:</th> <th>Top 2 gato:</th> <th>Top 3 gato?</th> <th>Oh dios mio sale de la matrix</th> </tr> <tr> <td>Maxwell</td> <td>Floppa</td> <td colspan="2" rowspan="2" style="padding-left: 25% !important;">Juan</td> </tr> <tr> <td colspan="2"> A mogus </td> </tr> </table>');

    alert("Copiado!");
}