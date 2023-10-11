import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientCards from './ingredient-cards/ingredient-cards';
import { data } from '../../utils/data';


function BurgerIngredients() {

    const [currentTab, setCurrentTab] = useState("bun");

    const onTabClick = (tab) => {
        setCurrentTab(tab);
        const ref = document.getElementById(tab);
        if (ref) {
        ref.scrollIntoView({ behavior: "smooth" });
        }
    };

    let typeReady = '';

    return (
        <section className={styles.section}>
            <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
            <div className={`${styles['burger-menu']} pb-10`}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={() => onTabClick("bun")}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => onTabClick("sauce")}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={() => onTabClick("main")}>
                    Начинки
                </Tab>
            </div>
            <div className={`${styles['burger-card']} custom-scroll`}>
                {["bun", "sauce", "main"].map((tab) => (
                <div key={tab} id={tab}>
                    <h2 className="text text_type_main-medium mt-10 mb-6">
                    {tab === "bun" ? "Булки" : tab === "sauce" ? "Соусы" : "Начинка"}
                    </h2>
                    <ul className={`${styles["card-list"]} pl-4 pr-4`}>
                    {data.map((item) => {
                        if (item.type === tab && typeReady != item.type) {
                            typeReady = item.type
                            return (
                                <IngredientCards
                                cardsArr={data.filter((el)=> {
                                    if(el.type === item.type){
                                        return el.type
                                    }
                                })} />
                            );
                        }
                        return null;
                    })}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    );
};


export default BurgerIngredients;