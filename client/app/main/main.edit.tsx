import React from 'react';
import ReactDom from 'react-dom';
import { App } from '../ui/index';

function main(){
    const divElememnt = document.createElement('div');

    divElememnt.id = 'root';

    document.body.appendChild(divElememnt);

    ReactDom.render(<App />,divElememnt);
}

main();
