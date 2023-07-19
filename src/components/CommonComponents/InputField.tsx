"use client";
import { Paper, TextField } from "@mui/material";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import IconComponent from "./IconComponent";

interface Props {
  placeholder?: string;
  value?: string | number;
  onChange?: ChangeEventHandler;
  name?: string;
  className?: string;
  icon?: string;
  secret: boolean;
  showIcon: boolean;
  multiline?: boolean;
  rows?: string | number | undefined;
  type?: string;
  defaultValue?: object | string;
  disabled?: boolean;
  ref?: any;
  bgColor?: string;
  height?: string;
}
function InputField({
  name,
  className,
  placeholder,
  icon,
  secret,
  showIcon = true,
  multiline = false,
  rows,
  type = "text",
  defaultValue,
  disabled,
  ref,
  bgColor = "#F7F7FC",
  onChange,
  value,
  height = "50px",
}: Props) {
  const [fieldType, setFieldType] = useState<any>(type);
  useEffect(() => {
    setFieldType(secret ? "password" : type);
  }, [secret]);
  const [borderColor, setBorderColor] = useState<string>("#6E6E70");

  return (
    <Paper
      className={`customScroll ${className}`}
      onFocus={() => setBorderColor("#5541d7")}
      onBlur={() => setBorderColor("#F9FAFB")}
      style={{
        borderRadius: "10px",
        borderColor: borderColor,
        color: "white",
        width: "100%",
        border: "solid 1px",
        background: bgColor,
        padding: "7px",
        overflow: "hidden",
        height: height,
        boxShadow: "0px 2px 7px 1px rgba(128, 147, 255, 0.12)",
      }}
    >
      <TextField
        value={value}
        rows={"4"}
        onChange={onChange}
        type={fieldType}
        name={name}
        multiline={multiline}
        maxRows={rows}
        autoComplete={"off"}
        disabled={disabled}
        className="disabled:text-black"
        sx={{
          color: "white",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          border: "0px !important",
          "& .MuiOutlinedInput-notchedOutline ": {
            borderColor: "transparent !important",
            borderWidth: "0px !important",
            paddingRight: "0px !important",
          },
          "&.MuiTextField-root.MuiFormControl-root ": {
            padding: "0px",
          },
          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            padding: "0px",
            fontSize: "0.9rem !important",
          },
          "& .MuiInputBase-root.MuiOutlinedInput-root": {
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
          },
          "& .MuiOutlinedInput-root ": {
            "&.Mui-focused fieldset ": {
              borderColor: "white",
            },
          },
          "& .Mui-disabled": {
            WebkitTextFillColor: "black !important",
            cursor: "not-allowed",
          },
        }}
        InputProps={{
          startAdornment: showIcon ? (
            <div style={{ paddingRight: "0.5rem" }}>
              <IconComponent icon={icon || ""} color={"#96A5B8"} size={"20"} />
            </div>
          ) : (
            ""
          ),
          sx: { color: "#05004E" },
        }}
        placeholder={placeholder}
      />
    </Paper>
  );
}
InputField.defaultProps = {
  showIcon: true,
};
export default InputField;
