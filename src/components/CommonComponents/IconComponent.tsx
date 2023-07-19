import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import food from "@/assets/Images/food.svg";
import Image from "next/image";
import latestOrder from "@/assets/Images/orders.svg";
import customer from "@/assets/Images/customer.svg";
import orderpackage from "@/assets/Images/Package.svg";
import coupon from "@/assets/Images/Coupon Discount.svg";
import user from "@/assets/Images/user.svg";
import settings from "@/assets/Images/seettings.svg";
import filter from "@/assets/Images/filter.svg";
import more from "@/assets/Images/threedots.svg";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

type icons = {
  icon: string;
  color: string;
  size: string;
  style?: object;
};

const IconComponent = ({ icon, color, size, style }: icons) => {
  // Map the icon name to the corresponding component
  const getIconComponent = (icon: string) => {
    const iconStyle = { color, ...style };
    switch (icon) {
      case "home":
        return <FaHome color={color} size={size} style={style} />;
      case "up":
        return <AiOutlineArrowUp color={color} size={size} style={style} />;
      case "down":
        return <AiOutlineArrowDown color={color} size={size} style={style} />;
      case "forward":
        return <IoIosArrowForward color={color} size={size} style={style} />;
      case "downward":
        return <BsChevronDown color={color} size={size} style={style} />;
      case "food":
        return <Image src={food.src} width={27} height={27} alt="menu_link" />;
      case "latest-order":
        return (
          <Image src={latestOrder.src} width={27} height={27} alt="menu_link" />
        );
      case "customer":
        return (
          <Image src={customer.src} width={27} height={27} alt="menu_link" />
        );
      case "edit-product":
        return (
          <Image
            src={orderpackage.src}
            width={27}
            height={27}
            alt="menu_link"
          />
        );
      case "coupon":
        return (
          <Image src={coupon.src} width={27} height={27} alt="menu_link" />
        );
      case "employee-shift":
        return <Image src={user.src} width={27} height={20} alt="menu_link" />;
      case "settings":
        return (
          <Image src={settings.src} width={27} height={20} alt="menu_link" />
        );
      case "filter":
        return (
          <Image src={filter.src} width={27} height={27} alt="menu_link" />
        );
      case "more":
        return <Image src={more.src} width={27} height={27} alt="menu_link" />;
      default:
        return (
          <div
            className={`bg-[#96A5B8] text-white font-semibold rounded-lg p-[4px] ${
              icon === "" && "hidden"
            }`}
          >
            {icon ? icon?.split(" ")?.[0] : null}
          </div>
        );
    }
  };

  return <div>{getIconComponent(icon)}</div>;
};

export default IconComponent;
