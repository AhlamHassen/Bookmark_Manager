import { bookmark } from "./bkmark";

let icon = document.getElementById("icon") as HTMLElement || null;
icon.onclick = () => bookmark.createbkmark();

