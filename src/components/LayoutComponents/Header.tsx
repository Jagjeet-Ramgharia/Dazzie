"use client";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserInfo from "./UserInfo";
import headerStyles from "./layotStyles.module.scss";

export default function AuthHeader() {
  return (
    <div
      className={`flex items-center justify-between h-[100px] px-3 ${headerStyles.header}`}
    >
      <div className="flex items-center gap-2">
        <div className={headerStyles.theme_logo} />
        <span className="text-3xl text-[#151D48]">Dazzie</span>
      </div>

      <div className=" flex  gap-8 items-center">
        <div className="cursor-pointer my-5 rounded-full">
          <IoMdNotificationsOutline color="#9A9AB0" size="1.7rem" />
        </div>
        <div className="pr-10">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
