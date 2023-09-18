import styles from "./app.module.css";
import { data } from "../../utils/data";


import React from "react";

import AppHeader from "../appheader/appheader";
import Main from "../main/main";



class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <div className={styles.burgerZone}>
                <Main />
               
      
      </div>
                
            </div>
        )
    }
}



  
 
export default App; 