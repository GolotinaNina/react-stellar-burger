import React from 'react';
import mainStyles from './main.module.css';
import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

class Main extends React.Component {
  render() {
    const [current, setCurrent] = React.useState('one');
    return (
      <main className={mainStyles.main}>
        <section className={mainStyles.section}>
          <h1 className={mainStyles.title}>Соберите бургер</h1>
          
          <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              One
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Two
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Three
            </Tab>
          </div>

        </section>

      </main>
    );
  }
}

export default Main;