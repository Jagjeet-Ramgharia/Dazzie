"use client";
import { InputAdornment, Paper, TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import { FiSearch } from "react-icons/fi";
import propTypes from "prop-types";
interface props {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<Element>;
  endIcon?: boolean;
  className?: string;
  width?: string;
}

function TableTopSearchBar({
  value,
  onChange,
  placeholder,
  endIcon = false,
  className,
  width,
}: props) {
  return (
    <Paper
      className={`customScroll ${className}`}
      style={{
        borderRadius: "10px",
        color: "white",
        width: width,
        height: "3rem",
        scrollbarColor: "red !important",
        background: "#F7F7FC",
        boxShadow: "unset",
      }}
    >
      <TextField
        value={value}
        onChange={onChange}
        sx={{
          marginTop: "4px",
          color: "#F9FAFB",
          height: "100%",
          width: "100%",
          border: "0px !important",
          "& .MuiOutlinedInput-notchedOutline ": {
            borderColor: "transparent !important",
            borderWidth: "0px !important",
          },
          "&.MuiTextField-root.MuiFormControl-root ": {
            // paddingLeft: "15px",
          },
          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            padding: "10px 4px 7px 7px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FiSearch color="#5D5FEF" size="22px" />
            </InputAdornment>
          ),
          sx: { color: "black" },
        }}
        placeholder={placeholder}
      />
    </Paper>
  );
}
TableTopSearchBar.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
};
export default TableTopSearchBar;
