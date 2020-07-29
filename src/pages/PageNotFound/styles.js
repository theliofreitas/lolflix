import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 72px;
    color: #f3ba1a;
    margin: 0;
    text-align:center;
`;

export const AnimatedSubtitle = styled.h1`
    text-align:center;
    font-size: 1.3em;
    color: #f3ba1a;
    overflow: hidden;
    white-space: nowrap;
    width: 8em;
    -webkit-animation: type 2s steps(25), blink 1s linear infinite;
    margin: 0 auto;
    padding: 0;
    border-right: .1em solid;

    @keyframes type {
        from {
            width: 0
        }
    }

    @keyframes blink {
        0%, 100% {
            border-color: transparent
        }
        50% {
            border-color: white
        }
    }
`;