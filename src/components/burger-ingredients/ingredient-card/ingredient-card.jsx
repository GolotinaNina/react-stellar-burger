import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';
import  ingredientPropType from '../../../utils/prop-types';
import Modal from '../../modal/Modal';
import IngredientDetails from '../../ingredient-details/IngredientDetails';

function IngredientCard(item) {
  const [count, setCount] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  }

  const handleClick = () => {
    setCount((prev) => {
      return (prev += 1);
    });
  };

  return (
    <div className={styles.card} onClick={handleClick} >
      {count > 0 && <Counter count={count} size="default" />}
      <img className={styles.image} src={item.image} alt={item.name} onClick={handleModalOpen} />

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <IngredientDetails  item={item}/>
        </Modal>
      )}
      <div className={styles.price}>
        <span className='text text_type_digits-default pb-1'>{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles['name-card']} text text_type_main-default`}>{item.name}</div>
    </div>
  );
}

IngredientCard.propTypes = {
  item: ingredientPropType.isRequired,
};
export default IngredientCard;
