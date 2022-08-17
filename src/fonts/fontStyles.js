import { createGlobalStyle } from "styled-components"

import DMMono from "./DMMono-Medium.ttf"

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'DMMono';
        src: url(${DMMono}) format ('truetype');
        font-weight:500;
        font-style:normal;
        font-display:auto;
    }
    h1 {
        font-family:'DMMono';
    }
`

export default FontStyles