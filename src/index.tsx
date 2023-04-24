import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter/Counter";
import reportWebVitals from "./reportWebVitals";
import {CounterWithSettings} from "./components/CounterWithSettings/CounterWithSettings";
import {CounterWithRedux} from "./components/CounterWithRedux/CounterWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <Counter/>
        <hr/>
        <CounterWithSettings/>
        <hr/>
        <Provider store={store}>
            <CounterWithRedux/>
        </Provider>
    </>
);

reportWebVitals();
