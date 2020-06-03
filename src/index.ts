import { Bookmark } from "./Bkmark";


let icon = document.getElementById("icon") as HTMLElement || null;
icon.onclick = () => Bookmark.createbkmark();

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

/*let squareIcon = document.getElementsByClassName("square") as unknown as HTMLElement;
if (squareIcon == null) window.alert("Icon not found");

squareIcon.onclick = () => {
    for (let i = 0; i < squareIcon.length; i++) {
        squareIcon[i].style.color = "red";
    }

};*/

let sqIcon = document.getElementById("squareId") as HTMLElement;
if(sqIcon == null) window.alert("Icon not found");
sqIcon.onclick = () =>{
    if( sqIcon.style.color == "red"){
        sqIcon.style.color = "black";
    }
    else{
        sqIcon.style.color = "red"
    }
    
}
