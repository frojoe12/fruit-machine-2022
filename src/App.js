import React, {useEffect, useRef} from "react"
import FruitMachine from "./components/FruitMachine"
import { testPost } from './api'

const style = { maxWidth:"600px", margin: "0 auto", backgroundColor:"#aaa" }
const App = () => {
  const effectRan = useRef(false)
  useEffect(()=>{
    if (effectRan.current === false) {
      testPost();
      return () => {
        effectRan.current = true
      }
    }
  },[])
  return (
    <div style={style}>
      <FruitMachine />
    </div>
  );
}

export default App;
