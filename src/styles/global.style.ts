import { createGlobalStyle } from "styled-components";

type Theme = { [property: string]: any };

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    nav,
    section,
    summary {
        display: block;
    }

    audio,
    canvas,
    video {
        display: inline-block;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    [hidden] {
        display: none;
    }

    a {
        color: ${(props) => props.theme.colors.heading};
        text-decoration: none;
        outline: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        outline: none;
        color: ${(props) => props.theme.colors.primary};
    }

    a:focus {
        outline: none;
    }

    address {
        margin: 0 0 24px;
    }

    abbr[title] {
        border-bottom: 1px dotted;
    }

    b,
    strong {
        font-weight: bold;
    }

    mark {
        background: ${(props) => props.theme.colors.primary};
        color: #ffffff;
    }

    code,
    kbd,
    pre,
    samp {
        font-size: ${(props) => props.theme.font.size.b3};
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        color: ${(props) => props.theme.color.primary};

    }

    kbd,
    ins {
        color: #ffffff;
    }

    pre {
        font-family: "Courier 10 Pitch", Courier, monospace;
        font-size: ${(props) => props.theme.font.size.b3};
        margin: 10px 0;
        overflow: auto;
        padding: 20px;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
        color: ${(props) => props.theme.color.body};
        background: ${(props) => props.theme.color.lighter};
    }

    small {
        font-size: smaller;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -0.5em;
    }

    sub {
        bottom: -0.25em;
    }

    dl {
        margin-top: 0;
        margin-bottom: 10px;
    }

    dd {
        margin: 0 15px 15px;
    }

    dt {
        font-weight: bold;
        color: ${(props) => props.theme.colors.heading};
    }

    menu,
    ol,
    ul {
        margin: 16px 0;
        padding: 0 0 0 40px;
    }

    nav ul,
    nav ol {
        list-style: none;
        list-style-image: none;
    }

    li > ul,
    li > ol {
        margin: 0;
    }

    ol ul {
        margin-bottom: 0;
    }

    img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    figure {
        margin: 0;
    }

    form {
        margin: 0;
    }

    fieldset {
        border: 1px solid ${(props) => props.theme.colors.border};
        margin: 0 2px;
        min-width: inherit;
        padding: 0.35em 0.625em 0.75em;
    }

    legend {
        border: 0;
        padding: 0;
        white-space: normal;
    }

    button,
    input,
    select,
    textarea {
        font-size: 100%;
        margin: 0;
        max-width: 100%;
        vertical-align: baseline;
    }

    button,
    input {
        line-height: normal;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
    }

    button[disabled],
    input[disabled] {
        cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
        padding: 0;
    }

    input[type="search"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        padding-right: 2px;
        width: 270px;
    }

    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    textarea {
        overflow: auto;
        vertical-align: top;
    }

    caption,
    th,
    td {
        font-weight: normal;
    }

    th {
        font-weight: 500;
        text-transform: uppercase;
    }

    td,
    .wp-block-calendar tfoot td {
        border: 1px solid ${(props) => props.theme.colors.border};
        padding: 7px 10px;
    }

    del {
        color: #333;
    }

    ins {
        background: rgba(255, 47, 47, 0.4);
        text-decoration: none;
    }

    hr {
        background-size: 4px 4px;
        border: 0;
        height: 1px;
        margin: 0 0 24px;
    }

    table a,
    table a:link,
    table a:visited {
        text-decoration: underline;
    }

    dt {
        font-weight: bold;
        margin-bottom: 10px;
    }

    dd {
        margin: 0 15px 15px;
    }

    caption {
        caption-side: top;
    }

    kbd {
        background: ${(props) => props.theme.colors.heading};
    }

    dfn,
    cite,
    em {
        font-style: italic;
    }
`;

export { GlobalStyle };
