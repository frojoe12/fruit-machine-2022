import FruitMachine from "./components/FruitMachine"

const style = { maxWidth:"600px", margin: "0 auto", backgroundColor:"#aaa" }
const App = () => {
  return (
    <div style={style}>
      <FruitMachine />
    </div>
  );
}

export default App;
