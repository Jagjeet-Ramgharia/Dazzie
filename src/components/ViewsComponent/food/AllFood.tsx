import Card from "@/components/CommonComponents/Card.tsx/Card";
import React from "react";

const foods = [
  {
    id: 1,
    name: "Sashimi",
    price: "$22",
  },
  {
    id: 2,
    name: "Unagi - Grilled Eel",
    price: "$22",
  },
  {
    id: 3,
    name: "Soba - Buckwheat Noodles",
    price: "$22",
  },
  {
    id: 4,
    name: "Onigiri - Rice Balls",
    price: "$22",
  },
  {
    id: 5,
    name: "Yakitori - Grilled Chicken",
    price: "$22",
  },
  {
    id: 6,
    name: "Miso Soup",
    price: "$22",
  },
];

const drinks = [
  {
    id: 1,
    name: "Amazake",
    price: "$22",
  },
  {
    id: 2,
    name: "Royal Milk Tea",
    price: "$22",
  },
  {
    id: 3,
    name: "Flavored Soymilk Drinks",
    price: "$22",
  },
];

function AllFood() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="text-xl font-semibold">Food</span>
        <div className="mt-4 grid grid-cols-3 gap-6">
          {foods.map((el) => {
            return <Card name={el.name} price={el.price} key={el.id} />;
          })}
        </div>
      </div>
      <div>
        <span className="text-xl font-semibold">Drinks</span>
        <div className="mt-4 grid grid-cols-3 gap-6">
          {drinks.map((el) => {
            return <Card name={el.name} price={el.price} key={el.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllFood;
