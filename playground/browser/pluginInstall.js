import t from "../../js/src"
console.log(t)
if(window.Weex){
  Weex.install(t );
}
else if(window.weex){
  weex.install(t);
}
