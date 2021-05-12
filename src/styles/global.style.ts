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
        //color: ${(props) => props.theme.colors.primary};
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

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
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
        height: 100%;
    }

    body {
        overflow: hidden;
        font-size: ${(props) => props.theme.fonts.size.b1};
        line-height: ${(props) => props.theme.fonts.height.b1};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${(props) => props.theme.fonts.family.primary};
        font: ${(props) => props.theme.fonts.family.primary};
        color: ${(props) => props.theme.colors.body};
        font-weight: ${(props) => props.theme.fonts.weight.pRegular};
        margin: 0;
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
                color: ${(props) => props.theme.colors.heading};
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

    input,
    button,
    select,
    textarea {
        background: transparent;
        border: 1px solid ${(props) => props.theme.colors.border};
        transition: all 0.4s ease-out 0s;
        color: ${(props) => props.theme.colors.body};
        width: 100%;
        font-family: ${(props) => props.theme.fonts.family.primary};

        &:focus,
        &:active {
            outline: none;
            border-color: ${(props) => props.theme.colors.primary};
        }
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }


    input {
        height: 40px;
        padding: 0 15px;
    }

    select {
        transition: 0.3s;
        height: 40px;
        padding: 0 20px;
        outline: none;
        color: ${(props) => props.theme.colors.body};
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border: 1px solid ${(props) => props.theme.colors.border};
        border-radius: 4px;
        background: url(../media/images/icons/arrow-icon.png) 95% center no-repeat transparent;
        padding-right: 32px;
    }


    input[type="text"],
    input[type="password"],
    input[type="email"],
    input[type="number"],
    input[type="tel"],
    textarea {
        font-size: ${(props) => props.theme.fonts.size.b2};
        font-weight: 400;
        height: auto;
        line-height: 28px;
        background: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        padding: 0 15px;
        outline: none;
        border: ${(props) => props.theme.borders.width} solid ${(props) =>
  props.theme.colors.border};
        border-radius: ${(props) => props.theme.borders.radius};
        /* -- Placeholder -- */

        &::placeholder {
            color: ${(props) => props.theme.colors.body};
            /* Firefox */
            opacity: 1;
        }

        &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: ${(props) => props.theme.colors.body};
        }

        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: ${(props) => props.theme.colors.body};
        }

        &.p-holder__active {
            border-color: ${(props) => props.theme.colors.primary};

            /* -- Placeholder -- */

            &::placeholder {
                color: ${(props) => props.theme.colors.primary};
                /* Firefox */
                opacity: 1;
            }

            &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: ${(props) => props.theme.colors.primary};
            }

            &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: ${(props) => props.theme.colors.primary};
            }
        }

        &.p-holder__error {
            border-color: #f4282d;

            /* -- Placeholder -- */

            &::placeholder {
                color: #f4282d;
                /* Firefox */
                opacity: 1;
            }

            &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: #f4282d;
            }

            &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: #f4282d;
            }

            &:focus {
                border-color: #f4282d;
            }
        }

        &:focus {
            border-color: ${(props) => props.theme.colors.primary};
        }
    }

    .input-active {
        border-color: ${(props) => props.theme.colors.primary};

        /* -- Placeholder -- */

        &::placeholder {
            color: ${(props) => props.theme.colors.primary};
            /* Firefox */
            opacity: 1;
        }

        &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: ${(props) => props.theme.colors.primary};
        }

        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: ${(props) => props.theme.colors.primary};
        }

        input {
            border-color: ${(props) => props.theme.colors.primary};

            /* -- Placeholder -- */

            &::placeholder {
                color: ${(props) => props.theme.colors.primary};
                /* Firefox */
                opacity: 1;
            }

            &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: ${(props) => props.theme.colors.primary};
            }

            &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: ${(props) => props.theme.colors.primary};
            }
        }
    }

    .input-error {
        border-color: #f4282d;

        /* -- Placeholder -- */

        &::placeholder {
            color: #f4282d;
            /* Firefox */
            opacity: 1;
        }

        &:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #f4282d;
        }

        &::-ms-input-placeholder {
            /* Microsoft Edge */
            color: #f4282d;
        }

        &:focus {
            border-color: #f4282d;
        }
    }

    &:focus {
        border-color: ${(props) => props.theme.colors.primary};

        input {
            border-color: #f4282d;

            /* -- Placeholder -- */

            &::placeholder {
                color: #f4282d;
                /* Firefox */
                opacity: 1;
            }

            &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: #f4282d;
            }

            &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: #f4282d;
            }

            &:focus {
                border-color: #f4282d;
            }
        }

        &:focus {
            border-color: ${(props) => props.theme.colors.primary};
        }
    }

    // Custom Checkbox and radio button 
    input[type="checkbox"],
    input[type="radio"] {
        opacity: 0;
        position: absolute;

        ~ label {
            position: relative;
            font-size: 12px;
            line-height: 17px;
            color: ${(props) => props.theme.colors.gray};
            font-weight: 400;
            padding-left: 20px;
            cursor: pointer;

            &::before {
                content: " ";
                position: absolute;
                top: 2px;
                left: 0;
                width: 14px;
                height: 14px;
                background-color: #fff;
                border: ${(props) => props.theme.borders.width} solid ${(
  props
) => props.theme.colors.lightest};
                border-radius: 2px;
                transition: all .3s;
            }

            &::after {
                content: " ";
                position: absolute;
                top: 5px;
                left: 2px;
                width: 10px;
                height: 5px;
                background-color: transparent;
                border-bottom: ${(props) =>
                  props.theme.borders.width} solid #fff;
                border-left: ${(props) => props.theme.borders.width} solid #fff;
                border-radius: 2px;
                transform: rotate(-45deg);
                opacity: 0;
                transition: all .3s;
            }
        }

        &:checked {
            ~ label {
                &::before {
                    background-color: ${(props) => props.theme.colors.primary};
                    border: ${(props) => props.theme.borders.width} solid ${(
  props
) => props.theme.colors.primary};
                }

                &::after {
                    opacity: 1;
                }
            }
        }
    }

    input[type="radio"] {
        ~ label {
            &::before {
                border-radius: 50%;
            }

            &::after {
                width: 8px;
                height: 8px;
                left: 3px;
                background: #fff;
                border-radius: 50%;
            }
        }
    }


    .form-group {
        margin-bottom: 20px;

        label {
            margin-bottom: 6px;
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
        }

        input {
            border: 0 none;
            border-radius: 4px;
            height: 50px;
            font-size: ${(props) => props.theme.fonts.size.b2};
            ${(props) => props.theme.extends.transition}
            padding: 0 20px;
            background-color: ${(props) => props.theme.colors.lightest};
            border: 1px solid transparent;

            ${(props) => props.theme.extends.transition}
            &:focus {
                border-color: ${(props) => props.theme.colors.primary};
                box-shadow: none;
            }
        }

        textarea {
            min-height: 160px;
            border: 0 none;
            border-radius: 4px;
            resize: none;
            padding: 15px;
            font-size: ${(props) => props.theme.fonts.size.b2};
            ${(props) => props.theme.extends.transition}
            background-color: ${(props) => props.theme.colors.lightest};
            border: 1px solid transparent;

            &:focus {
                border-color: ${(props) => props.theme.colors.primary};
            }
        }
    }

    input[type="submit"] {
        width: auto;
        padding: 0 30px;
        border-radius: 500px;
        display: inline-block;
        font-weight: 500;
        transition: 0.3s;
        height: 60px;
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        font-weight: ${(props) => props.theme.fonts.weight.pMedium};
        font-size: ${(props) => props.theme.fonts.size.b2};
        line-height: ${(props) => props.theme.fonts.height.b3};
        height: 50px;
        border: 2px solid ${(props) => props.theme.colors.primary};

        ${(props) => props.theme.extends.transition}
        &:hover {
            background: transparent;
            color: ${(props) => props.theme.colors.primary};
            transform: translateY(-5px);
        }

    }

    .slick-initialized .slick-slide {
        margin-bottom: 0;
    }

    .slick-initialized .slick-slide {
        outline: none !important;
    }

    .slick-arrow {
        &::before {
            display: none !important;
        }
    }

    .slick-layout-wrapper {
        margin: 0 -15px;
        
        .slick-slide {
            padding: 0 15px;
            height: auto;
            
            > div {
                height: 100%;
            }
        }
        
        .slick-track {
            display:flex;
        }
    }
`;

export { GlobalStyle };
