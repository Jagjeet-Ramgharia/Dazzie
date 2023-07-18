"use client";
import React from "react";
import sideBarStyles from "./layotStyles.module.scss";
import Link from "next/link";
import IconComponent from "../CommonComponents/IconComponent";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    id: "1",
    link: "food",
    icon: "food",
  },
  {
    id: "2",
    link: "latest-order",
    icon: "latest-order",
  },
  {
    id: "3",
    link: "customer",
    icon: "customer",
  },
  {
    id: "4",
    link: "edit-product",
    icon: "edit-product",
  },
  {
    id: "5",
    link: "coupon",
    icon: "coupon",
  },
  {
    id: "6",
    link: "employee-shift",
    icon: "employee-shift",
  },
];

function SideBar() {
  const path = usePathname();
  const activePath = path.split("/")[1];

  return (
    <div className={sideBarStyles.sidebar}>
      <div className={sideBarStyles.menu}>
        {menuItems.map((el) => {
          return (
            <Link
              href={el.link}
              key={el.id}
              className={`${sideBarStyles.menu_item} ${
                el.link === activePath ? sideBarStyles.menu_active : ""
              }`}
            >
              <IconComponent icon={el.icon} color={""} size={""} />
            </Link>
          );
        })}
      </div>
      <Link href={"#"} className="cursor-pointer">
        <IconComponent icon={"settings"} color={""} size={""} />
      </Link>
    </div>
  );
}

export default SideBar;
