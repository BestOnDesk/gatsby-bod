import { createGlobalStyle } from "styled-components";

type Theme = { [property: string]: any };

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
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
        font-size: ${(props) => props.theme.fonts.size.b3};
        hyphens: none;
        color: ${(props) => props.theme.colors.primary};
    }

    kbd,
    ins {
        color: #ffffff;
    }

    pre {
        font-family: "Courier 10 Pitch", Courier, monospace;
        font-size: ${(props) => props.theme.fonts.size.b3};
        margin: 10px 0;
        overflow: auto;
        padding: 20px;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
        color: ${(props) => props.theme.colors.body};
        background: ${(props) => props.theme.colors.lighter};
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

    ol {
        ul {
            margin-bottom: 0;
        }
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
        appearance: textfield;
        padding-right: 2px;
        width: 270px;
    }

    input[type="search"]::-webkit-search-decoration {
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


    blockquote,
    q {
        hyphens: none;
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    blockquote {
        font-size: ${(props) => props.theme.fonts.size.b1};
        font-style: italic;
        font-weight: ${(props) => props.theme.fonts.weight.pLight};
        margin: 24px 40px;
    }

    blockquote blockquote {
        margin-right: 0;
    }

    blockquote cite,
    blockquote small {
        font-size: ${(props) => props.theme.fonts.size.b3};
        font-weight: normal;
    }

    blockquote strong,
    blockquote b {
        font-weight: 700;
    }

    html {
        overflow: hidden;
        overflow-y: auto;
        margin: 0;
        padding: 0;
        font-size: 10px;
    }

    body {
        overflow: hidden;
        font-size: ${(props) => props.theme.fonts.size.b1};
        line-height: ${(props) => props.theme.fonts.height.b1};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${(props) => props.theme.fonts.family.primary};
        color: ${(props) => props.theme.colors.body};
        font-weight: ${(props) => props.theme.fonts.weight.pRegular};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    address,
    p,
    pre,
    blockquote,
    menu,
    ol,
    ul,
    table,
    hr {
        margin: 0;
        margin-bottom: 20px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        word-break: break-word;
        font-family: ${(props) => props.theme.fonts.family.secondary};
        line-height: 1.4074;
        color: ${(props) => props.theme.colors.heading};
    }

    h1 {
        font-size: ${(props) => props.theme.fonts.size.h1};
        line-height: 1.19;
    }

    h2 {
        font-size: ${(props) => props.theme.fonts.size.h2};
        line-height: 1.23;
    }

    h3 {
        font-size: ${(props) => props.theme.fonts.size.h3};
        line-height: 1.14;
    }

    h4 {
        font-size: ${(props) => props.theme.fonts.size.h4};
        line-height: 1.25;
    }

    h5 {
        font-size: ${(props) => props.theme.fonts.size.h5};
        line-height: 1.24;
    }

    h6 {
        font-size: ${(props) => props.theme.fonts.size.h6};
        line-height: 1.25;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        a {
            color: inherit;
        }
    }


    @media ${(props) => props.theme.layouts.md} {
        h1 {
            font-size: 38px;
        }

        h2 {
            font-size: 32px;
        }

        h3 {
            font-size: 28px;
        }

        h4 {
            font-size: 24px;
        }

        h5 {
            font-size: 18px;
        }
    }


    @media ${(props) => props.theme.layouts.sm} {
        h1 {
            font-size: 34px;
        }

        h2 {
            font-size: 28px;
        }

        h3 {
            font-size: 24px;
        }

        h4 {
            font-size: 20px;
        }

        h5 {
            font-size: 16px;
        }
    }


    h1,
    h2,
    h3 {
        font-weight: ${(props) => props.theme.fonts.weight.bold};
    }

    h4,
    h5 {
        font-weight: ${(props) => props.theme.fonts.weight.bold};
    }

    h6 {
        font-weight: ${(props) => props.theme.fonts.weight.medium};
    }


    p {
        font-size: ${(props) => props.theme.fonts.size.b1};
        line-height: ${(props) => props.theme.fonts.height.b1};
        font-weight: ${(props) => props.theme.fonts.weight.regular};
        color: ${(props) => props.theme.colors.body};
        margin: 0 0 40px;
        @media ${(props) => props.theme.layouts.sm} {
            margin: 0 0 20px;
            font-size: ${(props) => props.theme.fonts.size.b2}
            line-height: ${(props) => props.theme.fonts.height.b2};
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0 0 20px;
        width: 100%;
    }

    table a,
    table a:link,
    table a:visited {
        text-decoration: none;
    }

    cite {
        color: ${(props) => props.theme.colors.heading};
    }

    var {
        font-family: "Courier 10 Pitch", Courier, monospace;
    }

    
    ul,
    ol {
        padding-left: 18px;
    }

    ul {
        list-style: square;
        margin-bottom: 30px;
        padding-left: 20px;

        li {
            font-size: ${(props) => props.theme.fonts.size.b1};
            line-height: ${(props) => props.theme.fonts.height.b1};
            margin-top: 10px;
            margin-bottom: 10px;
            color: ${(props) => props.theme.colors.body};

            a {
                text-decoration: none;
                color: ${(props) => props.theme.colors.gray};
                ${(props) => props.theme.extends.transition}

                &:hover {
                    color: ${(props) => props.theme.colors.primary};
                }
            }
        }

        ul {
            margin-bottom: 0;
        }
    }

    ol {
        margin-bottom: 30px;

        li {
            font-size: ${(props) => props.theme.fonts.size.b1};
            line-height: ${(props) => props.theme.fonts.height.b1};
            color: ${(props) => props.theme.colors.body};
            margin-top: 10px;
            margin-bottom: 10px;

            a {
                color: ${(props) => props.theme.colors.heading}
                ${(props) => props.theme.extends.transition}
                text-decoration: none;

                &:hover {
                    color: ${(props) => props.theme.colors.primary};
                }
            }
        }

        ul {
            padding-left: 30px;
        }
    }
`;

export { GlobalStyle };
