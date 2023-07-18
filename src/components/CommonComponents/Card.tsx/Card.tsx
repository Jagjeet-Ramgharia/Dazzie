import React from "react";
import cardStyles from "./card.module.scss";

type cardProps = {
  name: string;
  price: string;
};

function Card({ name, price }: cardProps) {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.card_image}></div>
      <div className="flex flex-col gap-1 mt-3">
        <span className={cardStyles.food_name}>{name}</span>
        <span className={`${cardStyles.food_price} ${cardStyles.food_name}`}>
          {price}
        </span>
      </div>
    </div>
  );
}

export default Card;
