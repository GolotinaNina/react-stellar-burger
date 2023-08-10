import styles from "./app.module.css";
import { data } from "../../utils/data";


import React from "react";

import Header from "../header/header";
import Main from "../main/main";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App; 