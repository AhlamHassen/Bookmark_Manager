import { Bookmark } from "./Bkmark";


let icon = document.getElementById("icon") as HTMLElement || null;
icon.onclick = () => Bookmark.createbkmark();

