import picker from "../../js/src"
if (window.Weex) {
    Weex.install(picker);
} else if (window.weex) {
    weex.install(picker);
}