import React, {useState} from "react"

import FruitWheel from "./FruitWheel"
import {ButtonsContainer, Credits, CreditsText, FruitMachineContainer, SpinButton, Wrapper, ReelsOverlay, WinLine} from "../styles/fruitMachineStyle.js"


const fruitNames = ["cherry","lemon","orange","strawberry","grapes","melon",]

const FruitMachine = () => {

    const [credits, setCredits] = useState(20)
    const [spinWheels, setSpinWheels] = useState(false)
    const [wheelsStart, setWheelsStart] = useState([50,50,50,50,50])
    const [wheelsEnd, setWheelsEnd] = useState([50,50,50,50,50])
    const [winAnim, setWinAnim] = useState(false)

    const overallSizeSelector = 0
    const overallSize = [
        {ratio:20,height:500,size:100,offset:2},
        {ratio:33.3333333,height:330,size:110,offset:1}]
    const [wheelRatio, setWheelRatio] = useState(overallSize[overallSizeSelector].ratio)
    const [wheelHeight, setWheelHeight] = useState(overallSize[overallSizeSelector].height)
    const [wheelSize, setWheelSize] = useState(overallSize[overallSizeSelector].size)
    const [winPositionOffset, setWinPositionOffset] = useState(overallSize[overallSizeSelector].offset)


    const getWheelPosition = (position) => {
        return (-position * wheelRatio);
    }
    const randomNumber = (num1,num2) => {
        return (num1 + (Math.floor(Math.random() * num2)))
    } 

    const wheelCombinations = (reels) => {
        const mainReel = reels[0]
        let wheelMatch=0
        let winnings=0
        if (
            (reels[1] === mainReel)
            && (reels[2] === mainReel)
            && (reels[3] === mainReel)
            && (reels[4] === mainReel)
        ) {
            wheelMatch=5
        } else if (
            (reels[1] === mainReel)
            && (reels[2] === mainReel)
            && (reels[3] === mainReel)
        ) {
            wheelMatch=4
        } else if (
            (reels[1] === mainReel)
            && (reels[2] === mainReel)
        ) {
            wheelMatch=3
        } else if (
            (reels[1] === mainReel)
        ) {
            wheelMatch=2
        }
        if ((mainReel===0 || mainReel===1) && wheelMatch>0) {
            winnings=1*wheelMatch
            setWinAnim(true)
        }
        else if ((mainReel===2 || mainReel===3) && wheelMatch>0) {
            winnings=2*wheelMatch
            setWinAnim(true)
        }
        else if ((mainReel===4) && wheelMatch>0) {
            winnings=4*wheelMatch
            setWinAnim(true)
        }
        else if ((mainReel===5) && wheelMatch>0) {
            winnings=5*wheelMatch
            setWinAnim(true)
        }
        console.log(mainReel)
        console.log(wheelMatch)
        console.log(winnings)
        return winnings
    }

    const checkForWin = (reelNumbers, startCredits) => {
        const reels = reelNumbers.map((reelNumber,index) => (
            fruitWheels[index].fruit[reelNumber+winPositionOffset]  
        ))
        // console.log(reels)
        setCredits(startCredits+wheelCombinations(reels))
    }

    const spinWheelsButton = () => {
        setWinAnim(false)
        if (!spinWheels) {
            const randArrayStart=[
                randomNumber(0,20),
                randomNumber(0,20),
                randomNumber(0,20),
                randomNumber(0,20),
                randomNumber(0,20)
            ]
            const randArrayEnd=[
                randArrayStart[0]+60,
                randArrayStart[1]+60,
                randArrayStart[2]+60,
                randArrayStart[3]+60,
                randArrayStart[4]+60,
            ]
            setWheelsEnd(randArrayStart)
            setSpinWheels(true)
            const newCredits=credits-1
            setCredits(()=>(newCredits))
            setTimeout(()=>{checkForWin(randArrayEnd, newCredits)
            },3500)
            setTimeout(()=>{
                setWheelsStart(randArrayEnd)
                setSpinWheels(false)
            },4000)
        }
    }

    const fruitWheels = [
        {
            wheelNo:0,
            id:"wheelOne",
            speed:1.6,
            fruit: [
                0,1,2,3,4,5,4,3,2,1,2,3,1,4,5,1,0,1,2,3,
                0,1,2,3,4,5,4,3,2,1,2,3,1,4,5,1,0,1,2,3,
                0,1,2,3,4,5,4,3,2,1,2,3,1,4,5,1,0,1,2,3,
                0,1,2,3,4,5,4,3,2,1,2,3,1,4,5,1,0,1,2,3,
                0,1,2,3,4,5,4,3,2,1,2,3,1,4,5,1,0,1,2,3,
            ]
        },
        {
            wheelNo:1,
            id:"wheelTwo",
            speed:2.1,
            fruit: [
                1,5,3,4,2,5,2,1,5,0,1,2,5,3,5,1,0,1,3,5,
                1,5,3,4,2,5,2,1,5,0,1,2,5,3,5,1,0,1,3,5,     
                1,5,3,4,2,5,2,1,5,0,1,2,5,3,5,1,0,1,3,5,
                1,5,3,4,2,5,2,1,5,0,1,2,5,3,5,1,0,1,3,5,
                1,5,3,4,2,5,2,1,5,0,1,2,5,3,5,1,0,1,3,5,            
          
            ]
        },
        {
            wheelNo:2,
            id:"wheelThree",
            speed:2.7,
            fruit: [
                2,4,3,5,2,0,1,0,2,3,1,5,4,2,3,2,4,1,5,0,
                2,4,3,5,2,0,1,0,2,3,1,5,4,2,3,2,4,1,5,0,
                2,4,3,5,2,0,1,0,2,3,1,5,4,2,3,2,4,1,5,0,
                2,4,3,5,2,0,1,0,2,3,1,5,4,2,3,2,4,1,5,0,
                2,4,3,5,2,0,1,0,2,3,1,5,4,2,3,2,4,1,5,0,
            ]
        },
        {
            wheelNo:3,
            id:"wheelFour",
            speed:3,
            fruit: [
                3,2,0,5,2,3,1,4,1,3,2,5,4,0,3,2,0,2,1,3,
                3,2,0,5,2,3,1,4,1,3,2,5,4,0,3,2,0,2,1,3,
                3,2,0,5,2,3,1,4,1,3,2,5,4,0,3,2,0,2,1,3,
                3,2,0,5,2,3,1,4,1,3,2,5,4,0,3,2,0,2,1,3,
                3,2,0,5,2,3,1,4,1,3,2,5,4,0,3,2,0,2,1,3,
            ]
        },
        {
            wheelNo:4,
            id:"wheelFive",
            speed:3.5,
            fruit: [
                4,5,0,2,1,2,4,3,5,4,2,1,3,0,2,0,5,4,2,3,
                4,5,0,2,1,2,4,3,5,4,2,1,3,0,2,0,5,4,2,3,
                4,5,0,2,1,2,4,3,5,4,2,1,3,0,2,0,5,4,2,3,
                4,5,0,2,1,2,4,3,5,4,2,1,3,0,2,0,5,4,2,3,
                4,5,0,2,1,2,4,3,5,4,2,1,3,0,2,0,5,4,2,3,
            ]
        }
    ]

    return (
        <Wrapper>
            <FruitMachineContainer wheelHeight={wheelHeight}>
                {
                    fruitWheels.map(wheel => (
                        <FruitWheel 
                        key={wheel.id}
                        wheelMovementStart={getWheelPosition(wheelsStart[wheel.wheelNo])}
                        wheelMovementEnd={getWheelPosition(wheelsEnd[wheel.wheelNo])}
                        wheelMove={spinWheels}
                        wheelSpeed={wheel.speed}
                        fruitWheel={wheel.fruit} 
                        wheelRatio={wheelRatio}
                        wheelSize={wheelSize}
                        />
                    ))
                }
                <ReelsOverlay />
                <WinLine />
            </FruitMachineContainer>
            <ButtonsContainer>
            <SpinButton
                onClick={spinWheelsButton}
                isActive={!spinWheels}
            >
                SPIN
            </SpinButton>
            </ButtonsContainer>
            <Credits><CreditsText winAnim={winAnim}>{credits} credits</CreditsText></Credits>
        </Wrapper>
    )
}

export default FruitMachine