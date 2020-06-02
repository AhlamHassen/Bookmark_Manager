export class bookmark {
    Title: string;
    Url: string;

    constructor(title: string, url: string) {
        this.Title = title;
        this.Url = url;
    }

    createbkmark() {
        let div1 = document.createElement("div");
        div1.className = "fcontent";

        let div2 = document.createElement("div");
        div2.className = " square";
       // div2.appendChild();
        div1.appendChild(div2);

    }
}
