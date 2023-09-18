import React from 'react';
import mainStyles from './main.module.css';
import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropType from  'prop-types';


class Main extends React.Component {
  render() {
   
   
    return (
     
      <main className={mainStyles.main}>
   
        <section className={mainStyles.section}>
          <h1 className={mainStyles.title}>Соберите бургер</h1>
          <div style={{ display: 'flex' }}>
          <Tab>
        One
      </Tab>
      <Tab>
        Two
      </Tab>
      <Tab>
        Three
      </Tab>
        </div>
    
        </section>

      </main>
    );
  }
}

export default Main;