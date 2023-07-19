import React from "react";
import IconComponent from "./IconComponent";

type props = {
  name: string;
  number: number | string;
  value: string | number;
  color: string;
  icon: string;
};

function DataCard(props: props) {
  return (
    <div className="card_box w-[25%] py-4 px-8 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-themeTextColor text-2xl">{props.name}</span>
        <IconComponent icon={props.icon} color={props.color} size={"20"} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#151D48] text-xl font-semibold">
          {props.number}
        </span>
        <span
          style={{ color: props.color }}
          className={`text-xl font-semibold`}
        >
          {props.value}
        </span>
      </div>
    </div>
  );
}

export default DataCard;
