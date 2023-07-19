"use client";
import CustomTable from "@/components/CommonComponents/CustomTable.tsx/CustomTable";
import DataCard from "@/components/CommonComponents/DataCard";
import IconComponent from "@/components/CommonComponents/IconComponent";
import React from "react";

const data = [
  {
    id: 1,
    name: "Customer",
    number: 1000,
    value: "-15%",
    color: "#F04461",
    icon: "down",
  },
  {
    id: 2,
    name: "Orders",
    number: 1000,
    value: "+20%%",
    color: "#42BDA1",
    icon: "up",
  },
  {
    id: 3,
    name: "Revenue",
    number: "$50.000",
    value: "+10%",
    color: "#42BDA1",
    icon: "up",
  },
  {
    id: 4,
    name: "Nett Profit",
    number: "$12.000",
    value: "+12%",
    color: "#42BDA1",
    icon: "down",
  },
];

const tableData = [
  {
    id: 1,
    name: "Sashimi",
    price: "$22",
    Quality: 30,
    NetProfit: "$710.68 ",
    Revenue: "$293.01",
  },
  {
    id: 2,
    name: "Unagi - Grilled Eel",
    price: "$22",
    Quality: 30,
    NetProfit: "$779.58",
    Revenue: "$739.65",
  },
  {
    id: 3,
    name: "Soba - Buckwheat Noodles",
    price: "$22",
    Quality: 30,
    NetProfit: "$105.55",
    Revenue: "$779.58",
  },
  {
    id: 4,
    name: "Onigiri - Rice Balls",
    price: "$22",
    Quality: 30,
    NetProfit: "$475.22",
    Revenue: "$589.99",
  },
  {
    id: 5,
    name: "Yakitori - Grilled Chicken",
    price: "$22",
    Quality: 30,
    NetProfit: "$475.22",
    Revenue: "$406.27",
  },
  {
    id: 6,
    name: "Miso Soup",
    price: "$22",
    Quality: 30,
    NetProfit: "$475.22",
    Revenue: "$396.84",
  },
  {
    id: 7,
    name: "Amazake",
    price: "$22",
    Quality: 30,
    NetProfit: "$475.22",
    Revenue: "$767.50",
  },
  {
    id: 8,
    name: "Royal Milk Tea",
    price: "$22",
    Quality: 30,
    NetProfit: "",
    Revenue: "$778.35",
  },
  {
    id: 9,
    name: "Flavored Soymilk Drinks",
    price: "$22",
    Quality: 30,
    NetProfit: "$475.22",
    Revenue: "$778.35",
  },
];

const itemSold = [
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

function page() {
  // ------------------------------------ Columns -----------------------------------------

  type row = {
    id: number;
    name: string;
    price: string;
    Quality: number;
    NetProfit: string;
    Revenue: string;
  };

  const columns = [
    {
      name: "No.",
      sortable: false,
      maxWidth: "5%",
      selector: (row: row) => row.id,
    },
    {
      name: "Item",
      sortable: false,
      maxWidth: "40%",
      selector: (row: row) => row.name,
    },
    {
      name: "Quantity",
      sortable: true,
      maxWidth: "20%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.Quality,
    },
    {
      name: "Revenue",
      sortable: true,
      maxWidth: "20%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.Revenue,
    },
    {
      name: "Net Profit ",
      sortable: true,
      maxWidth: "15%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.NetProfit,
    },
  ];

  // --------------------------------------------------------------------------------------

  return (
    <div className="w-full h-full p-3 min-h-screen">
      <div className="flex items-center justify-between gap-6 py-7">
        {data.map((el) => {
          return (
            <DataCard
              key={el.id}
              name={el.name}
              number={el.number}
              value={el.value}
              color={el.color}
              icon={el.icon}
            />
          );
        })}
      </div>
      <div className="flex items-start gap-6 w-full">
        <div className="bg-white rounded-[8px] p-3 w-[70%]">
          <div className="">
            <CustomTable
              dataDataLabel={"Latest Order"}
              columns={columns}
              data={tableData}
              selectedRows={[]}
              totalItems={tableData.length}
              currentPage={0}
              handleCurrentPage={function (a: number): void {
                throw new Error("Function not implemented.");
              }}
              expandableRowId={""}
              conditionalRowStyles={[]}
              isLoading={undefined}
              selectProps={undefined}
              setSelectedRows={function (value: any): void {
                throw new Error("Function not implemented.");
              }}
              expandableRows={false}
              hideSwitch={false}
              checkboxDisableRowsIds={[]}
            />
          </div>
        </div>
        <div className="bg-white rounded-[8px] px-5 py-6 w-[30%] min-h-[600px] overflow-y-scroll">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Item Sold</span>
            <div className="select_box">
              <p>Best Sellers</p>
              <IconComponent icon={"downward"} color={"#5541D7"} size={"20"} />
            </div>
          </div>
          <div className="flex flex-col justify-between h-[500px]  mt-4">
            {itemSold.map((el) => {
              return (
                <div key={el.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="img" />
                    <span>{el.name}</span>
                  </div>
                  <div>{el.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
