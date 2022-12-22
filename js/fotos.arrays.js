let cambia_imagen = new Array();//guarda imagenes en el array

cambia_imagen[0] = "fotos/diosas/AFRODITA.png";

cambia_imagen[1] = "fotos/diosas/ANFITRITE.png";

cambia_imagen[2] = "fotos/diosas/ANPUT.png";

cambia_imagen[3] = "fotos/diosas/ARTEMISA.png";

cambia_imagen[4] = "fotos/diosas/ATENA.png";

cambia_imagen[5] = "fotos/diosas/BASTET.png";

cambia_imagen[6] = "fotos/diosas/DEMÉTER.png";

cambia_imagen[7] = "fotos/diosas/ERIS.png";

cambia_imagen[8] = "fotos/diosas/ESFINGE.png";

cambia_imagen[9] = "fotos/diosas/GAIA.png";

cambia_imagen[10] = "fotos/diosas/HATHOR.png";

cambia_imagen[11] = "fotos/diosas/HÉCATE.png";

cambia_imagen[12] = "fotos/diosas/HEL.png";

cambia_imagen[13] = "fotos/diosas/HERA.png";

cambia_imagen[14] = "fotos/diosas/HESTIA.png";

cambia_imagen[15] = "fotos/diosas/IRIS.png";

cambia_imagen[16] = "fotos/diosas/ISIS.png";

cambia_imagen[17] = "fotos/diosas/KHIONE.png";

cambia_imagen[18] = "fotos/diosas/MELINOE.png";

cambia_imagen[19] = "fotos/diosas/MERET.png";

cambia_imagen[20] = "fotos/diosas/NAUNET.png";

cambia_imagen[21] = "fotos/diosas/NEFTIS.png";

cambia_imagen[22] = "fotos/diosas/NEITH.png";

cambia_imagen[23] = "fotos/diosas/NÉMESIS.png";

cambia_imagen[24] = "fotos/diosas/NIKE.png";

cambia_imagen[25] = "fotos/diosas/NUT.png";

cambia_imagen[26] = "fotos/diosas/NYX.png";

cambia_imagen[27] = "fotos/diosas/PERSÉFONE.png";

cambia_imagen[28] = "fotos/diosas/RENENUTET.png";

cambia_imagen[29] = "fotos/diosas/RHEA.png";

cambia_imagen[30] = "fotos/diosas/SEKHMET.png";

cambia_imagen[31] = "fotos/diosas/SELENE.png";

cambia_imagen[32] = "fotos/diosas/SOL.png";

cambia_imagen[33] = "fotos/diosas/SOPDET.png";

function rand(n) {

  return (Math.floor(Math.random() * n));
}
//floor() (redondea hacia abajo al entero más cercano) y random crea un numero al azar entre 1 y 33 (o cual sea la cantidad de imágenes)

function cambiar() {
  document.getElementById("ia").src = cambia_imagen[rand(33)];
}
// getElementById(): nos permite acceder a elementos HTML a los que hemos asignado un identificador con el atributo HTML id.
// esta función está vinculada con el onclick="jugarElemento();