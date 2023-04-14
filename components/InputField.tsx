"use client";

import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

type Props = {
  label: string;
  type: string;
  name: string;
  value?: string | number;
  defaultValue?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
  label,
  type,
  name,
  onChange,
  value,
  defaultValue,
}: Props) {
  return (
    <div className="w-full space-y-2">
      <TextField
        id="standard-basic"
        label={label}
        variant="outlined"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        color="info"
        sx={{
          [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
            {
              borderColor: "#0F2557",
            },
          [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
            {
              borderColor: "#3FD2C7",
            },
          input: { color: "#fff", fontSize: "18px" },
          label: {
            color: "#ffffff",
            fontSize: "15px",
          },
        }}
        fullWidth
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default InputField;
