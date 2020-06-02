import { bookmark } from "./bkmark";

let icon = document.getElementById("icon") as HTMLElement || null;
icon.onclick =  function(){
    console.log("stupid");
}

let bk1 = new bookmark("Red Sea", "http//Redsea.com");