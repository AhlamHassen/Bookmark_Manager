import { bookmark } from "./bkmark";

let icon = document.getElementById("icon") as HTMLElement || null;
//let bk1 = new bookmark("Red Sea", "http//Redsea.com");

icon.onclick = () => bookmark.createbkmark();


/*function(){
    console.log("stupid");
}*/