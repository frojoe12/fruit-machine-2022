import React from "react"
import FruitPart from "./FruitPart"
import { WheelOuter } from "../styles/fruitMachineStyle"


const FruitWheel = ({fruitWheel, wheelMovementStart, wheelMovementEnd, wheelMove, wheelSpeed, wheelRatio, wheelSize, isHeld}) => {
    return (
        <WheelOuter 
            wheelMovementStart={wheelMovementStart}
            wheelMovementEnd={wheelMovementEnd}
            wheelMove={wheelMove}
            wheelSpeed={wheelSpeed}
            wheelRatio={wheelRatio}
            wheelSize={wheelSize}
        >
            {fruitWheel.map((wheelPart, index)=>(<FruitPart key={index} fruitId={wheelPart} />))}
        </WheelOuter>)
}

export default FruitWheel