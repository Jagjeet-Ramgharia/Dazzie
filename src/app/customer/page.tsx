"use client";
import CustomTable from "@/components/CommonComponents/CustomTable.tsx/CustomTable";
import IconComponent from "@/components/CommonComponents/IconComponent";
import TableTopSearchBar from "@/components/CommonComponents/SearchBar";
import React from "react";

const data = [
  {
    id: "XXX1",
    name: "Arlene McCoy",
    joinDate: "1 February 2021",
    totalVisit: "2",
    purchasedItem:
      "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    totalSpent: "$490.51",
  },
  {
    id: "XXX2",
    name: "Arlene McCoy",
    joinDate: "1 February 2021",
    totalVisit: "2",
    purchasedItem:
      "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    totalSpent: "$490.51",
  },
  {
    id: "XXX3",
    name: "Arlene McCoy",
    joinDate: "1 February 2021",
    totalVisit: "2",
    purchasedItem:
      "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    totalSpent: "$490.51",
  },
  {
    id: "XXX4",
    name: "Arlene McCoy",
    joinDate: "1 February 2021",
    totalVisit: "2",
    purchasedItem:
      "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
    totalSpent: "$490.51",
  },
];

function page() {
  type row = {
    id: string;
    name: string;
    joinDate: string;
    totalVisit: string;
    purchasedItem: string;
    totalSpent: string;
  };

  const columns = [
    {
      name: "ID",
      sortable: false,
      maxWidth: "10%",
      selector: (row: row) => row.id,
    },
    {
      name: "Name",
      sortable: false,
      maxWidth: "20%",
      selector: (row: row) => row.name,
    },
    {
      name: "Join Date",
      sortable: true,
      maxWidth: "15%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.joinDate,
    },
    {
      name: "Total Visit",
      sortable: true,
      maxWidth: "10%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.totalVisit,
    },
    {
      name: "Purchased Items ",
      sortable: true,
      maxWidth: "35%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.purchasedItem,
    },
    {
      name: "Total Spend",
      sortable: true,
      maxWidth: "15%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.totalSpent,
    },
  ];

  return (
    <div className="w-full h-full p-3">
      <div className="wrapper p-[2.5rem]">
        <div className="flex items-center gap-5  w-full">
          <TableTopSearchBar
            placeholder={"Search Here..."}
            value={""}
            onChange={function (event: React.ChangeEvent<Element>): void {
              throw new Error("Function not implemented.");
            }}
            className="w-full"
          />
          <IconComponent icon={"filter"} color={""} size={""} />
          <IconComponent icon={"more"} color={""} size={""} />
        </div>
        <div className="mt-5">
          <CustomTable
            dataDataLabel={""}
            columns={columns}
            data={data}
            selectedRows={[]}
            totalItems={data.length}
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
    </div>
  );
}

export default page;
