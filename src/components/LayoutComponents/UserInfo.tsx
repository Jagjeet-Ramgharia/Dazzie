"use client";
import React, { useState } from "react";
import IconComponent from "../CommonComponents/IconComponent";
import Avatar from "../CommonComponents/Avatar";

function UserInfo() {
  return (
    <div>
      <div className="flex cursor-pointer">
        <div className="flex items-center justify-center mr-2">
          <Avatar />
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-themeHeadingColor items-center xl:text-sm md:text-[12px] sm:text-[8px] capitalize flex">
            Sumanto
            <IconComponent icon={"forward"} color={"#6A727D"} size={"16"} />
          </span>
          <span className="text-sm w-full capitalize text-themeTextColor">
            Cashier
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
