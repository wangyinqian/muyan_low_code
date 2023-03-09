import React from "react";
import ReactDom from "react-dom";

class EditContent extends HTMLElement {
    constructor(){
        super();

        this.render();
    }
    render(){
        const shadow = this.attachShadow({mode:'open'});

        ReactDom.render(<main>内容</main>,shadow)
    }
}

customElements.define('y-content',EditContent);

export function Content(){
    return (<main>
                <y-content></y-content>
            </main>)
    }