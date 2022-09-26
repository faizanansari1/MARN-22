import { TextField, styled } from "@mui/material";
import React from "react";

const InputField = ({ ...props }) => {
  const CustomField = styled(TextField)(({ theme }) => ({
    padding: `0px ${theme.spacing(1)}`,
    border: `1px solid #ccc`,
    borderRadius: 6,
    fontSize: "0.875rem",

    "& .MuiInputBase-root": {
      fontSize: "0.875rem",
    },
  }));

  return (
    <CustomField
      {...props}
      //   InputProps={{
      //     // ...props.InputProps,
      //     disableUnderline: true,
      //     // autoComplete: "off",
      //   }}
      variant="standard"
    />
  );
};

export default InputField;
