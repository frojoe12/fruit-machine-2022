import FruitMachine from "./components/FruitMachine"
import FontStyles from "./fonts/fontStyles.js"

const style = { maxWidth:"600px", margin: "0 auto", backgroundColor:"#aaa" }
const App = () => {
  return (
    <div style={style}>
      <FontStyles />
      <h1>test</h1>
      <FruitMachine />
    </div>
  );
}

export default App;
