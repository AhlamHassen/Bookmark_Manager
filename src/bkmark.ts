export class bookmark {
    Title: string;
    Url: string;

    constructor(title: string, url: string) {
        this.Title = title;
        this.Url = url;
    }

    static createbkmark() : void {
        let bkbody = document.getElementById("bkbody");

        let infoDiv = document.createElement("div");
        infoDiv.className = "hidden";

        let inputs = document.createElement("div");
        inputs.className = "inputs";

        let input1 =  document.createElement("input");
        input1.type = "text";
        input1.className = "input1";
        input1.placeholder = "enter the title of the book ...";

        let lynBreak = document.createElement("br");

        let input2 =  document.createElement("input");
        input2.type = "text";
        input2.className = "input2";
        input2.placeholder = "enter the url of the book ...";

        let btn = document.createElement("button");
        btn.className = "btn";
        btn.innerHTML = "enter";

        inputs.appendChild(input1);
        inputs.appendChild(lynBreak);
        inputs.appendChild(input2);
        inputs.appendChild(btn);

        infoDiv.appendChild(inputs);
        bkbody?.appendChild(infoDiv);

        



    }

    public fillInInfo():void {
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

    

