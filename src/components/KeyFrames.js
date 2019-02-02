
import styled, { keyframes } from 'styled-components'

export const BlurIn = keyframes`
    0% {
        filter: blur(10px);
        opacity: 0.1;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
`
export const BorderFocus = keyframes`
    0% {
        border: 1px solid white;
        color: white;
        margin: 4px 8px;
    }
    100% {
        color: black;
        background-color: rgba(66, 212, 244, 1); 
        margin: 3px 7px;
        border: 2px solid white;
    }
`

export const ImgHover = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.07);
        z-index: 2;
    }
`