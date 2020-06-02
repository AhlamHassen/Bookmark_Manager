export class bookmark {
    Title: string;
    Url: string;

    constructor(title: string, url: string) {
        this.Title = title;
        this.Url = url;
    }

    static createbkmark() : void {
        let infoDiv = document.createElement("div");
        let bkbody = document.getElementById("bkbody");
        let div1 = document.createElement("div");
        div1.className = "bookmark";
        bkbody?.appendChild(div1);

        let div2 = document.createElement("div");
        div2.className = "fcontent";
        div1.appendChild(div2);

        let div3 = document.createElement("div");
        div3.className = "square";
        div3.innerHTML = '<i class="far fa-square">';
        div2.appendChild(div3);
        
        let div4 = document.createElement("div");
        div4.className = "txtwidth";
        div4.id = "txt";
        let span1 = document.createElement("span");
        span1.className = "title";
        let span2 = document.createElement("span");
        span2.className = "url";
        let linebreak = document.createElement("br");
        div4.appendChild(span1);
        div4.appendChild(linebreak);
        div4.appendChild(span2);

        div2.appendChild(div4);

    }
}
