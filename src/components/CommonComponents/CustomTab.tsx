import React from "react";
import { styled, Tab } from "@mui/material";

const CustomTab = styled((props: any) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    "&.MuiTab-root": {
      minHeight: "26px !important",
      // height:"35px",
      padding: "5px 5px !important",
      color: "#6A727D",
      fontFamily: "Manrope",
      fontWeight: "500 !important",
      fontSize: "12px !important",
      textTransform: "none",
      minWidth: "108px",
      border: "solid 1px #EDF2F6",
      borderRadius: "6px !important",
      marginRight: "20px !important",
      outline: "0px",
    },
    "&.Mui-selected": {
      color: "#8093FF !important",
      background: "#fff",
    },
  })
);

export default CustomTab;
