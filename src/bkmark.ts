export class bookmark {
    Title: string;
    Url: string;

    constructor(title: string, url: string) {
        this.Title = title;
        this.Url = url;
    }

    static createbkmark() : void {
        let bkbody = document.getElementById("bkbody");
        let divs = document.createElement("div");
        divs.className = "bookmark";
        bkbody?.appendChild(divs);


       // window.alert("ahlam");

        /*let div2 = document.createElement("div");
        div2.className = " square";
       // div2.appendChild();
        div1.appendChild(div2);*/

    }
}
