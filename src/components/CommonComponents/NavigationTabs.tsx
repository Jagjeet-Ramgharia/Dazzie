"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import CustomTab from "./CustomTab";
import CustomTabs from "./CustomTabs";

interface props {
  tabs: { label: string; param: string }[];
  tabsType: any;
  currentTab?: string | null | undefined;
  setCurrentTab: Dispatch<SetStateAction<string>>;
  setParams: boolean;
  tab?: string | null;
  subTab?: string | null | undefined;
  TabSx?: StyleSheet | object;
  TabsSx?: StyleSheet | object;
  width?: string;
}
function NavigateTabs({
  tabs,
  tabsType,
  currentTab,
  setCurrentTab,
  setParams = false,
  tab = null,
  subTab = null,
  TabSx = {},
  TabsSx = {},
  width,
}: props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTab = currentTab;
  function a11yProps(index: string) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleTabChange = (event: any, newValue: string) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    if (setParams) {
      if (searchTab != "0" && searchTab) {
        setCurrentTab(searchTab as string);
      }
    }
  }, [searchTab]);
  return (
    <Box className="">
      {tabsType == "Button" ? (
        <CustomTabs
          sx={{ ...TabsSx }}
          value={currentTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          {tabs.map(
            (
              tab: {
                param: string;
                label: string;
              },
              index: number
            ) => (
              <CustomTab
                sx={{
                  minWidth: "109px",
                  width: "20% !important",
                  "& .MuiButtonBase-root.MuiTab-root.MuiTab-root": {
                    height: "26px !important",
                  },
                  ...TabSx,
                }}
                key={`tab-${tab?.param}`}
                label={tab?.label}
                value={tab?.param}
                index={tab?.param}
                {...a11yProps(tab?.param)}
              />
            )
          )}
        </CustomTabs>
      ) : (
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          sx={{
            borderBottom: 0,
            borderColor: "#DBD7F4",
            ...TabsSx,
          }}
          aria-label="basic tabs example"
        >
          {tabs.map(
            (
              tab: {
                param: string;
                label: string;
              },
              index: number
            ) => (
              <Tab
                key={`tab-${index}`}
                sx={{
                  color: "#6A727D",
                  outline: "0px !important",
                  fontWeight: "600 !important",
                  fontSize: "16px !important",
                  width: width,
                  textTransform: "none",
                  borderBottom: 4,
                  borderColor: "#DBD7F4",
                  "&.Mui-selected": {
                    borderBottom: 4,
                    borderColor: "#5541D7",
                    color: "#11142D !important",
                  },
                  ...TabSx,
                }}
                label={tab.label}
                value={tab.param}
                {...a11yProps(tab.param)}
              />
            )
          )}
        </Tabs>
      )}
    </Box>
  );
}
NavigateTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      param: PropTypes.string,
    })
  ),
  tabsType: PropTypes.oneOf(["Button", "Underline"]),
  setParams: PropTypes.bool,
  currentTab: PropTypes.string,
  setCurrentTab: PropTypes.func,
  parentTab: PropTypes.string,
  TabSx: PropTypes.object,
  TabsSx: PropTypes.object,
};
export default NavigateTabs;
