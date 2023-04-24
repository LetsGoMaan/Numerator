import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CounterWithCombinedSettings from "./components/CounterWithCombinedSettings/CounterWithCombinedSettings";
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
        <div className={"container"}>
                <h3 className="title"> Counter with settings</h3>
                <CounterWithCombinedSettings/>
                <h3 className="title"> Counter with separated settings</h3>
                <CounterWithSettings/>
                <h3 className="title"> Counter on Redux</h3>
                <Provider store={store}>
                    <CounterWithRedux/>
                </Provider>
        </div>

    </>
);

reportWebVitals();
