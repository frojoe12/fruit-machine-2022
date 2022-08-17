import { createGlobalStyle } from "styled-components"

import MonoFont from './SourceCodePro-Medium.ttf'

const FontStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono&display=swap');
    body {
        font-family: 'DM Mono'
    }
    h1 {
        font-family:'DM Mono';
        font-size:100px;
    }
`

export default FontStyles