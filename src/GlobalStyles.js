import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --background: white;
        --text: #2F2F2F;
        --success: #2ecc71;
        --error: #e74c3c;
        --primarybutton: #014254;
        --secondarybutton: #1ABCBD;
        --buttontext: white;
        --noun: 43, 173, 134;
        --adjective: 255, 51, 210;
        --verb: 255, 222, 51;
        --masculine: 148,203,255;
        --feminine: 255,148,148;
        --neuter: 254,255,183;
        --singular: 254,255,183;
        --plural: 254,255,183;
        --person: 254,255,183;
    }

    html {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background: var(--background);
        font-family: 'Comfortaa', cursive;
        color: var(--text);
        margin: 0;
    }
`
