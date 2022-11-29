function labFunction() {
    document.getElementById("headerTitle").classList.add("nope");
    document.getElementById("headerImage").classList.add("nope");
    document.getElementById("notes").classList.add("nope");
    document.getElementById("links").classList.add("nope");
    document.getElementById("labs").classList.remove("nope");
    document.getElementById("body").classList.remove("zolkin");
    document.getElementById("body").classList.remove("server");
    document.getElementById("body").classList.remove("konsp");
}
function linksFunction() {
    document.getElementById("headerTitle").classList.add("nope");
    document.getElementById("headerImage").classList.add("nope");
    document.getElementById("labs").classList.add("nope");
    document.getElementById("notes").classList.add("nope");
    document.getElementById("links").classList.remove("nope");
    document.getElementById("body").classList.add("zolkin");
    document.getElementById("body").classList.remove("server");
    document.getElementById("body").classList.remove("konsp");
}
function notesFunction() {
    document.getElementById("headerTitle").classList.add("nope");
    document.getElementById("headerImage").classList.add("nope");
    document.getElementById("labs").classList.add("nope");
    document.getElementById("notes").classList.remove("nope");
    document.getElementById("links").classList.add("nope");
    document.getElementById("body").classList.remove("zolkin");
    document.getElementById("body").classList.remove("server");
    document.getElementById("body").classList.add("konsp");
}