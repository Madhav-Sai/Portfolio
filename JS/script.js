function open_Menu() {
    var a = document.querySelector(".hamburger-menu");
    var b = document.querySelector(".top");
    var c = document.querySelector(".bottom");
    var d = document.querySelector(".middle");
    var e = document.getElementById("m-menu");
    if (e.style.height === "0%") {
        b.style.transform = "rotate(45deg)";
        c.style.transform = "rotate(-45deg)";
        d.style.display = "none";
        e.style.height = "200px";
    } else {
        b.style.transform = "rotate(0deg)";
        c.style.transform = "rotate(0deg)";
        d.style.display = "block";
        e.style.height = "0%";
    }
}