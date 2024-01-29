import React , { useRef, RefObject } from "react";
import styles from "./BurgerConstTotal.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { removeCurrentIngredient } from "../../../services/actions/currentIngredientsActions";
import { useDrag, useDrop } from "react-dnd";
import { TIngredient } from "../../../types/types";
import { TFillingElement } from "../../../types/types";


export function BurgerConstCard({
  moveCard,
  index,
  id,
  item,
}: TFillingElement) {
  const ingredientsConstructor = useAppSelector(
    (store) => store.currentIngredients
  );
  const burgerInfill = ingredientsConstructor.other;
  const dispatch = useAppDispatch();

  function deleteCard(item:TIngredient) {
    dispatch(removeCurrentIngredient(item));
  }

  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "item",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: TFillingElement, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        return;
      }
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex, burgerInfill);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} data-handler-id={handlerId} style={{ ...styles, opacity }}>
      <li className={`${styles.totalContainer} mt-4 mb-4`}>
        <DragIcon type="primary" />
        <div className={`${styles.elementTotal} pt-4 pr-6 pb-4 pl-6`}>
          <img src={item.image} alt="" className={`${styles.elementImage}`} />
          <span
            className={`${styles.elementTitle} text text_type_main-default mr-5`}
          >
            {item.name}
          </span>
          <div className={`${styles.containerPrice} mr-4`}>
            <span
              className={`${styles.elementPrice} text text_type_digits-default`}
            >
              {item.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <DeleteIcon type="primary" onClick={() => deleteCard(item)} />
        </div>
      </li>
    </div>
  );
}


