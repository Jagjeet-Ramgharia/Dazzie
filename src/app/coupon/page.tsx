"use client";
import CustomTable from "@/components/CommonComponents/CustomTable.tsx/CustomTable";
import IconComponent from "@/components/CommonComponents/IconComponent";
import Loader from "@/components/CommonComponents/Loader";
import TableTopSearchBar from "@/components/CommonComponents/SearchBar";
import CustomSwitch from "@/components/CommonComponents/Switch/Switch";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: "01",
    code: "20% Off Entire Order",
    discount: "20%",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: true,
  },
  {
    id: "02",
    code: "10% Off Entire Item",
    discount: "1 February 2021",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: false,
  },
  {
    id: "03",
    code: "10% Off Entire Item",
    discount: "1 February 2021",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: false,
  },
  {
    id: "04",
    code: "10% Off Entire Item",
    discount: "1 February 2021",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: false,
  },
  {
    id: "05",
    code: "20% Off Entire Order",
    discount: "20%",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: true,
  },
  {
    id: "06",
    code: "10% Off Entire Item",
    discount: "1 February 2021",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: true,
  },
  {
    id: "07",
    code: "10% Off Entire Item",
    discount: "1 February 2021",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: true,
  },
  {
    id: "08",
    code: "10% Off Entire Item",
    discount: "1 February 2021",
    startDate: "February 14 2021",
    endDate: "February 17 2021",
    activate: true,
  },
];

function Coupon() {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  type row = {
    id: string;
    code: string;
    discount: string;
    startDate: string;
    endDate: string;
    activate: boolean;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

  const columns = [
    {
      name: "ID",
      sortable: false,
      maxWidth: "5%",
      selector: (row: row) => row.id,
    },
    {
      name: "Code",
      sortable: false,
      maxWidth: "20%",
      selector: (row: row) => row.code,
    },
    {
      name: "Discount",
      sortable: true,
      maxWidth: "10%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.discount,
    },
    {
      name: "Start Date",
      sortable: true,
      maxWidth: "20%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => (
        <div className="">
          <div>{row.startDate}</div>
        </div>
      ),
    },
    {
      name: "End Date",
      sortable: true,
      maxWidth: "20%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => row.endDate,
    },
    {
      name: "Activate",
      sortable: true,
      maxWidth: "15%",
      style: {
        justifyContent: "flex-start",
      },
      selector: (row: row) => (
        <CustomSwitch
          checked={row.activate}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.checked)
          }
        />
      ),
    },
    {
      name: "",
      sortable: true,
      maxWidth: "10%",
      style: {
        justifyContent: "flex-end",
      },
      selector: (row: row) => (
        <IconComponent icon={"more"} color={""} size={""} />
      ),
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full p-3">
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl">Coupon</span>
        <button className="btn">Create New</button>
      </div>
      <div className="wrapper mt-8 p-5">
        <div className="flex items-center gap-5  w-full">
          <TableTopSearchBar
            placeholder={"Search here..."}
            value={search}
            onChange={function (event: React.ChangeEvent<HTMLInputElement>) {
              setSearch(event.target.value);
            }}
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

export default Coupon;
