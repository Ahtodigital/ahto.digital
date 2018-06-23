function adicionaWhats(n, t = "") {
  var node = document.createElement("DIV");
  node.className = "contato";
  node.innerHTML = "<a href='https://api.whatsapp.com/send?phone=" + n + "&text=" + t + "' target='_blank'><img src='https://ahto.digital/img/whats.svg'></a>";
  document.getElementsByTagName("BODY")[0].appendChild(node);
  insertCss(".contato {  display: block;  z-index: 99;  position: fixed;  right: 10px;  bottom: 10px;  background-color: #25d366;  border-radius: 5548998596762px;  width: 55px;  height: 55px;  display: grid;  align-items: center;  justify-content: center;}.contato a {  display: grid;  align-items: center;  justify-content: center;  text-align: center;}.contato a img {  width: 65%;  margin: 0 auto;}");
}
function insertCss(code) {
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = code;
    } else {
        style.innerHTML = code;
    }
    document.getElementsByTagName("head")[0].appendChild( style );
}