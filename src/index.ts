import { Bookmark } from "./Bkmark";

let Bookmarks: Bookmark[] = [];

let icon = document.getElementById("icon") as HTMLElement || null;
icon.onclick = () => {
    let b1 = new Bookmark("", "");
    b1.createbkmark();
    Bookmarks.push(b1);
}

let bkbody = document.getElementById("bkbody") as HTMLElement;
bkbody.onscroll = () => {

    let header = document.getElementById("header");
    if (header == null) return;

    if (bkbody.scrollTop > 40) {
        header.style.backgroundColor = "lightblue";
        header.style.width = "342px";
    }
    else {
        header.style.backgroundColor = "white";
    }
}

let sqIcon = document.getElementById("squareId") as HTMLElement;
sqIcon.onclick = () => {
    if (sqIcon.style.color == "red") {
        sqIcon.style.color = "black";
    }
    else {
        sqIcon.style.color = "red";
    }
}