import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Se ejecutó useEffect");
  });

  useEffect(() => {
    console.log(`El contador cambio a ${contador}`);
  }, [contador]);

  useEffect(() => {
    console.log(`El contador2 cambio a ${contador2}`);
  }, [contador2]);

  useEffect(() => {
    console.log(`Se ejecuta al principio`);
  }, []);

  useEffect(() => {
    console.log(`Users o contador cambio`);
  }, [contador, users]);

  const IncrementValue = () => {
    setContador(contador + 1);
  };

  const IncrementValue2 = () => {
    setContador2(contador2 + 1);
  };

  return (
    <div className="App">
      <button onClick={() => IncrementValue()}>Increment contador 1</button>
      <p>{contador}</p>
      <button onClick={() => IncrementValue2()}>Increment contador 2</button>
      <p>{contador2}</p>
    </div>
  );
}

export default App;
