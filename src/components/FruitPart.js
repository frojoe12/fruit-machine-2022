import React from "react"
import cherry from "../images/cherry.png"
import lemon from "../images/lemon.png"
import grapes from "../images/grapes.png"
import strawberry from "../images/strawberry.png"
import melon from "../images/melon.png"
import orange from "../images/orange.png"
import { FruitPartWrapper, FruitPartImg } from "../styles/fruitMachineStyle"


const fruit = [cherry,lemon,orange,strawberry,grapes,melon,]

const FruitPart = ({fruitId=0}) => (<FruitPartWrapper><FruitPartImg src={fruit[fruitId]} /></FruitPartWrapper>)


export default FruitPart