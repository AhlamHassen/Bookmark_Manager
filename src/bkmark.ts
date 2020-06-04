export class Bookmark {

    Title: string;
    Url: string;

    constructor(title: string, url: string) {
        this.Title = title;
        this.Url = url;
    }


    createbkmark() :void {
        let bkbody = document.getElementById("bkbody");

        let infoDiv = document.createElement("div");
        infoDiv.className = "hidden";
        infoDiv.id = "infoDiv";

        let inputs = document.createElement("div");
        inputs.className = "inputs";

        let input1 = document.createElement("input");
        input1.type = "text";
        input1.className = "input1";
        input1.id = "inp1";
        input1.placeholder = "enter the title of the webpage ...";

        let lynBreak = document.createElement("br");

        let input2 = document.createElement("input");
        input2.type = "text";
        input2.className = "input2";
        input2.id = "inp2";
        input2.placeholder = "enter the url of the webpage ...";

        let btn = document.createElement("button");
        btn.className = "btn";
        btn.id = "btnId";
        btn.innerHTML = "enter";

        inputs.appendChild(input1);
        inputs.appendChild(lynBreak);
        inputs.appendChild(input2);
        inputs.appendChild(btn);

        infoDiv.appendChild(inputs);
        bkbody?.appendChild(infoDiv);

        let btnId = document.getElementById("btnId") as HTMLButtonElement | null;
        if (btnId == null) return;

        //========================================\\

        btnId.onclick = (): void => {

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


            div3.onclick = () => {

                if (div3.style.color == "red") {
                    div3.style.color = "black";
                }
                else {
                    div3.style.color = "red";
                }

            }

            let div4 = document.createElement("div");
            div4.className = "txtwidth";
            div4.id = "txt";

            let span1 = document.createElement("span");
            span1.className = "title";
            span1.id = "sp1";

            let span2 = document.createElement("span");
            span2.className = "url";
            span2.id = "sp2";

            let linebreak = document.createElement("br");

            div4.appendChild(span1);
            div4.appendChild(linebreak);
            div4.appendChild(span2);

            div2.appendChild(div4);

            let inp1 = document.getElementById("inp1") as HTMLInputElement || null;
            let inp2 = document.getElementById("inp2") as HTMLInputElement || null;

            if (inp1 == null || inp2 == null) return;
            this.Title = inp1.value;
            this.Url = inp2.value;


            let sp1 = document.getElementsByClassName("title");
            let sp2 = document.getElementsByClassName("url");

            if (sp1 == null || sp2 == null) return;

            for (let i = 1; i < sp1.length; i++) {
                if (i == (sp1.length - 1)) {

                    sp1[i].innerHTML = this.Title;

                    let link = document.createElement("a");
                    let linkText = document.createTextNode(this.Url);
                    link.appendChild(linkText);
                    link.href = this.Url;
                    link.target = "_blank";

                    sp2[i].appendChild(link);

                }
            }

            let infoDiv = document.getElementById("infoDiv") as HTMLDivElement || null;
            if (infoDiv.style.display === "none") {
                infoDiv.style.display = "block";
            }
            else {
                infoDiv.remove();
            }

        }

    }

}



