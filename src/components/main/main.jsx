import React from 'react';
import mainStyles from './main.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
  

class Main extends React.Component {
  render() {
    return (
      <main className={mainStyles.main}>
        <section className={mainStyles.section}>
          <h1 className={mainStyles.title}>Соберите бургер</h1>
          <div style={{ display: 'flex' }}>
            <Tab />


            <Tab />

            <Tab />
          </div>
        </section>

      </main>
    );
  }
}

export default Main;