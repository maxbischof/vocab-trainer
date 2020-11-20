import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --background: white;
        --text: #2F2F2F;
        
    }

    html {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background: var(--background);
        font-family: 'Montserrat', sans-serif;
        color: var(--text);
        margin: 0;
    }
`
