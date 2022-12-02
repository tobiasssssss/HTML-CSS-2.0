body2.style.left = "20%";
body2.style.width ="80%";
const plaatje = document.getElementById('open_nav')
const h1 = document.getElementsByTagName('article > h1')
const h2 = document.getElementsByTagName('article > h2')

function start(){
  const open = "1" //zorgt ervoor dat hij inklapt waneer hij uigeklapt is en uitklapt waneer hij ingeklapt is
  window.open = "1" //maakt de variable global?

}

function open_nav(){
  if (open == "1") {
    body2.style.left = "20%"; //maakt de nav zichtbaar
    body2.style.width ="80%";//maakt de nav zichtbaar
    open = "0"
  }else if(open == "0") {
    body2.style.width = "100%"; //maakt de nav onzichtbaar
    body2.style.left = "0%";  //maakt de nav onzichtbaar

    open = "1"
  }else {
    body2.style.left = "0%"; //maakt de nav onzichtbaar
    body2.style.width ="100%";//maakt de nav onzichtbaar
    open = "1"
  }
}
