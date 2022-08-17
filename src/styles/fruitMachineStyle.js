import styled, { css, keyframes } from "styled-components"


const wheelAnimate = ({wheelMovementStart, wheelMovementEnd}) => keyframes`
    0% {
        transform:translate(0,${wheelMovementStart}%);
    }
    92% {
        transform:translate(0,${wheelMovementEnd+4}%);
    }

    100% {
        transform:translate(0,${wheelMovementEnd}%);
    }
`

const winAnimate = () => keyframes`
    0% {
        transform:scale(1);
    }
    25% {
        transform:scale(1.2);
    }
    50% {
        transform:scale(1);
    }
    75% {
        transform:scale(1.2);
    }
    100% {
        transform:scale(1);
    }
`

export const Wrapper = styled.div` transform-origin:0% 0%; margin:0 0 0 0; user-select:none; transform:scale(1);position:relative;`

export const FruitMachineContainer = styled.div`
    box-sizing:border-box;
    margin:0 0;
    padding:0 15px;
    display:flex;
    justify-content:space-around;
    height:${props => props.wheelHeight}px;
    max-width:600px;
    min-width:600px;
    max-height:${props => props.wheelHeight}px;
    overflow:hidden;
    background:#eee;
    position:relative;
`
export const ReelsOverlay = styled.div`
    z-index:2;
    position:absolute;
    background:linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.15) 100%);
    left:0;
    top:0;
    right:0;
    bottom:0;
`
export const WinLine = styled.div`
    z-index:2;
    position:absolute;
    left:0;
    top:40%;
    right:0;
    bottom:40%;
    border-top:2px solid rgba(0,0,0,.05);
    border-bottom:2px solid rgba(0,0,0,.05);
`

const wheelAnimateWrapper = ({wheelMovementStart, wheelMovementEnd, wheelSpeed}) => css`
    animation: ${wheelAnimate({wheelMovementStart, wheelMovementEnd})} ${wheelSpeed}s ease-in-out forwards;
`

const winAnimateWrapper = () => css`
    animation: ${winAnimate()} .5s ease-in-out forwards;
`

export const WheelOuter = styled.div`
    background:white;
    width:${props=> props.wheelSize}px;
    ${props => props.wheelMove ? wheelAnimateWrapper(props) : `animation:none; transform:translate(0,${props.wheelMovementStart}%);`}
    position:relative;
    z-index:1;
`
export const FruitPartWrapper = styled.div`
    width:100%;
`
export const FruitPartImg = styled.img`
    max-width:100%; 
    display:block;
`
export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:center;
    background:#333;
    padding:20px;
    border-top:3px solid black;
    border-bottom:3px solid black;
`
export const SpinButton = styled.button`
    border:none;
    background: ${props=>props.isActive ? `rgba(255,198,23,1)` : `rgba(255,198,23,.3)`};
    color:${props=>props.isActive ? `white` : `rgba(255,255,255,.5)`};
    
    font-size:20px;
    padding:20px 35px;
    max-width:200px;
    font-weight:bold;
    font-size:30px;
    border-radius:8px;

`

export const Credits = styled.div`
    padding:10px;
    font-family:DMMono;
    text-align:center;
    background:black;
    font-weight:bold;
    font-size:35px;
    color:rgba(255,198,23,1);

`


export const CreditsText = styled.div`
    ${props=>props.winAnim ?  winAnimateWrapper() : `animation:none;`}
`



/*
.animate-wheel-one {
    
}
.animate-wheel-two {
    animation: wheel-move-two 1.5s linear forwards;
}
.animate-wheel-three {
    animation: wheel-move-three 2.3s linear forwards;
}
.animate-wheel-four {
    animation: wheel-move-four 2.8s linear forwards;
}
.animate-wheel-five {
    animation: wheel-move-five 3.6s linear forwards;
}
*/