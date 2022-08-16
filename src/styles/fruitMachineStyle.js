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

export const Wrapper = styled.div` transform-origin:0% 0%;margin:0 0 50px 0; user-select:none; transform:scale(1);position:relative;`

export const FruitMachineContainer = styled.div`
    box-sizing:border-box;
    margin:15px 0;
    padding:0 15px;
    display:flex;
    justify-content:space-around;
    height:330px;
    max-width:600px;
    min-width:600px;
    max-height:330px;
    overflow:hidden;
    background:#eee;
    postition:absolute;
`

const wheelAnimateWrapper = ({wheelMovementStart, wheelMovementEnd, wheelSpeed}) => css`
    animation: ${wheelAnimate({wheelMovementStart, wheelMovementEnd})} ${wheelSpeed}s ease-in-out forwards;
`

const winAnimateWrapper = () => css`
    animation: ${winAnimate()} .5s ease-in-out forwards;
`

export const WheelOuter = styled.div`
    background:white;
    width:110px;
    ${props => props.wheelMove ? wheelAnimateWrapper(props) : `animation:none; transform:translate(0,${props.wheelMovementStart}%);`}
    
`
export const FruitPartWrapper = styled.div`
    width:100%;
`
export const FruitPartImg = styled.img`
    max-width:100%; 
    display:block;
`

export const SpinButton = styled.button`
    border:none;
    background: ${props=>props.isActive ? `#5919d6` : `#ddd`};
    color:white;
    font-size:20px;
    padding:10px 35px;
    margin:20px 20px 5px 0;
    font-weight:bold;
    font-size:30px;
    border-radius:5px;
    max-width:600px;
    min-width:600px;
`

export const Credits = styled.div`
    padding:10px;
    max-width:600px;
    min-width:600px;
    text-align:center;
    background:white;
    border:1px solid #5919d6;
    margin:5px 20px 5px 0;
    font-size:30px;
    color:#5919d6;

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