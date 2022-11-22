function labFunction() {
    document.getElementById("headerTitle").classList.add("nope");
    document.getElementById("headerImage").classList.add("nope");
    document.getElementById("links").classList.add("nope");
    document.getElementById("labs").classList.remove("nope");
    document.getElementById("body").classList.remove("zolkin");
    document.getElementById("body").classList.remove("server");
}
function linksFunction() {
    document.getElementById("headerTitle").classList.add("nope");
    document.getElementById("headerImage").classList.add("nope");
    document.getElementById("labs").classList.add("nope");
    document.getElementById("links").classList.remove("nope");
    document.getElementById("body").classList.add("zolkin");
    document.getElementById("body").classList.remove("server");
}
function mcFunction() {
    document.getElementById("headerTitle").classList.add("nope");
    document.getElementById("headerImage").classList.add("nope");
    document.getElementById("links").classList.add("nope");
    document.getElementById("labs").classList.add("nope");
    document.getElementById("body").classList.remove("zolkin");
    document.getElementById("body").classList.add("server");
}