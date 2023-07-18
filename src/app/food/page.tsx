"use client";
import Card from "@/components/CommonComponents/Card.tsx/Card";
import NavigateTabs from "@/components/CommonComponents/NavigationTabs";
import TableTopSearchBar from "@/components/CommonComponents/SearchBar";
import TabPanel from "@/components/CommonComponents/TabPanel";
import AllFood from "@/components/ViewsComponent/food/AllFood";
import React, { useState } from "react";

const tabs = [
  {
    label: "All",
    param: "all",
    component: <AllFood />,
  },
  {
    label: "Food",
    param: "food",
    component: "Food",
  },
  {
    label: "Drinks",
    param: "drinks",
    component: "Drinks",
  },
  {
    label: "Snack",
    param: "snack",
    component: "Snack",
  },
  {
    label: "Packages",
    param: "packages",
    component: "Packages",
  },
];

function Food() {
  const [value, setValue] = useState<any>("all");
  return (
    <div className="w-full h-full p-3">
      <div className="wrapper">
        <div className="w-full p-[2.5rem]">
          <TableTopSearchBar
            placeholder={"Search here..."}
            value={""}
            onChange={function (event: React.ChangeEvent<Element>): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className="my-3 w-full">
          <NavigateTabs
            tabs={tabs.map((el) => el)}
            currentTab={value}
            setCurrentTab={setValue}
            setParams={true}
            subTab={"0"}
            width="20%"
          />
        </div>
        <div className="p-[2.5rem]">
          {tabs.map((TabPanelData, i) => {
            return (
              <TabPanel
                key={`tabPanel-${i}`}
                value={value}
                index={TabPanelData.param}
              >
                {TabPanelData.component}
              </TabPanel>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Food;
