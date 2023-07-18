import React, {
  ChangeEventHandler,
  ComponentProps,
  Dispatch,
  SetStateAction,
} from "react";
import DataTable, { ConditionalStyles } from "react-data-table-component";

type rowType = {
  id: string;
  /*...*/
};

type tableProps = {
  dataDataLabel: string;
  columns: any[];
  data: any;
  selectedRows: rowType[];
  perPage?: number | undefined;
  totalItems: number;
  currentPage: number;
  handleCurrentPage: (a: number) => void;
  customStyles?: {
    when?: () => boolean;
    style?: StyleSheet;
  };
  onClickHandler?: (
    row: any,
    e: React.MouseEvent<Element, MouseEvent>
  ) => ChangeEventHandler;
  ExpandedComponent?: any;
  expandableRowId: string;
  conditionalRowStyles: ConditionalStyles<any>[];
  isLoading: any;
  selectProps: ComponentProps<any>;
  setSelectedRows: Dispatch<SetStateAction<any>>;
  expandableRows: boolean;
  hideSwitch: boolean;
  checkboxDisableRowsIds: string[];
  checkboxRequired?: boolean;
  title?: string;
  viewAll?: boolean;
  expandableRowsComponentProps?: any;
};

function CustomTable({
  data,
  columns,
  isLoading,
  perPage = 10,
  dataDataLabel,
}: tableProps) {
  return (
    <DataTable
      title={dataDataLabel}
      columns={columns}
      data={data}
      progressPending={isLoading}
      pagination
      paginationPerPage={perPage}
      customStyles={{
        headRow: {
          style: {
            background: "#F7F7FC !important",
            color: "#96A5B8",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "19.2px",
            borderBottom: "none !important",
          },
        },
        rows: {
          style: {
            borderBottom: "1px solid #F7F7FC !important",
            height: "112px !important",
          },
        },
      }}
    />
  );
}

export default CustomTable;
