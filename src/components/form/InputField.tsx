import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

export function InputField({ name, control, ...rest }: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <TextField
      name={name}
      margin="normal"
      size="small"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      fullWidth
      {...rest}
    />
  );
}
