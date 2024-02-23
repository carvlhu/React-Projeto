import { useState } from "react";
import "./contador.css";

export function Contador() {
    //usando hooks
    const [contador, setContador] = useState(0);

    const clickIncrement = () => {
        setContador(contador + 1);
    }

    const clickDecrement = () => {
        setContador(contador - 1);
    }

    const clickReset = () => {
        setContador(contador - contador);
    }

    return (
        
        <div className="container-buttons">

            <section className="buttons">
                <h1>Contador:</h1>
                <button onClick={clickIncrement} className="button-click">Increment</button>
                <button onClick={clickDecrement} className="button-click">Decrement</button>
                <button onClick={clickReset} className="button-click">Reset</button>
            </section>

            <section className="result">
                <strong>{contador}</strong>
            </section>
        </div>

    )
}