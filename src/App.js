import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    const id = useSelector((state) => state.id);
    const password = useSelector((state) => state.password);
    const increate = () => {
        dispatch({ type: "INCREMENT", payload: { num: 5 } });
        console.log();
    };
    const login = () => {
        dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
    };
    const decrease = () => {
        dispatch({ type: "DECREASE", payload: { num: 5 } });
    };
    return (
        <div>
            <h1>
                {id},{password}
            </h1>
            <h1>{count}</h1>
            <button onClick={increate}>증가</button>
            <button onClick={decrease}>감소</button>
            <button onClick={login}>Login</button>
            <Box />
        </div>
    );
}

export default App;
