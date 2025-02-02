import PropTypes from "prop-types";

export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
});

export const ingredientPropType = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export const ingredientDetailPropType = {
  data: ingredientPropTypes.isRequired,
};

export const cardsPropType = {
  item: ingredientPropTypes.isRequired,
  onClick: PropTypes.func.isRequired
};

export const checklNumber = PropTypes.number.isRequired;
export const checkString = PropTypes.string.isRequired;
export const optionalObject = PropTypes.object.isRequired;
export const optionalString = PropTypes.string.isRequired;

export const modalPropType = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
